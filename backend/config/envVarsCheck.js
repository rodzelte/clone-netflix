// db.js
import dotenv from "dotenv";

import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

const connectDB = async () => {
  dotenv.config();
  console.log("MONGO_URI:", process.env.MONGO_URI);
  console.log("PORT:", process.env.PORT);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("TMDB_API_KEY:", process.env.TMDB_API_KEY);
  try {
    await mongoose.connect(ENV_VARS.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MONGODB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export { connectDB };
