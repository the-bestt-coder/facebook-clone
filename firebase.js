import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjVmSbIgefgXEYW0fHrv8XqlStGTNKG58",
  authDomain: "facebook-b220d.firebaseapp.com",
  projectId: "facebook-b220d",
  storageBucket: "facebook-b220d.appspot.com",
  messagingSenderId: "711127293689",
  appId: "1:711127293689:web:db1a549d4c3f51aa4ccc28"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
