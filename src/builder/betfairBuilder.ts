import { BetInfo } from "../domain/betInfo";
import moment from "moment";

export class BetfairBuilder implements BetInfo {
  bookie: string;
  date: string;
  teamA: { name: string; payOffPercent: number };
  teamB: { name: string; payOffPercent: number };
  payOffDraw: number;

  mapBetResponseNodeToBetInfo(node: any): void {
    if (node.o && node.o[0] && node.o[0].m && node.o[0].m.length > 0) {
      this.bookie = "betfair";
      this.date = moment(node.d).format("DD-MM-YYYY HH:mm:ss");
      this.teamA = {
        name: node.at,
        payOffPercent: parseFloat(node.o[0].m[0].o),
      };
      this.teamB = {
        name: node.ht,
        payOffPercent: parseFloat(node.o[0].m[1].o),
      };
      this.payOffDraw = parseFloat(node.o[0].m[2].o);
    }
  }
}
