import express from "express";
import { getMovieByCategory, getMovieDetails, getMovieTrailer, getSimilarMovies, getTrendingMovie } from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailer", getMovieTrailer);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMovieByCategory);



export default router;

