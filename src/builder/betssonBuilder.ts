import { BetInfo } from "../domain/betInfo";
import moment from "moment";

export class BetssonBuilder implements BetInfo {
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
      this.bookie = "Betsson";
      this.date = moment(node.EventDate).format("DD-MM-YYYY HH:mm:ss");
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
