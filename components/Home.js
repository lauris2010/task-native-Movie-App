import React from 'react'
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  
  return (
    <View className="flex-1 items-center w-90% justify-center bg-[#222222]">
      <View className='mb-4 w-[200px]'>
        <Button title='Browse' color='#141414' onPress={() => navigation.navigate('BrowsePage')}/>
      </View>
      <View className='w-[200px]'>
        <Button title='Login'  onPress={() => console.log('login')}/>
      </View>
    </View>
  )
}

export default Home