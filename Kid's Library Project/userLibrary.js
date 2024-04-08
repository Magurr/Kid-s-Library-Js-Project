import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc,where} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { User } from './user.js';


const firebaseConfig = {
    apiKey: "AIzaSyDC39wuM01dCu6hLjmgviQRRrrcNybESik",
    authDomain: "kids-lib-20237.firebaseapp.com",
    projectId: "kids-lib-20237",
    storageBucket: "kids-lib-20237.appspot.com",
    messagingSenderId: "400879095419",
    appId: "1:400879095419:web:e81dc4c67808e1b8b39cde",
    measurementId: "G-JQ7QMK3WD9"
};

const app = initializeApp(firebaseConfig);
  
const db = getFirestore(app);
const usersRef = collection(db,"users");

// try-catch ?
const username = localStorage.getItem("username");
const password = localStorage.getItem("password");

const usertag = document.getElementById("username");

usertag.textContent = username;


// async function getUserByUsernameAndPassword(username, password) {
//     try {
//         // Tüm kullanıcıları al
//         const querySnapshot = await getDocs(usersRef);
//         let foundUser = null;

//         // Tüm kullanıcıları gez
//         querySnapshot.forEach((doc) => {
//             const userData = doc.data();

//             // Kullanıcı adı ve şifre eşleşiyorsa
//             if (userData.username === username && userData.password === password) {
//                 // Giriş başarılı
//                 console.log("USER DATAYA ULAŞILDI!");
//                 // Döngüden çık
//                 foundUser = userData;

//             }
//         });
//         return foundUser;
//     } 
//     catch (error) {
//         console.error("getUserByUsernameAndPassword fonksiyonunda bir hata oluştu:", error);
//         return null;
//     }
// }

// LOGUT İŞLEMLERİ

document.getElementById("menuLink").addEventListener("click", function() {
    var menu = document.getElementById("menu");

    // Menü görünüyorsa kapat, görünmüyorsa aç
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

// Dışarı tıklanınca menüyü kapat
window.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuLink = document.getElementById("menuLink");

    if (event.target !== menu && event.target !== menuLink) {
        menu.style.display = "none";
    }
});

document.getElementById("logout").addEventListener("click", async () => {
    try {
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
        window.location.href = "login.html"; // Çıkış başarılıysa yönlendirilecek sayfa

        
    }
    catch (error) {
        // Hata durumunda burası çalışır
        console.error("Çıkış sırasında bir hata oluştu:", error);
    }
});





