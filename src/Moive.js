import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
// PropTypes를 통해 props 체크

function Movie({ year, title, summary, poster }) {
  return (
    // 각 요소 안에 style로 css에서 안하고 직접 css를 처리할 수 있음
    <div class="movies__movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
