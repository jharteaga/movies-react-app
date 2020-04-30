import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getGenres } from '../services/fakeGenreService';
import { getMovie } from '../services/fakeMovieService';

class MovieForm extends Form {
  state = {
    genres: [],
    data: { title: '', genre: '', numberInStock: '', rate: '' },
    errors: {},
    movie: {},
  };

  componentDidMount() {
    const { match } = this.props;
    this.setState({ genres: getGenres() });
    match.params.id && this.setState({ movie: getMovie(match.params.id) });
  }

  schema = {
    title: Joi.string().required().label('Title'),
    genre: Joi.string().required().label('Genre'),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label('Number in Stock'),
    rate: Joi.number().min(0).max(10).required().label('Rate'),
  };

  doSubmit = () => {
    //call the server
    console.log('Movie Form Action');
    this.props.history.replace('/movies');
  };

  render() {
    const { movie } = this.state;

    return (
      <React.Fragment>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title', movie.title || null)}
          {this.renderSelect(
            'genre',
            'Genre',
            this.state.genres,
            movie.genre || null
          )}
          {this.renderInput(
            'numberInStock',
            'Number in Stock',
            movie.numberInStock || null
          )}
          {this.renderInput('rate', 'Rate', movie.dailyRentalRate || null)}
          {this.renderButton('Save')}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
