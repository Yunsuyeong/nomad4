import { useEffect, useState } from "react";
import MovieHome from "../components/MovieHome";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <MovieHome
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.large_cover_image}
                            title={movie.title}
                            year={movie.year}
                            rating={movie.rating}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
