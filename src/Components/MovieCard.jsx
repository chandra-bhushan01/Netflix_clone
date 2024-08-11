
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({posterPath}) => {
  // Render a movie card with a poster image.
 
  return (
    <div className="w-48 pr-4">
      <img alt="Movie card" 
      src={IMG_CDN_URL + posterPath}
      />
    </div>  
  );
};

export default MovieCard