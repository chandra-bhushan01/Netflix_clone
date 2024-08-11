import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies} from "../Utils/moviesSlice";

const usePopularMovies = () => {
  //fetch data from TMDB API and update store.
  const dispatch = useDispatch();

  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results)); 
  };

  useEffect(() => {
    getPopularMovie();
  }, []);
};


export default usePopularMovies;
