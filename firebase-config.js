import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMZIjXOM6UBOAFXQMiFhyz1UXGSlmPj78",
  authDomain: "clickchak-9619f.firebaseapp.com",
  projectId: "clickchak-9619f",
  storageBucket: "clickchak-9619f.appspot.com",
  messagingSenderId: "121601800230",
  appId: "1:121601800230:web:449e15b2b4371094ca0ee7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
