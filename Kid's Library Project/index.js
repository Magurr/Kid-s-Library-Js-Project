import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { User } from './user.js';
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
      
// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDC39wuM01dCu6hLjmgviQRRrrcNybESik",
authDomain: "kids-lib-20237.firebaseapp.com",
projectId: "kids-lib-20237",
storageBucket: "kids-lib-20237.appspot.com",
messagingSenderId: "400879095419",
appId: "1:400879095419:web:e81dc4c67808e1b8b39cde",
measurementId: "G-JQ7QMK3WD9"
};
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//console.log(app);
//console.log(db);

// Read data

const ref = collection(db,"users");

getDocs(ref).then((snapshot) =>{
    const users = snapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data(),
    }));
    console.log(users);
    })
    .catch((error) => {
        console.log(error);
    });

// Write Data


const userRef = collection(db, "users");
const user2 = new User("user2","user2");
//user2.addUserToDatabase();


    
