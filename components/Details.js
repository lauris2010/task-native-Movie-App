import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Button, ScrollView, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { REACT_APP_IMAGE_URL } from "@env"
import useModules from './modules';
import SimilarMovies from './SimilarMovies';
import { GestureHandlerRootView  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
;
const width = Dimensions.get('window').width;

const Details = () => {
  const route = useRoute()
  const modules = useModules()
  const navigation = useNavigation();
  const [movie, setMovie] = React.useState({})
  const [similarMovies, setSimilarMovies] = React.useState({})
  const [trailer, setTrailer] = React.useState({})
  let id = route.params.movieId

  React.useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieByIDData = await modules.getMoviesByID(id)
        setMovie(movieByIDData)
      } catch (error) {
        if(error.response && error.response.status === 404){
          console.log('Movie not found')
          navigation.navigate('BrowsePage')
        }
      }
    }
    const getSimilarMovies = async () => {
      const similarMovies = await modules.getSimilarMovies(id)
      if (similarMovies) {
        setSimilarMovies(similarMovies)
      }
    }
    const getMovieTrailer = async () => {
      const movieTrailer = await modules.getTrailer(id)
      if (movieTrailer){
        setTrailer(movieTrailer.results[0])
      }
    }
    getMovieDetails()
    getSimilarMovies()
    getMovieTrailer()
  }, [id])

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:'#141414'}}>
      {movie ? (
      <ScrollView>
        <View>
          <View className='mt-3'>
            <Text className="text-white mb-3 text-xl ml-3">{movie.title}</Text>
          </View>
          <View className='flex, justify-center, align-middle mt-3'>
            <Image source={{ uri: `${REACT_APP_IMAGE_URL}${movie.poster_path}` }} style={styles.image}/>
          </View>
            <View className='mt-3'>
              <Text className='text-white text-center '>{movie.overview}</Text>
            </View>
            <View className='items-center w-100% justify-center mt-3'>
              <View className='w-[200px]'>
                <Button size='md' onPress={() => navigation.navigate('Player', {trailer: trailer.key})} title='Watch Trailer'></Button>
              </View>
            </View>
          <View>
            <Text className='text-white text-lg mt-3 ml-3'>Similar Movies</Text>
            <SimilarMovies similarMovies={similarMovies?.results}/>
          </View>
        </View>
      </ScrollView>
      ) : 
        <View className='flex-1 justify-center items-center w-[100%]'>
          <Text className='text-white'>There was an Error, or no Info about this Movie</Text> 
        </View>
      }
    </GestureHandlerRootView>
  )
}

export default Details

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 300,
    resizeMode: "contain",
  }
});