import { auth } from "./firebase-config.js";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User logged in successfully
      const user = userCredential.user;
      console.log("Logged in user:", user);
      // Redirect to dashboard or desired page
    })
    .catch((error) => {
      console.error("Error logging in:", error);
      // Handle error, show error message, etc.
    });
});
