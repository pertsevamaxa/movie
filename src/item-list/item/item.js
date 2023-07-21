import "./item.css";

export const Item = ({ movie }) => {
  const dateFormat = () => {
    if (movie.release_date === "") {
      return "";
    }
    const date = new Date(movie.release_date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const textFormat = () => {
    const text = movie.overview.slice(0, 205);
    const lastSpace = text.lastIndexOf(" ");
    const newText = text.slice(0, lastSpace + 1);
    return `${newText}...`;
  };

  return (
    <div className="item">
      <div className="img">
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
      </div>
      <div className="info">
        <h6 className="title">{movie.original_title}</h6>
        <span className="date">{dateFormat()}</span>
        <div className="genre">
          {/*{movie.genre_ids.map((genre) => (*/}
          {/*  <span key={genre}>{genre}</span>*/}
          {/*))}*/}
          <span className="genre-item">action</span>
          <span className="genre-item">drama</span>
        </div>
        <span className="description">{textFormat()}</span>
      </div>
    </div>
  );
};
