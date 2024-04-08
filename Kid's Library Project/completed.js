import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc,where,doc,getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { Book, getPlanToWatchIconClass, getCompletedIconClass } from './library.js';

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

const usernameLogged = localStorage.getItem("username");
const passwordLogged = localStorage.getItem("password");

async function getUserByUsernameAndPassword(username, password) {
    try {
        const querySnapshot = await getDocs(usersRef);

        for (const doc of querySnapshot.docs) {
            const userData = doc.data();
            if (userData.username === username && userData.password === password) {
                return { id: doc.id, data: userData };
            }
        }

        // Kullanıcı bulunamazsa hata fırlat
        throw new Error("Kullanıcı bulunamadı");
    } catch (error) {
        console.error("getUserByUsernameAndPassword fonksiyonunda bir hata oluştu:", error);
        return null;
    }
}


let myBook = new Book("Hansel & Gratel","book_cover/hansel_and_gretel.jpg","hanselgratel.html");
myBook.addBookCld();
let white_fang = new Book("White Fang","book_cover/white_fang.jpg","whitefang.html");
white_fang.addBookCld();
let pinocchio = new Book("Pinocchio","book_cover/pinocchio.jpg","pinocchio.html");
pinocchio.addBookCld();
let heidi = new Book("Heidi","book_cover/heidi.jpg","heidi.html");
heidi.addBookCld();
let alice_in_wonderland = new Book("Alice In Wonderland","book_cover/alice_in_wonderland.jpg","aliceinwonderland.html");
alice_in_wonderland.addBookCld();
let robin_hood = new Book("Robin Hood","book_cover/robin_hood.jpg","robinhood.html");
robin_hood.addBookCld();
let peter_pan = new Book("Peter Pan","book_cover/peter_pan.jpg","peterpan.html");
peter_pan.addBookCld();
let lredrhood = new Book("Little Red Riding Hood","book_cover/little_red_riding_hood.jpg","littleredridinghood.html");
lredrhood.addBookCld();
let theuglyduckling = new Book("The Ugly Duckling","book_cover/the_ugly_duckling.jpg","theuglyduckling.html");
theuglyduckling.addBookCld();
let thesilverswans = new Book("The Silver Swans","book_cover/the_silver_swans.jpg","thesilverswans.html");
thesilverswans.addBookCld();
let thethreelittlepigs = new Book("The Three Little Pigs","book_cover/the_three_little_pigs.jpg","thethreelittlepigs.html");
thethreelittlepigs.addBookCld();
let alibabaandthefortythieves = new Book("Ali Baba and the Forty Thieves","book_cover/alibaba.jpg","alibaba.html");
alibabaandthefortythieves.addBookCld();
let sleeptbeauty = new Book("Sleeping Beauty","book_cover/sleeping_beauty.jpg","sleepingbeauty.html");
sleeptbeauty.addBookCld();
let cinderella = new Book("Cinderella","book_cover/cinderella.jpg","cinderella.html");
cinderella.addBookCld();
let aladdin = new Book("Aladdin","book_cover/aladdin.jpg","aladdin.html");
aladdin.addBookCld();
let thebeautyandthebeast = new Book("The Beauty and the Beast","book_cover/beautybeast.jpg","beautyandbeast.html");
thebeautyandthebeast.addBookCld();
let theemperorsnewclothes= new Book("The Emperor's New Clothes","book_cover/The_Emperor.jpg","theemperorsnewclothes.html");
theemperorsnewclothes.addBookCld();
let thelittlemermaid = new Book("The Little Mermaid","book_cover/The_Little_Mermaid.jpg","thelittlemermaid.html");
thelittlemermaid.addBookCld();
let thenightingale = new Book("The Nightingale","book_cover/The_Nightingale.jpg","thenightingale.html");
thenightingale.addBookCld();