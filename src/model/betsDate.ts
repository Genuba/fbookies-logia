import { ObjectId } from "mongodb";
export default class BetsDate {
  constructor(public bets?: any, public id?: ObjectId) {}
}
