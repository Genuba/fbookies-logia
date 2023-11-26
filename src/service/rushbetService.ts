import { RushbetBuilder } from "../builder/rushbetBuilder";
import { BetInfo } from "../model/betInfo";
import axios from "axios";

export const fetchRushbet = async (): Promise<BetInfo[]> => {
  const response = await axios.get(
    "https://us1-api.aws.kambicdn.com/offering/v2018/rsico/listView/football.json?lang=es_ES&market=CO&client_id=2"
  );
  return response.data["events"].reduce((x: any, y: any) => {
    const rushbetBuilder = new RushbetBuilder();
    rushbetBuilder.mapBetResponseNodeToBetInfo(y);
    return Object.keys(rushbetBuilder).length ? [...x, rushbetBuilder] : [...x];
  }, []);
};
