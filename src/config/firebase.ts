
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { initializeAuth } from 'firebase/auth';
import {getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAm_MWcY2qI2d98F58DjgCrW6yYLf3OZjo",
  authDomain: "sigep-fa49e.firebaseapp.com",
  projectId: "sigep-fa49e",
  storageBucket: "sigep-fa49e.appspot.com",
  messagingSenderId: "637884173310",
  appId: "1:637884173310:web:bb3ef502aa917e48734eaf",
  measurementId: "G-73CFS6N3BC"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const auth = getAuth(app);
export const database = getFirestore(app);