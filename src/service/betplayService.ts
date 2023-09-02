import { BetplayBuilder } from "../builder/betplayBuilder";
import { BetInfo } from "../domain/betInfo";
import axios from "axios";

export const fetchBetplay = async (): Promise<BetInfo[]> => {
  const response = await axios.get(
    "https://us1-api.aws.kambicdn.com/offering/v2018/betplay/listView/football.json?lang=es_CO&market=CO&client_id=2"
  );
  return response.data["events"].reduce((x: any, y: any) => {
    const betplayBuilder = new BetplayBuilder();
    betplayBuilder.mapBetResponseNodeToBetInfo(y);
    return Object.keys(betplayBuilder).length ? [...x, betplayBuilder] : [...x];
  }, []);
};
