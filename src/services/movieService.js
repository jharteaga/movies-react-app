import http from './httpService';
import { moviesApiEndpoint } from '../config.json';

function movieUrl(movieId) {
  return `${moviesApiEndpoint}/${movieId}`;
}

export function getMovies() {
  return http.get(moviesApiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const { _id, ...obj } = movie;
    return http.put(movieUrl(movie._id), obj);
  }
  return http.post(moviesApiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
