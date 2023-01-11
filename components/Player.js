import React from 'react'
import { Dimensions, View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';
import YoutubeIframe from 'react-native-youtube-iframe';

const dimensionsForScreen = Dimensions.get('screen')

const Player = () => {
	const route = useRoute()
	let trailer = route.params.trailer

  return (
    <View className='flex-1 items-center w-100% justify-center bg-[#141414]' >
			{
				trailer ? (
					<YoutubeIframe
            height={300}
            width={dimensionsForScreen.width}
            videoId={trailer}
					/>
					) :
					<Text>Trailer is not available</Text>
			}
    </View>
  )
}

export default Player