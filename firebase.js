import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBERg-VScrW-yf8k-TMEvEF3dF9P25f848',
  authDomain: 'clone-insta-416a4.firebaseapp.com',
  projectId: 'clone-insta-416a4',
  storageBucket: 'clone-insta-416a4.appspot.com',
  messagingSenderId: '3239522371',
  appId: '1:3239522371:web:ce5ed2c875492496a524f6'
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();

export { app, db, storage };
