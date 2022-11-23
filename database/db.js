import chalk from "chalk";
import { products } from "./seed.js";
import "dotenv/config";
import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

try {
  await mongoClient.connect();
  db = mongoClient.db("magic-sports");
  console.log(chalk.bold.green("CONECTADO", "- database mongo DB"));
  await db.collection("products").insertMany(products);
} catch (e) {
  console.log(chalk.red("ERRO", "- ao tentar conectar a database mongo DB", e));
}

export default db;
