import React, { Component } from "react";
import "./search-movies.css";
// import { debounce } from "lodash";
import { ItemList } from "../item-list";
import { Loader } from "../loader";

export class SearchMovies extends Component {
  render() {
    console.log(this.props.value);
    const { movies, loaded, error, handleValue, value } = this.props;
    const debounce = (fn, ms) => {
      let timeout;
      return function () {
        const fnCall = () => {
          fn.apply(this, arguments);
          clearTimeout(timeout);
          timeout = setTimeout(fnCall, ms);
        };
      };
    };
    const onChange = (event) => debounce(handleValue(event), 1000);
    return loaded ? (
      <Loader />
    ) : (
      <div>
        <input
          placeholder="Type to search..."
          value={value}
          onChange={(event) => onChange(event)}
        />
        <ItemList movies={movies} loaded={loaded} error={error} />
      </div>
    );
  }
}
