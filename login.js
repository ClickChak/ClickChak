// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
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
// ... (Firebase initialization code)

// Login function
document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
   
    })
    .catch((error) => {
      // Handle login error
     const errorMessageElement = document.getElementById("err");

    // Display the error message as a block element
    errorMessageElement.style.display = "block";
    });
});
