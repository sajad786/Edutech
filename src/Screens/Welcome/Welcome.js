import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';

const Welcome = ({navigation}) => {
  const googleImageUrl =
    'https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png';
  const fbImageUrl =
    'http://assets.stickpng.com/thumbs/58e91965eb97430e819064f5.png';

  // const UserFbLogin = () => {
  //   actions.fbLogin();
  // };

  // const OnGoogleLogIn = () => {
  //   actions.googleLogin();
  // };

  const SocialLogin = ({title, uri, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.socio}>
        <Image style={styles.icon} source={{uri: uri}} />
        <Text style={styles.socioText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <View style={styles.banner}>
        <ImageBackground
          source={{
            uri: 'https://image.shutterstock.com/image-photo/image-shocked-young-brunette-lady-260nw-641814046.jpg',
          }}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.subHeading}>
          Sign-in to enjoy easier & faster checkout
        </Text>
      </View>
      <View>
        <SocialLogin
          onPress={() => alert('hii')}
          uri={googleImageUrl}
          title="Continue with Google"
        />
      </View>
      <View>
        <SocialLogin
          onPress={() => alert('hii')}
          uri={fbImageUrl}
          title="Continue with Facebook"
        />
      </View>
      <View>
        <SocialLogin
          onPress={() => navigation.navigate(navigationStrings.LOGIN)}
          title="Continue with Email/Mobile"
        />
      </View>
      <View>
        <Text style={styles.creatAcnt}>
          New to Geekay?{' '}
          <Text
            style={{color: colors.green}}
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
            Create an account
          </Text>
        </Text>
      </View>
      <View>
        <Text style={styles.terms}>
          By continuing, you agree to Geekay's{' '}
          <Text style={{color: colors.blue}}>Terms & Conditions</Text> and{' '}
          <Text style={{color: colors.blue}}>Privacy Policy. </Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => alert('Please GO Ahead For Registration First')}
        activeOpacity={0.8}
        style={styles.footer}>
        <Text style={styles.footerText}>Continue as guest</Text>
      </TouchableOpacity>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  banner: {
    margin: moderateScale(-26),
    height: moderateScaleVertical(165),
  },
  headingContainer: {
    marginTop: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: textScale(24),
    fontWeight: '600',
    fontFamily: fontFamily.medium,
    color: colors.black,
  },
  subHeading: {
    fontSize: textScale(12),
  },
  icon: {
    height: moderateScaleVertical(21),
    width: moderateScale(21),
    marginRight: moderateScale(10),
  },
  socio: {
    flexDirection: 'row',
    justifyContentL: 'center',
    alignItems: 'center',
    padding: moderateScale(18),
    borderWidth: moderateScale(0.3),
    marginTop: moderateScaleVertical(24),
  },
  socioText: {
    fontSize: textScale(12),
    fontFamily: fontFamily.medium,
    color: colors.greyTextTwo,
    // marginLeft: moderateScale(10),
    textAlign: 'center',
  },
  creatAcnt: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    color: colors.greyText,
    marginTop: moderateScaleVertical(24),
    textAlign: 'center',
  },
  terms: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    color: colors.greyText,
    marginTop: moderateScaleVertical(63),
    textAlign: 'center',
  },
  footer: {
    height: moderateScaleVertical(42),
    backgroundColor: colors.whiteOPacity,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    color: colors.greyText,
  },
});
export default Welcome;
