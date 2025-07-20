import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // adjust relative path if needed

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("ERROR:", error);
    throw error;
  }
};

export default connectDB;
