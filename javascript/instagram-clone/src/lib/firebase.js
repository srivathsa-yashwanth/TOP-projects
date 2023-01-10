
import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { mockDatabase } from "../mockdata";

const config = {
  apiKey: "AIzaSyD-NhdEVHLTAgaqGdnQTk-XrfGz9NU8GCY",
  authDomain: "instagram-clone-61e6b.firebaseapp.com",
  projectId: "instagram-clone-61e6b",
  storageBucket: "instagram-clone-61e6b.appspot.com",
  messagingSenderId: "193027018555",
  appId: "1:193027018555:web:be653f381a9a2b5b8ff11e"
}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };

    
