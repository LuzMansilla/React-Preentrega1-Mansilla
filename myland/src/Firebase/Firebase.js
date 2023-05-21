import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAU8BSzMe07R3bV0HolXsS6yuWNz9TM2xw",
  authDomain: "proyecto-myland.firebaseapp.com",
  projectId: "proyecto-myland",
  storageBucket: "proyecto-myland.appspot.com",
  messagingSenderId: "977965083258",
  appId: "1:977965083258:web:6f32b6b11b6e93d77fa9c3"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app