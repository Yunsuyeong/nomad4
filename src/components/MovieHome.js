import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieHome({ id, title, year, rating, coverImg }) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link> ({year}) - {rating}
            </h2>
            <img src={coverImg} alt={title} />
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
