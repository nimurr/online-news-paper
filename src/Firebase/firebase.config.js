// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmuuS0tSWK-l6qwk4hOawTLw5Qd1Mhijs",
  authDomain: "news-paper-auth-job-task.firebaseapp.com",
  projectId: "news-paper-auth-job-task",
  storageBucket: "news-paper-auth-job-task.appspot.com",
  messagingSenderId: "2587422495",
  appId: "1:2587422495:web:6e2b99bbf5bcd491c5ca2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;