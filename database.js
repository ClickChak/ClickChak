// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
  import { getDatabase, ref } from "https://clickchak-599eb-default-rtdb.asia-southeast1.firebasedatabase.app/";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC6EiuUsUqH1LViIOiPzf8HViNLRLokWZk",
    authDomain: "clickchak-599eb.firebaseapp.com",
    projectId: "clickchak-599eb",
    storageBucket: "clickchak-599eb.appspot.com",
    messagingSenderId: "466160599514",
    appId: "1:466160599514:web:d3534eaca15de0ab0980e3",
    measurementId: "G-72KRXJY3FD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 
 function writeUserData(userId, name, email, password) {
   const db = getDatabase();
   const reference = ref(db, 'users/' + userId);

   set(reference, {
    username: name,
    email: email,
    password: password
   });
 }

 writeUserData("manjul", "awu", "ecample@gmail.com", "qwerty");