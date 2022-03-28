import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieHome.module.css";

function MovieHome({ id, title, year, rating, coverImg }) {
    return (
        <div className={styles.moviehome}>
            <h2 className={styles.moviehome__title}>
                <Link to={`/movie/${id}`}>{title}</Link> ({year})
            </h2>
            <img src={coverImg} alt={title} className={styles.moviehome__img} />
        </div>
    );
}

MovieHome.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

export default MovieHome;
