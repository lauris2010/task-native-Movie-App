import React from 'react'
import { View, ScrollView, Text} from 'react-native'
import TopRatedMovies from './TopratedMovies'
import TrendingMovies from './TrendingMovies'
import { GestureHandlerRootView  } from 'react-native-gesture-handler';
import { styled } from 'nativewind';
import PopularMovies from './PopularMovies';
const StyledView = styled(View)

const BrowsePage = () => {
  return (
    <ScrollView>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor:'#141414'}}>
        <View>
            <StyledView >
              <Text className='text-lg text-white ml-4 mt-3'>Trending Movies</Text>
              <TrendingMovies/>
            </StyledView>
            <StyledView className=''>
              <Text className='text-lg text-white ml-4'>Popular Movies</Text>
              <PopularMovies/>
            </StyledView>
            <StyledView className=''>
              <Text className='text-lg text-white ml-4'>Top Rated Movies</Text>
              <TopRatedMovies/>
            </StyledView>
        </View>
      </GestureHandlerRootView>
    </ScrollView>
  )
}

export default BrowsePage