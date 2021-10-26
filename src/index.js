import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKbzbCq8RmY3oA375uMfZdl3Qx7ttIyM8",
    authDomain: "project-management-911a2.firebaseapp.com",
    databaseURL: "https://project-management-911a2-default-rtdb.firebaseio.com",
    projectId: "project-management-911a2",
    storageBucket: "project-management-911a2.appspot.com",
    messagingSenderId: "814854525117",
    appId: "1:814854525117:web:d9a7115b9eb5d2385227d4",
    measurementId: "G-Q233XYMRCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const realDb = getDatabase();



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    // if (user) {
    //   const uid = user.uid;
    //alert(uid)


    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

    // ...
    // } else {
    //   ReactDOM.render(
    //     <React.StrictMode>
    //       <Login />
    //     </React.StrictMode>,
    //     document.getElementById('root')
    //   );
    // }
});







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default realDb;