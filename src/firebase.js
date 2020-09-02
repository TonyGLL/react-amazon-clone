import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDTNicASRQuwYVL6A0zc5TQOCDDMIDfDI4',
    authDomain: 'react--clone-b56bc.firebaseapp.com',
    databaseURL: 'https://react--clone-b56bc.firebaseio.com',
    projectId: 'react--clone-b56bc',
    storageBucket: 'react--clone-b56bc.appspot.com',
    messagingSenderId: '982292650777',
    appId: '1:982292650777:web:a87999fef2234162924388',
    measurementId: 'G-SF4GXYN0ZB'
});

const auth = firebase.auth();

export { auth };