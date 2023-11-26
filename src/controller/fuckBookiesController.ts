import { RequestHandler } from "express";
import { BetInfo } from "../model/betInfo";
import * as defaults from "../utils/constants";
import { fetchBetplay } from "../service/betplayService";
import { fetchRushbet } from "../service/rushbetService";
import { fetchBwin } from "../service/bwinService";
import { fetchBetsson } from "../service/betssonService";
//import { fetchBetfair } from "../service/betfairService";
import { collections } from "../db/database.service";

export const getAllBets: RequestHandler = async (_req, res, _next) => {
  let data = [] as any;
  data = [...(await fetchBetplay())];
  data = [...data, ...(await fetchRushbet())];
  data = [...data, ...(await fetchBwin())];
  data = [...data, ...(await fetchBetsson())];
  //data = [...data, ...(await fetchBetfair())];

  const dataByDate = getAllBetsSortedByDate(data);

  //Save in data in mongo db
  const result = await collections.betsDate?.insertOne({
    bets: dataByDate,
  });

  return res
    .status(200)
    .json({ message: "Bets fetched successfully", data: result?.insertedId });
};

const getAllBetsSortedByDate = (data: any) => {
  const dateCurrent: Date = new Date();
  return data.reduce((a: any, b: BetInfo) => {
    let isAdd = true;
    let dateBet: Date = new Date(b.date);
    dateBet.setSeconds(0, 0);

    if (defaults.SHOW_CURRENT_MATCHES_FLAG) {
      if (dateBet < dateCurrent) {
        isAdd = false;
      }
    }

    if (isAdd) {
      let dateBetString = Math.floor(dateBet.getTime() / 1000).toString();
      if (a[dateBetString]) {
        a[dateBetString] = [...a[dateBetString], b];
      } else {
        a[dateBetString] = [b];
      }
    }
    return a;
  }, {});
};
