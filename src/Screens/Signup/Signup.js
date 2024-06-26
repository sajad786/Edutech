//import liraries
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonCustom from '../../Components/ButtonCustom';
import CountryCodePicker from '../../Components/CountryCodePicker';
// import PhoneNumberInput from '../../Components/CountryCodePicker';
import TextInputCus from '../../Components/TextInputCus';
import WrapperContainer from '../../Components/WrapperContainer';
import store from '../../redux/store';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import { showError } from '../../utils/helperFunction';
import validation from '../../utils/validation';
import actions, { SignpWithPhone } from '../../redux/actions/index';

const { dispatch } = store;

// create a component
const Signup = ({ navigation }) => {
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  if (isScreenLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  useEffect(() => {
    // GoogleSignin.configure({
    //   webClientId:
    //     '171222512122-t35kqp5og1r5av61evan7rc9g1so0gv3.apps.googleusercontent.com',
    //   offlineAccess: true,
    //   forceCodeForRefreshToken: true,
    //   scopes: ['profile', 'email'],
    // });

    // GoogleSignin.configure();
    const deviceName = Platform.OS;
    updateState({ device_type: deviceName });
    console.log('device name  ========>>>>>>', device_type);
    console.log(
      'print static data',
      device_token,
      country_code,
      social_id,
      social_type,
    );
  }, []);

  const [CountryCode, setCountryCode] = useState('91');
  const [CountryFlag, setCountryFlag] = useState('IN');

  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    isSecure: true,
    phone: '',
    phone_code: '',
    country_code: '91',
    device_token: '123',
    device_type: '',
    social_id: 'facebook123',
    social_type: 'facebook',
    isEmailSignIn: true,
  });

  const {
    isLoading,
    name,
    email,
    password,
    isSecure,
    phone,
    phone_code,
    country_code,
    device_token,
    device_type,
    social_id,
    social_type,
    isEmailSignIn,
  } = state;
  const updateState = data => setState(() => ({ ...state, ...data }));

  const isValidData = () => {
    const error = validation({
      name,
      phone,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const ToggleSwitch = btnTagNo => {
    if (btnTagNo == 1) {
      updateState({ isEmailSignIn: true });
    } else {
      updateState({ isEmailSignIn: false });
    }
  };

  const onPhoneSignup = async () => {
    let phoneNumber = phone_code + phone;
    console.log('before passing data lets check', phoneNumber);
    updateState({ isLoading: true });
    if (!!name.trim() != "" && !!phone.trim() != "" && !!phone_code.trim() != "") {
      try {
        actions.PhoneSignUp({
          phoneNumber,
        });
        // navigation.navigate(navigationStrings.LOGIN_SCREEN);
      } catch (error) {
        console.log(error);
        showError(error.message);
      }
    }
    updateState({ isLoading: false });
  };

  const onEmailSignup = async () => {
    try {
      let signInData = { email, password }
      console.log(signInData, "signInWithEmail")
      updateState({ isLoading: true });
      if (!!email.trim() != "" && !!password.trim() != "") {
        let res = await actions.EmailSignUp(signInData);
        console.log(res ,"ressonSignUp")
        if (!!res) {
         navigation.navigate(navigationStrings.LOGIN_SCREEN);
        }
      }

    } catch (error) {
      console.log(error, "errror$>");
      showError(error);
    }
    updateState({ isLoading: false });

  }

  // const FbLogin = _responseInfoCallback => {
  //   LoginManager.logOut();
  //   return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
  //     result => {
  //       console.log('fb response ', result);
  //       if (
  //         result.declinedPermissions &&
  //         result.declinedPermissions.includes('email')
  //       ) {
  //         requestIdleCallback({message: 'email is requires'});
  //       }
  //       if (result.isCancelled) {
  //         console.log('error');
  //       } else {
  //         const infoRequest = new GraphRequest(
  //           '/me?fields=email,name,picture',
  //           null,
  //           _responseInfoCallback,
  //         );
  //         new GraphRequestManager().addRequest(infoRequest).start();
  //       }
  //     },
  //     function (error) {
  //       console.log('login failed' + error);
  //     },
  //   );
  // };

  // const onFbLogin = async () => {
  //   try {
  //     await FbLogin(_responseInfoCallback);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const _responseInfoCallback = async (error, result) => {
  //   if (error) {
  //     console.log('error from handling response', error);
  //     return;
  //   } else {
  //     const userData = result;
  //     console.log('fb data', userData);
  //   }
  // };

  // const OnGoogleLogIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('google data', userInfo);

  //     const user = userInfo?.user;
  //     if (!!user?.id) {
  //       console.log('google user data ready to store  ', user);
  //       const userData = {
  //         access_token: user?.id,
  //         profile: user?.photo,
  //         name: user?.name,
  //         email: user?.email,
  //       };
  //       setUserData(userData).then(res => {
  //         dispatch({
  //           type: types.FB_LOGIN,
  //           payload: userData,
  //         });
  //       });
  //     }
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       console.log('user Cancelled sign in process ', error);
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //       console.log('user sign in is in Process', error);
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //       console.log(error);
  //     } else {
  //       console.log('error while signing in ', error);
  //       // some other error happened
  //     }
  //   }
  // };

  //   const OnGoogleLogIn = () => {
  //     actions.googleLogin();
  //   };

  //   const UserFbLogin = () => {
  //     actions.fbLogin();
  //   };

  // return (
  //   <ScrollView>
  //     <WrapperContainer>
  //       <View>
  //         <View style={styles.banner}>
  //           <ImageBackground
  //             source={{
  //               uri: 'https://image.shutterstock.com/image-photo/image-shocked-young-brunette-lady-260nw-641814046.jpg',
  //             }}
  //             style={{width: '100%', height: '100%'}}
  //           />
  //         </View>

  //         <View style={styles.headingContainer}>
  //           <Text style={styles.headingText}>Create an account</Text>
  //         </View>
  //         <View>
  //           <View style={{marginBottom: moderateScale(10)}}>
  //             <TextInputCus
  //               placeholder="Full Name"
  //               onChangeText={name => updateState({name: name})}
  //               value={name}
  //             />
  //           </View>
  //         </View>
  //         <View>
  //           <View style={{marginBottom: 10}}>
  //             <Text
  //               style={{color: 'black', marginBottom: -15, fontWeight: 'bold'}}>
  //               Phone Number
  //             </Text>
  //             {/* <CountryCodePicker /> */}
  //             <View style={{flexDirection: 'row', width: '100%'}}>
  //               <View style={{width: '20%'}}>
  //                 <TextInputCus
  //                   textStyle={{paddingLeft: 5}}
  //                   // label="device Type"
  //                   placeholder="+91"
  //                   // isSecure={isSecure}
  //                   onChangeText={phoneCode =>
  //                     updateState({phone_code: phoneCode})
  //                   }
  //                   value={phone_code}
  //                   keyboardType="phone-pad"
  //                 />
  //               </View>
  //               <View style={{width: '80%'}}>
  //                 <TextInputCus
  //                   // label="Phone Number"
  //                   placeholder="enter your Phone Number"
  //                   onChangeText={phone => updateState({phone})}
  //                   value={phone}
  //                   keyboardType="phone-pad"
  //                 />
  //               </View>
  //             </View>
  //             {/* <CountryCodePicker
  //               countryCode={CountryCode}
  //               countryFlag={CountryFlag}
  //               setCountryCode={setCountryCode}
  //               setCountryFlag={setCountryFlag}
  //             /> */}
  //           </View>

  //           {/* <View style={{marginBottom: 10}}>

  //         </View> */}
  //           <ButtonCustom
  //             onPress={onSignup}
  //             isLoading={isLoading}
  //             title="Sign up"
  //           />
  //           <View
  //             style={{
  //               marginTop: 30,
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //               flexDirection: 'row',
  //             }}>
  //             <Text> already Registered? </Text>
  //             <TouchableOpacity
  //             // onPress={() =>
  //             //   navigation.navigate(navigationStrings.LOGIN_SCREEN)
  //             // }
  //             >
  //               <Text style={{fontWeight: '600', color: colors.green}}>
  //                 Log In Here
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>

  //         {/* Social login  */}
  //         {/* <View style={{marginBottom: moderateScaleVertical(30)}}>
  //         <View style={styles.socialLogin}>
  //           <ButtonCustom
  //             iconStyle={{tintColor: 'white'}}
  //             leftIcon={imagePath.ic_facebook}
  //             onPress={UserFbLogin}
  //             isLoading={isLoading}
  //             title="Log In with Facebook"
  //           />
  //           <ButtonCustom
  //             leftIcon={imagePath.ic_google}
  //             onPress={OnGoogleLogIn}
  //             isLoading={isLoading}
  //             title="Log In with google"
  //           />
  //         </View>
  //       </View> */}
  //       </View>
  //     </WrapperContainer>
  //   </ScrollView>
  // );

  return (
    <WrapperContainer>
      <View style={styles.banner}>
        <ImageBackground
          source={{
            uri: 'https://image.shutterstock.com/image-photo/image-shocked-young-brunette-lady-260nw-641814046.jpg',
          }}
          style={{ width: '100%', height: '100%' }}
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
            <View style={{ marginBottom: moderateScale(10) }}>
              <TextInputCus
                placeholder="Email"
                onChangeText={email => updateState({ email })}
                value={email}
                keyboardType="email-address"
              />
            </View>
            <View style={{ marginBottom: moderateScale(10) }}>
              <TextInputCus
                placeholder="Password"
                onChangeText={password => updateState({ password: password })}
                value={password}
                isSecure={isSecure}
              />
            </View>
            <View>
              <ButtonCustom
                onPress={onEmailSignup}
                isLoading={isLoading}
                title="SignUp "
              // backgroundColor={colors.blue}
              />
            </View>
            <View>
              <Text style={styles.Forget}>Forget Password</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                By continuing, you agree to Geekay's{' '}
                <Text style={{ color: colors.blue }}>Terms & Conditions</Text> and{' '}
                <Text style={{ color: colors.blue }}>Privacy Policy. </Text>
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text style={{ color: 'black', marginBottom: -10, fontWeight: 'bold' }}>
            Phone Number
          </Text>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ width: '20%' }}>
              <TextInputCus
                textStyle={{ paddingLeft: 5 }}
                // label="device Type"
                placeholder="+91"
                // isSecure={isSecure}
                onChangeText={phoneCode => updateState({ phone_code: phoneCode })}
                value={phone_code}
                keyboardType="phone-pad"
              />
            </View>
            <View style={{ width: '80%' }}>
              <TextInputCus
                // label="Phone Number"
                placeholder="enter your Phone Number"
                onChangeText={phone => updateState({ phone })}
                value={phone}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <ButtonCustom onPress={onPhoneSignup} isLoading={isLoading} title="SignUp" />
          <View
            style={{
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text>Not yet Registered? </Text>
            <TouchableOpacity onPress={() => navigation.push('signup')}>
              <Text style={{ fontWeight: '600' }}>SignUp Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </WrapperContainer>
  );

};

// define your styles
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
    // fontFamily: fontFamily.medium,
    color: colors.black,
  },
});

export default Signup;
