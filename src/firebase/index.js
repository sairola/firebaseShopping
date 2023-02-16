// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";


import { getMessaging, getToken } from "firebase/messaging"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ10Qg4KPp3o-rdIr7Bk5op_Rlwe4otNc",
  authDomain: "fir-shopping-6869a.firebaseapp.com",
  projectId: "fir-shopping-6869a",
  storageBucket: "fir-shopping-6869a.appspot.com",
  messagingSenderId: "315761515672",
  appId: "1:315761515672:web:cbb353b1f31638f13244ed"
};



// currentToken = cY5Pf8vH4rKgphJVrtQagD:APA91bGIpH2M3cXo6tgqiMmm0xQmAY4ZhC5g5ingR20OOnBLjCM286dM5a0o1XgBy51AxG9XHyTBJl5AyNSJMbzrTOrT41TqQ8xputtPGG8UAdtaUpOfU_4JfsKwKOWqcvRf7ePLyvDx

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const messaging = getMessaging(app);

getToken(messaging, { vapidKey: "BMQgYkVjyD2OO_jgjCfnQ2UGQY----ldC8ZICJPAs6RCr3l-g8GiezDYWa2pnMk8DatyYkcCkbDuICny0WZeSoU" })
.then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    // console.log('currentToken', currentToken)
    sendCurrentToken(currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

const sendCurrentToken = () => {
  if(localStorage.getItem('TokenToserver')) return;
  //Implemetar la lógica de que se almacene en el servidor
  console.log("ha almacenado el token");
  localStorage.setItem('TokenToServer', '1');

}

