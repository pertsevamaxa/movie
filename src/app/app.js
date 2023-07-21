import { Tab } from "../tabs";
import { Pagination } from "antd";
import { Component } from "react";
import { getMovies } from "../api";
import { SearchMovies } from "../search-movies";

import "./app.css";

export class App extends Component {
  state = {
    movies: [],
    loaded: true,
    error: false,
    page: 1,
    totalResults: 0,
    value: "",
  };

  constructor() {
    super();
    this.updateMovies(this.state.page);
  }

  onItemsLoaded = (moviesData) => {
    this.setState({
      movies: moviesData.results,
      loaded: false,
      error: false,
      totalResults: moviesData.total_results,
    });
  };

  onError = (err) => {
    this.setState({
      loaded: false,
      error: true,
    });
  };

  updateMovies = (page, search) => {
    getMovies(page, search)
      .then(this.onItemsLoaded)
      .catch((err) => this.onError(err));
  };

  onChange = (page) => {
    this.setState({
      page,
    });
  };

  handleValue = (event) => {
    this.setState({ value: event.target.value });
    return this.updateMovies(this.state.page, this.state.value);
  };

  render() {
    return (
      <div className="app">
        <Tab />
        <SearchMovies
          movies={this.state.movies}
          loaded={this.state.loaded}
          error={this.state.error}
          handleValue={this.handleValue}
          value={this.state.value}
        />
        {this.state.loaded ? null : (
          <Pagination
            current={this.state.page}
            defaultCurrent={1}
            pageSize={20}
            total={this.state.totalResults}
            showSizeChanger={false}
            onChange={this.onChange}
          />
        )}
      </div>
    );
  }
}
