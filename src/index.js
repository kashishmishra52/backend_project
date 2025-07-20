import dotenv from 'dotenv';
dotenv.config({ path: './env' }); // or just dotenv.config() if the file is `.env`

import mongoose from 'mongoose';
import connectDB from './db/index.js';
import { DB_NAME } from './constants.js'; // make sure this path is correct

(async () => {
  try {
    await connectDB();
    console.log("App started successfully");
  } catch (error) {
    console.error("App failed to start:", error);
  }
})();
