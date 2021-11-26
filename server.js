import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import app from "./app.js";

dotenv.config({ path: "./config.env" });

// Run this when there's error in app
process.on("uncaughtException", (err) => {
  console.log(`Caught exception: ${err}\n`);
});

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Succesfully connected to Database");
});

app.listen(process.env.PORT, () => {
  console.log("The server is running on 3000 :)");
});
