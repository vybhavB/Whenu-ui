import Firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyCd4Fcn4I876GMMsDDqiyZ2ReQDCISzVQI',
  authDomain: 'whenu-firebase.firebaseapp.com',
  databaseURL: 'https://whenu-firebase.firebaseio.com',
  projectId: 'whenu-firebase',
  storageBucket: 'whenu-firebase.appspot.com',
  messagingSenderId: '899302447879'
};
export const firebaseApp = Firebase.initializeApp(config);

export const foodRef = firebaseApp
  .database()
  .ref()
  .child('food');
