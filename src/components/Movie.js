import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, year, rating, coverImg, summary, genres }) {
    return (
        <div className={styles.movie}>
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link> ({year})
            </h2>
            <ul className={styles.movie__genres}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <p className={styles.movie__summary}>
                {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
                <br />
                <br />
                <br />
                Rate : {rating}
            </p>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
