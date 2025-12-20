// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAnalytics,
  logEvent,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDcjOtvDkZAJIoq1xeeZO_Eu0Itc3Dshcw",
  authDomain: "fkmym-ec40c.firebaseapp.com",
  projectId: "fkmym-ec40c",
  storageBucket: "fkmym-ec40c.firebasestorage.app",
  messagingSenderId: "258272002741",
  appId: "1:258272002741:web:f277b44343fec49d25b4fc",
  measurementId: "G-84YYSKSZ20"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const to_snake_case = (str) =>
  str
    .replace(/\s+/g, "_")
    .replace(/[^\w\s]/g, "")
    .toLowerCase();

export function logPageView(pageName) {
  logEvent(analytics, to_snake_case(pageName), {
    Page: pageName,
  });
}
