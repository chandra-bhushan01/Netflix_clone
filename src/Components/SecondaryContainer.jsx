import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = ()=>{

    const movies = useSelector((store) => store.movies);

    return (
      movies.nowPlayingMovies && (
        <div className=" bg-black pb-10">
          <div className="-mt-40 pl-12 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList
              title={"Trending Movies"} movies={movies.trendingMovies}
            />
            <MovieList
              title={"Popular Movies"} movies={movies.popularMovies}
            />
            
          </div>
        </div>
      )
    );
};
export default SecondaryContainer;  
