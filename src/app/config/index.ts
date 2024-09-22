import dotenv from "dotenv";
dotenv.config();
export default {
  port: process.env.PORT,
  db_url: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
};
