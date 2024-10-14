import express from "express";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js"

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();
const PORT = ENV_VARS.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",protectRoute, movieRoutes);
app.use("/api/v1/tv",protectRoute, tvRoutes);
app.use("/api/v1/search",protectRoute, searchRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("MONGO_URI:", process.env.MONGO_URI);
        console.log(`Server started, connected to localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
});
