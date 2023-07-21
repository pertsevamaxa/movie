import React from "react";
import { Component } from "react";
import { Item } from "./item";
import { ErrorIndicator } from "../error-indicator";

import "./item-list.css";

export class ItemList extends Component {
  render() {
    const { movies, error } = this.props;

    const errorMessage = error ? <ErrorIndicator /> : null;
    const movie = !errorMessage ? <Movie movies={movies} /> : null;

    return (
      <div className="item-list">
        {errorMessage}
        {movie}
      </div>
    );
  }
}

const Movie = ({ movies }) => {
  return (
    <React.Fragment>
      {movies?.map((movie) => (
        <Item key={movie.id} movie={movie} />
      ))}
    </React.Fragment>
  );
};
