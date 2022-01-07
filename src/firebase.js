import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXpv7hS9bK1OQEmf4Uk2EzrTN_7OdnHAc",
  authDomain: "fir-react-auth-e4ea7.firebaseapp.com",
  projectId: "fir-react-auth-e4ea7",
  storageBucket: "fir-react-auth-e4ea7.appspot.com",
  messagingSenderId: "839691642531",
  appId: "1:839691642531:web:adc30ee75173bb01844116",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const auth = getAuth()
