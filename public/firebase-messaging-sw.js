

importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');



firebase.initializeApp({
    apiKey: "AIzaSyAZ10Qg4KPp3o-rdIr7Bk5op_Rlwe4otNc",
    authDomain: "fir-shopping-6869a.firebaseapp.com",
    projectId: "fir-shopping-6869a",
    storageBucket: "fir-shopping-6869a.appspot.com",
    messagingSenderId: "315761515672",
    appId: "1:315761515672:web:cbb353b1f31638f13244ed"
});

const messaging = firebase.messaging();

console.log('[firebase-messaging-sw.js] Received background message ');
    
    