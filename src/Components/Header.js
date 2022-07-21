import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
// import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical, textScale, } from '../styles/responsiveSize'


const Header = ({ title, onPressBack, isBackIcon, container = '' }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  }
  return (
    <View style={{ ...styles.container, container }}>
      <View>
        {!!isBackIcon && (
          <TouchableOpacity style={styles.iconstyle}
            onPress={!!onPressBack ? onPressBack : () => goBack()}>
            <Image source={imagePath.facebook_icon} />
          </TouchableOpacity>
        )}

      </View>
      <View style={{ marginRight: !!isBackIcon ? moderateScale(10) : null }}  >
        <Text style={styles.headertext}>{title}</Text>
      </View>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor:'red',
    marginLeft: moderateScaleVertical(24),
    marginRight: moderateScale(23),
    height: moderateScale(42),
    marginTop: moderateScale(26),



  },
  headertext: {
    color: colors.white,
    // fontFamily: fontFamily.BarlowSemiBold,
    fontSize: textScale(16),
    paddingLeft: moderateScale(20)
  },
  iconstyle:
  {
    marginTop: moderateScale(7),
    paddingLeft: moderateScale(4)

  },


})