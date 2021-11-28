import firebase from "firebase";
import "firebase/storage";

const config={
  apiKey: "AIzaSyAgPEIYEjrE6pcDTHr1y40LpJIii9oF7RE",
  authDomain: "online-forum-6bb46.firebaseapp.com",
  projectId: "online-forum-6bb46",
  storageBucket: "online-forum-6bb46.appspot.com",
  messagingSenderId: "211183212346",
  appId: "1:211183212346:web:a89e94e047477a9ca4a203"
}
firebase.initializeApp(config)
const storage=firebase.storage();
export {storage,firebase as default};