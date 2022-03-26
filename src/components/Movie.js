import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, year, rating, coverImg, summary, genres }) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link> ({year}) - {rating}
            </h2>
            <img src={coverImg} alt={title} />
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <p>{summary}</p>
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
