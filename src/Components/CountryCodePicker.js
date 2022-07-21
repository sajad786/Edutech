import React, {useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import CountryPicker, {Flag} from 'react-native-country-picker-modal';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../styles/responsiveSize';

function CountryCodePicker({
  setCountryCode,
  setCountryFlag,
  countryCode,
  countryFlag,
}) {
  // const [countryCode, setCountryCode] = useState('91');
  // const [countryFlag, setCountryFlag] = useState('IN');

  const onSelect = country => {
    setCountryFlag(country.cca2);
    setCountryCode(country.callingCode[0]);
  };
  return (
    <>
      <View
        style={{
          marginHorizontal: moderateScaleVertical(10),
          backgroundColor: colors.matterhorn,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          height: moderateScaleVertical(50),
          marginTop: moderateScaleVertical(1),
          marginLeft: moderateScale(16),
        }}>
        <CountryPicker
          onSelect={onSelect}
          visible={false}
          countryCode={countryFlag}
          withCallingCode={true}
          withCallingCodeButton={countryCode}
          theme={{
            onBackgroundTextColor: colors?.white,
            backgroundColor: colors?.matterhorn,
          }}
        />
        <Image
          source={imagePath.ic_down}
          style={{
            height: moderateScale(width / 24),
            width: moderateScale(width / 24),
            resizeMode: 'contain',
            marginLeft: moderateScaleVertical(5),
          }}
        />
      </View>
    </>
  );
}
const style = StyleSheet.create({});

export default CountryCodePicker;
