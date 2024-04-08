import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc,where,getDoc} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { User } from './user.js';

// Firebase projenizden alınan yapılandırma bilgilerini ekleyin
const firebaseConfig = {
    apiKey: "AIzaSyDC39wuM01dCu6hLjmgviQRRrrcNybESik",
    authDomain: "kids-lib-20237.firebaseapp.com",
    projectId: "kids-lib-20237",
    storageBucket: "kids-lib-20237.appspot.com",
    messagingSenderId: "400879095419",
    appId: "1:400879095419:web:e81dc4c67808e1b8b39cde",
    measurementId: "G-JQ7QMK3WD9"
};
  
// Firebase'i başlatın
const app = initializeApp(firebaseConfig);
  
// Firebase Firestore bağlantısı
const db = getFirestore(app);
const usersRef = collection(db,"users");

document.getElementById("button").addEventListener("click", async () => {
    try {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const messageElement = document.getElementById("message");

        // Tüm kullanıcıları al
        const querySnapshot = await getDocs(usersRef);

        // Tüm kullanıcıları gez
        querySnapshot.forEach((doc) => {
            const userData = doc.data();

            // Kullanıcı adı ve şifre eşleşiyorsa
            if (userData.username === username && userData.password === password) {
                // Giriş başarılı
                console.log("Giriş başarılı!");
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                window.location.href = "userLibrary.html"; // Giriş başarılıysa yönlendirilecek sayfa

                // Döngüden çık
                throw new Error("Giriş başarılı!"); // Hata atarak döngüyü bitirir
            }
        });

        // Döngüden çıkılmışsa kullanıcı adı veya şifre hatalıdır
        messageElement.textContent = "Kullanıcı adı veya şifre hatalı!";
        messageElement.style.backgroundColor = "#f44336"; // Hata için kırmızı arka plan
        messageElement.style.display = "block";

        setTimeout(() => {
            messageElement.style.display = "none";
        }, 4000);
    }
    catch (error) {
        // Hata durumunda burası çalışır
        console.error("Giriş sırasında bir hata oluştu:", error);
    }
});
