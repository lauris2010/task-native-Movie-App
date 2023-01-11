import axios from 'axios'
import { REACT_APP_API_KEY } from "@env"

const useModules = () => {
  const api = axios.create({
    baseURL : `https://api.themoviedb.org/3`
  })

  const handleError = (error) => {
    if (error.response) {
        if (error.response.status === 404) {
            console.log("Resource not found.")
            return 
        } else {
            console.log("An error occurred.")
            return
        }
    } else {
        console.log("An error occurred.", error.message)
        return
    }
  }

  const getTrending = async () => {
    try{
        const trending = await api.get(`/trending/all/week?api_key=${REACT_APP_API_KEY}`)
        return trending?.data
      } catch (error) {
        handleError(error)
      }
    }

  const getTopRated = async () => {
    try {
      const topRated = await api.get(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
      return topRated?.data
    } catch (error) {
      handleError(error)
    }
  }

  const getPopular = async () => {
    try {
      const popular = await api.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
      return popular?.data
    } catch (error) {
      handleError(error)
    }
  }

  const getMoviesByID = async (id) => {
    try {
      const moviesByID = await api.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      return moviesByID?.data
    } catch (error) {
      handleError(error)
    }
  }

  const getSimilarMovies = async (id) => {
    try {
      const similarMovies = await api.get(`/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`)
      return similarMovies?.data 
    } catch (error) {
      handleError(error)
    }
  }

  const getTrailer = async (id) => {
    try {
      const trailer = await api.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-U`)
      return trailer?.data
    } catch (error) {
      handleError(error)
    }
  }

  const modules = {
      getTrending,
      getTopRated,
      getPopular,
      getMoviesByID,
      getSimilarMovies,
      getTrailer,
  }
  return modules
}

export default useModules