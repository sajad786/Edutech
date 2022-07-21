import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonCustom from '../../Components/ButtonCustom';
import TextInputCus from '../../Components/TextInputCus';
import WrapperContainer from '../../Components/WrapperContainer';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../styles/responsiveSize';
import {showError} from '../../utils/helperFunction';
import validation from '../../utils/validation';

const Login = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  //  const getDataFromAsyncStorage = async () => {
  //    const  userData = await getUserData()
  //   console.log('userdata in LoginScreen', userData);
  //   updateState({device_token:userData.device_token,device_type:userData.device_type, })
  //  }

  useEffect(() => {
    const deviceName = Platform.OS;
    updateState({device_type: deviceName});
    console.log('device name  ========>>>>>>', device_type);
    console.log('print static data', device_token);
  }, [phone]);

  const [state, setState] = useState({
    isLoading: false,
    isSecure: true,
    phone: '',
    phone_code: '',
    device_token: 'xyz',
    device_type: '',
    isEmailSignIn: true,
    email,
    name,
    password,
  });

  const {
    isLoading,
    isSecure,
    email,
    phone,
    device_token,
    device_type,
    phone_code,
    isEmailSignIn,
    name,
    password,
  } = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validation({
      phone,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  // function preg_match(regex, str) {
  //   return new RegExp(regex).test(str);
  // }
  // // const onLogin = () => {
  // //   preg_match()
  // // };
  const onSignup = () => {
    const data = {email, password};
    console.log(data, 'onclick');
    actions.EmailSignUp(data);
  };

  const onLogin = async () => {
    updateState({isLoading: true});
    const checkValid = isValidData();
    if (checkValid) {
      try {
        console.log(
          'data to proceed for logIn',
          phone,
          phone_code,
          device_token,
          device_type,
        );
        // const res = await actions.login({
        //   phone,
        //   phone_code,
        //   device_token,
        //   device_type,
        // });
        // console.log('otp sent successfully', res);
        const userData = res.data;
        // navigation.navigate(navigationStrings.VERIFYOTP_SCREEN, {userData});
        // actions.isLogin(true);
      } catch (error) {
        console.log(error);
        showError(error.message);
      }
    }
    updateState({isLoading: false});
  };

  const ToggleSwitch = btnTagNo => {
    if (btnTagNo == 1) {
      updateState({isEmailSignIn: true});
    } else {
      updateState({isEmailSignIn: false});
    }
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
      {/* <View style={{flex: 1, paddingHorizontal: moderateScale(26)}}> */}
      <View
        style={{
          width: '100%',
          backgroundColor: colors.btnbgcGRey,
          flexDirection: 'row',
          height: moderateScaleVertical(48),
          borderRadius: moderateScale(22),
          marginTop: moderateScaleVertical(10),
        }}>
        <TouchableOpacity
          onPress={() => ToggleSwitch(1)}
          style={{
            backgroundColor: isEmailSignIn ? colors.blue : colors.btnbgcGRey,
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: moderateScale(22),
          }}>
          <Text
            style={{
              color: isEmailSignIn ? colors.white : colors.greyText,
              // fontFamily: fontFamily.bold,
              fontSize: textScale(16),
              fontWeight: 'bold',
            }}>
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ToggleSwitch(2)}
          style={{
            backgroundColor: !isEmailSignIn ? colors.blue : colors.btnbgcGRey,
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: moderateScale(22),
          }}>
          <Text
            style={{
              color: !isEmailSignIn ? colors.white : colors.greyText,
              // fontFamily: fontFamily.bold,
              fontSize: textScale(16),
              fontWeight: 'bold',
            }}>
            Phone
          </Text>
        </TouchableOpacity>
      </View>
      {!!isEmailSignIn ? (
        <View>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Sign-In</Text>
          </View>
          <View>
            <View style={{marginBottom: moderateScale(10)}}>
              <TextInputCus
                placeholder="Email"
                onChangeText={email => updateState({email})}
                value={email}
                keyboardType="email-address"
              />
            </View>
            <View style={{marginBottom: moderateScale(10)}}>
              <TextInputCus
                placeholder="Password"
                onChangeText={password => updateState({password: password})}
                value={password}
                isSecure={isSecure}
              />
            </View>
            <View>
              <ButtonCustom
                onPress={onSignup}
                // isLoading={isLoading}
                title="Login "
                // backgroundColor={colors.blue}
              />
            </View>
            <View>
              <Text style={styles.Forget}>Forget Password</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                By continuing, you agree to Geekay's{' '}
                <Text style={{color: colors.blue}}>Terms & Conditions</Text> and{' '}
                <Text style={{color: colors.blue}}>Privacy Policy. </Text>
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text style={{color: 'black', marginBottom: -10, fontWeight: 'bold'}}>
            Phone Number
          </Text>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: '20%'}}>
              <TextInputCus
                textStyle={{paddingLeft: 5}}
                // label="device Type"
                placeholder="+91"
                // isSecure={isSecure}
                onChangeText={phoneCode => updateState({phone_code: phoneCode})}
                value={phone_code}
                keyboardType="phone-pad"
              />
            </View>
            <View style={{width: '80%'}}>
              <TextInputCus
                // label="Phone Number"
                placeholder="enter your Phone Number"
                onChangeText={phone => updateState({phone})}
                value={phone}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <ButtonCustom onPress={onLogin} isLoading={isLoading} title="Login" />
          <View
            style={{
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text>Not yet Registered? </Text>
            <TouchableOpacity onPress={() => navigation.push('signup')}>
              <Text style={{fontWeight: '600'}}>SignUp Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: moderateScale(-26),
    marginTop: moderateScaleVertical(-26),
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
  Forget: {
    fontSize: textScale(12),
    fontWeight: '600',
    fontFamily: fontFamily.medium,
    color: colors.blue,
    marginTop: moderateScale(10),
    textAlign: 'center',
  },
  // termsContainer:{

  // },
  terms: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    color: colors.greyText,
    marginTop: moderateScaleVertical(63),
    textAlign: 'center',
  },
});

export default Login;
