import { Mongoose } from "mongoose";

declare global {
  let _mongoClientPromise: undefined | Promise<Mongoose>;
}