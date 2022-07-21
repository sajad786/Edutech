import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import WrapperContainer from '../../Components/WrapperContainer'
import { moderateScaleVertical } from '../../styles/responsiveSize'

const Home = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </WrapperContainer>
  );
}

export default Home

