import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOvqkiPr2qhwRuA3KZJGdbL6GIXeHEdms",
  authDomain: "fdsecurity-3fe76.firebaseapp.com",
  projectId: "fdsecurity-3fe76",
  storageBucket: "fdsecurity-3fe76.appspot.com",
  messagingSenderId: "750537415854",
  appId: "1:750537415854:web:ae6e2675909f0f494fe13f"
};

const firestoreApp = initializeApp(firebaseConfig);

export default firebaseConfig