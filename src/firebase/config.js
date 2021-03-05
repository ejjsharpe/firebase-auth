import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDJ97NnRofarMMeijWbpxe2YohZqW6Osu4',
  authDomain: 'knowledgeable-54f44.firebaseapp.com',
  projectId: 'knowledgeable-54f44',
  storageBucket: 'knowledgeable-54f44.appspot.com',
  messagingSenderId: '509314012960',
  appId: '1:509314012960:web:9af27db92af0188934a945',
  measurementId: 'G-6ZDVJZR5FV',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
