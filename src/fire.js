import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB1d0oI3kxAfA5ZDWEYiVn_ex2CU21liYA",
    authDomain: "mintid-802ee.firebaseapp.com",
    databaseURL: "https://mintid-802ee.firebaseio.com",
    projectId: "mintid-802ee",
    storageBucket: "mintid-802ee.appspot.com",
    messagingSenderId: "704266044959"
};

var fire = firebase.initializeApp(config);

export default fire;
