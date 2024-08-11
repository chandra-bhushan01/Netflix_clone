import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () =>{

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies()

 
  return (
   <>
   <Header/>
   <MainContainer/>
   <SecondaryContainer/>
   </>
  )
}

export default Browse