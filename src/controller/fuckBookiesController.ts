import { RequestHandler } from "express";
import { fetchBetsson } from "../service/betssonService";
import { fetchBetfair } from "../service/betfairService";
import { fetchBetplay } from "../service/betplayService";
import { fetchBwin } from "../service/bwinService";
import { fetchRushbet } from "../service/rushbetService";

export const getAllBets: RequestHandler = async (_req, res, _next) => {
  /*const allItems: FuckBookies[] = await FuckBookies.findAll({
    include: [Team],
  });
  */
  let data = [] as any;
  data = [...(await fetchBetplay())];
  data = [...data, ...(await fetchBetfair())];
  data = [...data, ...(await fetchBetsson())];
  data = [...data, ...(await fetchBwin())];
  data = [...data, ...(await fetchRushbet())];

  return res
    .status(200)
    .json({ message: "Bets fetched successfully", data: data });
};
