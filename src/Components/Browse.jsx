import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'

const Browse = () =>{

  useNowPlayingMovies()
  return (
   <>
   <Header/>
   <MainContainer/>
    {
      /* 
        main container
        - video background
        - video title
        Secondary Container
        - MovieList *n
          - cards * n

      */
    }

   </>
  )
}

export default Browse