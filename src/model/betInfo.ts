export interface BetInfo {
  bookie: string;
  date: string;
  teamA: {
    name: string;
    payOffPercent: number;
  };
  teamB: {
    name: string;
    payOffPercent: number;
  };
  payOffDraw: number;

  mapBetResponseNodeToBetInfo(node: any): void;
}
