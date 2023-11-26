import { BetInfo } from "../model/betInfo";
import moment from "moment-timezone";

export class BwinBuilder implements BetInfo {
  bookie: string;
  date: string;
  teamA: { name: string; payOffPercent: number };
  teamB: { name: string; payOffPercent: number };
  payOffDraw: number;

  mapBetResponseNodeToBetInfo(node: any): void {
    if (
      node["Items"] &&
      node["Items"][0]["Items"] &&
      node["Items"][0]["Items"].length > 0
    ) {
      let itemNode = node["Items"][0]["Items"];
      this.bookie = "Bwin";
      this.date = moment(node.EventDate).utc().tz("America/Bogota").format();
      this.teamA = {
        name: itemNode[0]["Name"],
        payOffPercent: itemNode[0]["Price"],
      };
      this.teamB = {
        name: itemNode[2]["Name"],
        payOffPercent: itemNode[2]["Price"],
      };
      this.payOffDraw = itemNode[1]["Price"];
    }
  }
}
