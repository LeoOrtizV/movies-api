import { NextFunction, Request, Response } from "express";
import { MovieService } from "../services/movieService";
import { isValidObjectId } from "mongoose";

const movieService = new MovieService();

export const getAllMovies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movies = await movieService.getAllMovies();
    if (movies.length === 0) {
      res.status(200).json({ message: "No movies found.", data: [] });
      return;
    }
    res.status(200).json(movies);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching movies", error });
  }
};

export const getMovieById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      res.status(400).json({ message: "Invalid movie ID format" });
      return;
    }
    const movie = await movieService.getMovieById(id);
    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
      return;
    }
    res.status(200).json(movie);
  } catch (error) {
    //next(error)
    res.status(500).json({ message: "Error fetching movies", error });
  }
};

export const createMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.body);
    const body = req.body;
    const movie = await movieService.createMovie(body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: "Error creating movie", error });
  }
};

export const updateMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const body = req.body;
    const movie = await movieService.updateMovie(id, body);
    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
      return;
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ message: "Error updating movie", error });
  }
};

export const deleteMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    await movieService.deleteMovie(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: "Error deleting movie", error });
  }
};