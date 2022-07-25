import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCK5REWhDHcLsiByjuTxp8p7mma9ODteLI',
  authDomain: 'instaclone-37924.firebaseapp.com',
  projectId: 'instaclone-37924',
  storageBucket: 'instaclone-37924.appspot.com',
  messagingSenderId: '779829475841',
  appId: '1:779829475841:web:7368acae140391f5f9de00',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();

export { app, db, storage };
