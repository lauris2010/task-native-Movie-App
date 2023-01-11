import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import { REACT_APP_IMAGE_URL } from "@env"
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';
import { GestureHandlerRootView  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SimilarMovies = ({similarMovies}) => {
  const [isVertical, setIsVertical] = useState(false);
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
  
  return (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor:'#141414'}}>
        <View>
          <View >
            <Carousel
              {...baseOptions}
              loop
              opacityInterval={60}
              width={width / 1.5}
              height={300}
              mode='parallax'
              autoPlay={true}
              data={similarMovies}
              scrollAnimationDuration={1000}
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
        </View>
      </GestureHandlerRootView >
  )
}

export default SimilarMovies

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});