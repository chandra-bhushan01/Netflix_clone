import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies==null) return; //if(!movies || movies.length===0) return; //if no movies are found

    const mainMovie = movies[0]; // Assuming there is only one movie in the array for simplicity, you can modify
  

    const {original_title, overview,id} = mainMovie;


    return <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>

    </div>
   
};
export default MainContainer;