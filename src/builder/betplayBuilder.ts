import { BetInfo } from "../model/betInfo";
import moment from "moment-timezone";

export class BetplayBuilder implements BetInfo {
  bookie: string;
  date: string;
  teamA: { name: string; payOffPercent: number };
  teamB: { name: string; payOffPercent: number };
  payOffDraw: number;

  mapBetResponseNodeToBetInfo(node: any): void {
    if (node["betOffers"].length > 0) {
      this.bookie = "Betplay";
      this.date = moment(node.event.start).utc().tz("America/Bogota").format();
      this.teamA = {
        name: node["event"]["homeName"],
        payOffPercent: node.betOffers[0].outcomes[0].odds / 1000,
      };
      this.teamB = {
        name: node["event"]["awayName"],
        payOffPercent: node.betOffers[0].outcomes[2].odds / 1000,
      };
      this.payOffDraw = node.betOffers[0].outcomes[1].odds / 1000;
    }
  }
}
