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
 
// Reference to your database
const db = firebase.database();
const dataRef = db.ref("userId"); // Replace with your data path

// Data to be written
const newData = {
  key1: "value1",
  key2: "value2",
  // Add more data as needed
};

// Set the data in the specified path
dataRef.set(newData)
  .then(() => {
    console.log("Data has been written successfully!");
  })
  .catch((error) => {
    console.error("Error writing data: ", error);
  });
