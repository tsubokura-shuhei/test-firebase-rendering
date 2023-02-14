import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsyJNXJrVY_uBnjOF4kFjHAiXuTNcMm3o",
  authDomain: "test-app-3cee3.firebaseapp.com",
  projectId: "test-app-3cee3",
  storageBucket: "test-app-3cee3.appspot.com",
  messagingSenderId: "575698262648",
  appId: "1:575698262648:web:adba592e8d37312e9f2b8d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
