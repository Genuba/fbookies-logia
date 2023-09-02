import { BwinBuilder } from "../builder/bwinBuilder";
import { BetInfo } from "../domain/betInfo";
import axios from "axios";

export const fetchBwin = async (): Promise<BetInfo[]> => {
  const response = await axios.get(
    "https://sb2frontend-altenar2.biahosted.com/api/Sportsbook/GetUpcoming?timezoneOffset=300&langId=4&skinName=bwin_light&configId=12&culture=es-ES&countryCode=CO&deviceType=Desktop&numformat=en&integration=colbet_light&sportId=66&showAllEvents=false&count=10"
  );
  return response.data["Result"]["Items"][0]["Events"].reduce(
    (x: any, y: any) => {
      const bwinBuilder = new BwinBuilder();
      bwinBuilder.mapBetResponseNodeToBetInfo(y);
      return Object.keys(bwinBuilder).length ? [...x, bwinBuilder] : [...x];
    },
    []
  );
};
