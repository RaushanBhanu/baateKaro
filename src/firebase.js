// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzeTEydjH0taDylNHkX9mStpgz0lDkE80",
  authDomain: "baatekaro-b746e.firebaseapp.com",
  projectId: "baatekaro-b746e",
  storageBucket: "baatekaro-b746e.appspot.com",
  messagingSenderId: "954247036164",
  appId: "1:954247036164:web:eeec214ee716ab7e616451",
  measurementId: "G-NFFGLRVKLL",
};

export const firebaseApp = initializeApp(firebaseConfig);

const db = initializeFirestore(firebaseApp, {
  useFetchStreams: false,
  experimentalAutoDetectLongPolling: true,
});
// const db = getFirestore(firebaseApp);

export default db;
