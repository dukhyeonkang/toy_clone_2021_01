import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✔ Connect to DB");
const handleErrorOpen = () => console.log("🤢 Connect to DB Errored");


db.once("open",handleOpen );
db.on("error", handleErrorOpen);
