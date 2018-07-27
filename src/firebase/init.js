import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAiPM6dqd0JUwjvaElxg6L4txU5LBBC8Q4",
  authDomain: "vue-chat-ed531.firebaseapp.com",
  databaseURL: "https://vue-chat-ed531.firebaseio.com",
  projectId: "vue-chat-ed531",
  storageBucket: "vue-chat-ed531.appspot.com",
  messagingSenderId: "340540096548"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampsInSnapshots: true
});

export default firebaseApp.firestore();
