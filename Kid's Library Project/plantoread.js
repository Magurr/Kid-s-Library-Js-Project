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
myBook.addBookPtr();
let white_fang = new Book("White Fang","book_cover/white_fang.jpg","whitefang.html");
white_fang.addBookPtr();
let pinocchio = new Book("Pinocchio","book_cover/pinocchio.jpg","pinocchio.html");
pinocchio.addBookPtr();
let heidi = new Book("Heidi","book_cover/heidi.jpg","heidi.html");
heidi.addBookPtr();
let alice_in_wonderland = new Book("Alice In Wonderland","book_cover/alice_in_wonderland.jpg","aliceinwonderland.html");
alice_in_wonderland.addBookPtr();
let robin_hood = new Book("Robin Hood","book_cover/robin_hood.jpg","robinhood.html");
robin_hood.addBookPtr();
let peter_pan = new Book("Peter Pan","book_cover/peter_pan.jpg","peterpan.html");
peter_pan.addBookPtr();
let lredrhood = new Book("Little Red Riding Hood","book_cover/little_red_riding_hood.jpg","littleredridinghood.html");
lredrhood.addBookPtr();
let theuglyduckling = new Book("The Ugly Duckling","book_cover/the_ugly_duckling.jpg","theuglyduckling.html");
theuglyduckling.addBookPtr();
let thesilverswans = new Book("The Silver Swans","book_cover/the_silver_swans.jpg","thesilverswans.html");
thesilverswans.addBookPtr();
let thethreelittlepigs = new Book("The Three Little Pigs","book_cover/the_three_little_pigs.jpg","thethreelittlepigs.html");
thethreelittlepigs.addBookPtr();
let alibabaandthefortythieves = new Book("Ali Baba and the Forty Thieves","book_cover/alibaba.jpg","alibaba.html");
alibabaandthefortythieves.addBookPtr();
let sleeptbeauty = new Book("Sleeping Beauty","book_cover/sleeping_beauty.jpg","sleepingbeauty.html");
sleeptbeauty.addBookPtr();
let cinderella = new Book("Cinderella","book_cover/cinderella.jpg","cinderella.html");
cinderella.addBookPtr();
let aladdin = new Book("Aladdin","book_cover/aladdin.jpg","aladdin.html");
aladdin.addBookPtr();
let thebeautyandthebeast = new Book("The Beauty and the Beast","book_cover/beautybeast.jpg","beautyandbeast.html");
thebeautyandthebeast.addBookPtr();
let theemperorsnewclothes= new Book("The Emperor's New Clothes","book_cover/The_Emperor.jpg","theemperorsnewclothes.html");
theemperorsnewclothes.addBookPtr();
let thelittlemermaid = new Book("The Little Mermaid","book_cover/The_Little_Mermaid.jpg","thelittlemermaid.html");
thelittlemermaid.addBookPtr();
let thenightingale = new Book("The Nightingale","book_cover/The_Nightingale.jpg","thenightingale.html");
thenightingale.addBookPtr();