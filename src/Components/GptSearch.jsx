import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from '../Utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img
          className=""
          src= {BG_URL}
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}

export default GptSearch