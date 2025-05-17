import { MovieModel } from "../models/movieModel";
import { Movie } from "../types/movie";

export class MovieService {
  async getAllMovies(): Promise<Movie[]> {
    return await MovieModel.find();
  }

  async getMovieById(id: string): Promise<Movie | null> {
    return await MovieModel.findById(id);
  }

  async createMovie(movieData: Movie): Promise<Movie> {
    const movie = new MovieModel(movieData);
    return await movie.save();
  }

  async updateMovie(id: string, movieData: Partial<Movie>): Promise<Movie | null> {
    return await MovieModel.findByIdAndUpdate(id, movieData, { new: true });
  }

  async deleteMovie(id:string):Promise<void> {
    await MovieModel.findByIdAndDelete(id);
  }
}
