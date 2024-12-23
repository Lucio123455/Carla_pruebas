
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1nlLQsfsMPzW3jvgW7V3ZIaHQrYGvpJs",
  authDomain: "carla-86ac3.firebaseapp.com",
  projectId: "carla-86ac3",
  storageBucket: "carla-86ac3.firebasestorage.app",
  messagingSenderId: "162006082865",
  appId: "1:162006082865:web:3106315f527cf64d83bc10",
  measurementId: "G-MJFRBN4QPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
