import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_u3p2eZ6ZTz9hGF7ivlqkWn4PMpvxuMU",
  authDomain: "cart-3cd3c.firebaseapp.com",
  databaseURL: "https://cart-3cd3c.firebaseio.com",
  projectId: "cart-3cd3c",
  storageBucket: "cart-3cd3c.appspot.com",
  messagingSenderId: "790810935760",
  appId: "1:790810935760:web:5e7871ed401c40de73f9d5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
