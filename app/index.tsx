import { SafeAreaView } from 'react-native'
import React from 'react'
import { CustomText } from '@/components/texts'

const Home = () => {
  return (
    <SafeAreaView className='bg-rose-400 h-screen p-3'>
      <CustomText className='text-rose-900'>Hello, world!</CustomText>
    </SafeAreaView>
  )
}

export default Home