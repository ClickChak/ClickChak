// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
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
  const auth = getAuth()

//Getting all the elements of html
var email =document.getElementById("email");
var password =document.getElementById("password");

//function for storing data
window.signup = function(e){
  e.preventDefault();
  var obj = {
    email:email.value,
    password:password.value,
  }
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success){
    alert("signup success")
  })
  .catch(function(err){
    alert("error" +err)
  })
  console.log(obj)
};