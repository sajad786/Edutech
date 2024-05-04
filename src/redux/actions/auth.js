import auth from '@react-native-firebase/auth';
import {showError} from '../../utils/helperFunction';
import {signpWithEmail, sinupWithPhone} from '../reducers/auth';
import store from '../store';

const {dispatch} = store;

// export async function PhoneSignUp() {
//   try {
//     const confirmation = await auth().signInWithPhoneNumber(`${917006824513}`);
//     // setConfirm(confirmation);
//   } catch (error) {
//     alert(error)
//   }
// }


export const PhoneSignUp = async signupdata => {
  // let phno = Number(signupdata);
  // console.log(phno, 'action data ');
  try {
    console.log(signupdata, 'action data ');
    // auth().signInWithPhoneNumber('+91 1234567890');

    const confirmation = await auth().signInWithPhoneNumber('917006824513');
    // let data = await auth().signInWithPhoneNumber(+917006824513);
    // const user = await auth().createUserWithEmailAndPassword('sajad@gmail.com', "qwerty");
    console.log(data, 'resss');
    if (!!res) {
      sinupWithPhone(res);
    }
  } catch (error) {
    console.log(error, 'error');
    // showError(error.me);
  }
};

// export const EmailSignUp = data => {
//   console.log(data, 'in actions');
//   return new Promise((resolve, reject) => {
//     auth()
//       .signInWithEmailAndPassword(data)
//       .then(res => {
//         // console.log(res, "ress")
//         resolve(res);
//         // SignpWithEmail(res)
//         signpWithEmail(res);
//       })
//       .catch(err => reject(err));
//   });
// };

export function EmailSignUp(data = {}) {
  console.log(data,"actions emailData")
  return new Promise((resolve, reject) => {
     auth().createUserWithEmailAndPassword(data)
      .then(res => {
        resolve(res);
        let {user} = res.user
        console.log(user, 'ress>>>>');
        let userdata = {}
        userdata['accessTocken']=user?.refreshToken
        userdata['email']=user?.email
        userdata['uid']=user?.uid
        userdata['lastSignInTime']=user?.metadata?.lastSignInTime
        signpWithEmail(userdata);
      })
      .catch(error => {
        reject(error);
        console.log(error, 'error');
      });
  });
}
