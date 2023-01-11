import React from 'react'
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import useModules from './modules';
import { REACT_APP_IMAGE_URL } from "@env"
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';
import { GestureHandlerRootView  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  const [isVertical, setIsVertical] = React.useState(false);
  const modules = useModules()
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();

  const baseOptions = isVertical
  ? ({
    vertical: true,
    width: width,
    height: width / 2 / COUNT,
    style: {
      height: width / 2,
    },
  })
  : ({
    vertical: false,
    width: width,
    height: width / 2,
    style: {
      width: width,
    },
  });

    React.useEffect(() => {
    const getMovies = async () => {
    const trendingMoviesData = await modules.getTrending();
      if (trendingMoviesData?.results) {
        setTrendingMovies(trendingMoviesData?.results);
      }}
      getMovies();
    }, []);

  
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:'#141414'}}>
      <View className='bg-[#141414]'>
        <Carousel
          {...baseOptions}
          loop
          width={width / 1.6}
          height={300}
          mode='parallax'
          data={trendingMovies}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ item }) => (
            <View style={{ flex: 1, justifyContent: 'center', }}>
              <TouchableOpacity onPress={() => navigation.navigate('Details', {movieId: item.id})}>
                <Image source={{ uri: `${REACT_APP_IMAGE_URL}${item.poster_path}` }} style={styles.image} />
              </TouchableOpacity>
            </View> 
          )}
        />
      </View>
    </GestureHandlerRootView >
  )
}

export default TrendingMovies


const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});