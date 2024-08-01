import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";





const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch trailer video from movie id and update the store.
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // Assuming there is only one trailer, you can modify
    const trailer = filterData.length ? filterData[0] : json.results[0]; 
  
    dispatch(addTrailerVideo(trailer))
   
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;