import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDk_EZ2ltGVz_GE3QbUqryoAhI6BSlN8Jo",
  authDomain: "fireblogsyt-61cb7.firebaseapp.com",
  databaseURL: "https://fireblogsyt-61cb7-default-rtdb.firebaseio.com",
  projectId: "fireblogsyt-61cb7",
  storageBucket: "fireblogsyt-61cb7.appspot.com",
  messagingSenderId: "823959094671",
  appId: "1:823959094671:web:134daf6e0221da9c7637fa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
