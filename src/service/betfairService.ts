import { BetfairBuilder } from "../builder/betfairBuilder";
import { BetInfo } from "../model/betInfo";
import axios from "axios";

export const fetchBetfair = async (): Promise<BetInfo[]> => {
  const response = await axios.get(
    "https://sports.betfairapuestas.co/rest/FEWFixture/GroupedMatches?Culture=es&TournamentData[]=4321&TournamentData[]=160&TimeFilter=0&NumberOfOddTypes=4",
    {
      headers: {
        authority: "www.api-netbots.com",
        origin: "http://www.netbots-robotip.com",
        referer: "https://www.netbots-robotip.com/",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "user-agent": "Chrome/106.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    }
  );
  var betInfos: BetInfo[] = [];

  response.data[0].t.forEach((element: any) => {
    let bets = element.m.reduce((x: any, y: any) => {
      const betfairBuilder = new BetfairBuilder();
      betfairBuilder.mapBetResponseNodeToBetInfo(y);

      return Object.keys(betfairBuilder).length
        ? [...x, betfairBuilder]
        : [...x];
    }, []) as BetInfo[];
    betInfos = [...betInfos, ...bets];
  });

  return betInfos;
};
