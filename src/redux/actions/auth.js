import auth from '@react-native-firebase/auth';
import {showError} from '../../utils/helperFunction';
import {signpWithEmail, sinupWithPhone} from '../reducers/auth';
import store from '../store';

const {dispatch} = store;

export const PhoneSignUp = async signupdata => {
  // let phno = Number(signupdata);
  // console.log(phno, 'action data ');
  try {
    console.log(signupdata, 'action data ');
    const res = await auth().signInWithPhoneNumber(+917006824513);
    console.log(res, 'resss');
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
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword({
        email: 'abcd@gmail.com',
        password: 'abcd123',
      })
      .then(res => {
        resolve(res);
        console.log(res, 'ress>>>>');
        // signpWithEmail(res);
      })
      .catch(error => {
        reject(error);
        console.log(error, 'error');
      });
  });
}
