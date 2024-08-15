import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'

import { useSelector } from "react-redux";


const Browse = () =>{


  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies()

 
  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
}

export default Browse