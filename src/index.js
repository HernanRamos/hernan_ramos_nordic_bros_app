import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyBd2qNce_S0o-BGsFyXZFvmi5lYOjVR7Io",
  authDomain: "nordicbros-0.firebaseapp.com",
  projectId: "nordicbros-0",
  storageBucket: "nordicbros-0.appspot.com",
  messagingSenderId: "655116361716",
  appId: "1:655116361716:web:b2f7e720f1c175d3d3a3a1"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
