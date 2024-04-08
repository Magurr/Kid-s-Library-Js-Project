import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc,where,doc,getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
export { Book, getPlanToWatchIconClass, getCompletedIconClass };

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

class Book{


    constructor(name,imageSrc,link){
        this.name=name;
        this.imageSrc=imageSrc;
        this.link=link;
        this.ptrMark=false;
        this.cldMark=false;
    }

    

    async addBook() {

        let bookList = document.getElementById("bookList");
        //let plantoread = document.getElementById("plantoreadBookList");
        //let completed = document.getElementById("completedBookList");
            
        
        let newBook = document.createElement("div");
        newBook.className = "book";

        

        let aa = document.createElement("a");
        aa.href = this.link;


        let imgDiv = document.createElement("div");
        imgDiv.className = "imgDiv";

        let img = document.createElement("img");
        img.src = this.imageSrc;
        img.alt = "";
        
        
        aa.appendChild(img);
        imgDiv.appendChild(aa);
        //newBook.appendChild(aa);
        newBook.appendChild(imgDiv);
        
        
        
        // ALT KISIM İSİM VE CHECKBOXLAR
        
        let p = document.createElement("p");

        // Plan to Read icon
        let icon = document.createElement("i");
        // icon.className = getPlanToWatchIconClass(this.name);
        getPlanToWatchIconClass(this.name).then(iconClass => {
            icon.className = iconClass;
        });
        icon.onclick = this.togglePlanToRead.bind(this,icon); // Fonksiyonun doğru bağlamını korumak için bind kullanılır
        //newBook.appendChild(icon);
        p.appendChild(icon);


        // KİTAP İSMİ
        let a = document.createElement("a");
        a.href = this.link;
        a.textContent = this.name;
        p.appendChild(a);

        // COMPLETED ICON
        let completedIcon = document.createElement("i");
        // completedIcon.className = "completed-icon far fa-check-circle";
        getCompletedIconClass(this.name).then(CompletediconClass => {
            completedIcon.className = CompletediconClass;
        });
        completedIcon.addEventListener("click", this.toggleCompleted.bind(this,completedIcon));
        p.appendChild(completedIcon);

        newBook.appendChild(p);
    
        
        bookList.appendChild(newBook);
        

        // console.log(icon.className,completedIcon.className);
        //plantoread.appendChild(newBook);
        // if (ptrIcon === 'planToRead fas fa-bookmark' && plantowatch) {
        //     plantowatch.appendChild(newBook);
        // }
        // if (completedIcon.className === 'completed-icon fas fa-check-circle' && completed) {
        //     completed.appendChild(newBook);
        // }
    
    }
    async addBookPtr() {

        let plantoread = document.getElementById("plantoreadBookList");
            
        
        let newBook = document.createElement("div");
        newBook.className = "book";

        

        let aa = document.createElement("a");
        aa.href = this.link;


        let imgDiv = document.createElement("div");
        imgDiv.className = "imgDiv";

        let img = document.createElement("img");
        img.src = this.imageSrc;
        img.alt = "";
        
        
        aa.appendChild(img);
        imgDiv.appendChild(aa);
        //newBook.appendChild(aa);
        newBook.appendChild(imgDiv);
        
        
        
        // ALT KISIM İSİM VE CHECKBOXLAR
        
        let p = document.createElement("p");

        // Plan to Read icon
        let icon = document.createElement("i");
        // icon.className = getPlanToWatchIconClass(this.name);
        await getPlanToWatchIconClass(this.name).then(iconClass => {
            icon.className = iconClass;
        });
        icon.onclick = this.togglePlanToRead.bind(this,icon); // Fonksiyonun doğru bağlamını korumak için bind kullanılır
        //newBook.appendChild(icon);
        p.appendChild(icon);


        // KİTAP İSMİ
        let a = document.createElement("a");
        a.href = this.link;
        a.textContent = this.name;
        p.appendChild(a);

        // COMPLETED ICON
        let completedIcon = document.createElement("i");
        // completedIcon.className = "completed-icon far fa-check-circle";
        await getCompletedIconClass(this.name).then(CompletediconClass => {
            completedIcon.className = CompletediconClass;
        });
        completedIcon.addEventListener("click", this.toggleCompleted.bind(this,completedIcon));
        p.appendChild(completedIcon);

        newBook.appendChild(p);
    
        
        if (icon.className === "planToRead fas fa-bookmark") {
            plantoread.appendChild(newBook);
        }
    }
    async addBookCld() {

        let completed = document.getElementById("completedBookList");
            
        
        let newBook = document.createElement("div");
        newBook.className = "book";

        

        let aa = document.createElement("a");
        aa.href = this.link;


        let imgDiv = document.createElement("div");
        imgDiv.className = "imgDiv";

        let img = document.createElement("img");
        img.src = this.imageSrc;
        img.alt = "";
        
        
        aa.appendChild(img);
        imgDiv.appendChild(aa);
        //newBook.appendChild(aa);
        newBook.appendChild(imgDiv);
        
        
        
        // ALT KISIM İSİM VE CHECKBOXLAR
        
        let p = document.createElement("p");

        // Plan to Read icon
        let icon = document.createElement("i");
        // icon.className = getPlanToWatchIconClass(this.name);
        await getPlanToWatchIconClass(this.name).then(iconClass => {
            icon.className = iconClass;
        });
        icon.onclick = this.togglePlanToRead.bind(this,icon); // Fonksiyonun doğru bağlamını korumak için bind kullanılır
        //newBook.appendChild(icon);
        p.appendChild(icon);


        // KİTAP İSMİ
        let a = document.createElement("a");
        a.href = this.link;
        a.textContent = this.name;
        p.appendChild(a);

        // COMPLETED ICON
        let completedIcon = document.createElement("i");
        // completedIcon.className = "completed-icon far fa-check-circle";
        await getCompletedIconClass(this.name).then(CompletediconClass => {
            completedIcon.className = CompletediconClass;
        });
        completedIcon.addEventListener("click", this.toggleCompleted.bind(this,completedIcon));
        p.appendChild(completedIcon);

        newBook.appendChild(p);
    
        
        if (completedIcon.className === "completed-icon fas fa-check-circle") {
            completed.appendChild(newBook);
        }
    }
    

    togglePlanToRead(icon) {
        // FontAwesome icon classes
        let emptyIconClass = 'far';
        let filledIconClass = 'fas';
    
        // İkonun sınıflarını kontrol ederek değiştirme
        if (icon.classList.contains(emptyIconClass)) {
            icon.classList.replace(emptyIconClass, filledIconClass);
            this.ptrMark=true;
            this.addToPlanToWatchCollection();
        } else {
            icon.classList.replace(filledIconClass, emptyIconClass);
            this.ptrMark=false;
            this.deletePlanToWatchCollection();
        }
    }
    toggleCompleted(completedIcon) {
        // empty ve filled durumu kontrolü
        let emptyIconClass = 'far';
        let filledIconClass = 'fas';
    
        // icon değişkenini doğru şekilde almak için burada kullanılan sınıfları kontrol etmek önemlidir.
        if (completedIcon.classList.contains(emptyIconClass)) {
            completedIcon.classList.replace(emptyIconClass, filledIconClass);
            this.cldMark=true;
            this.addToCompletedCollection();
        } else {
            completedIcon.classList.replace(filledIconClass, emptyIconClass);
            this.cldMark=false;
            this.deleteCompletedCollection();
        }
    }
    

    async addToPlanToWatchCollection() {
        try {
            const user = await getUserByUsernameAndPassword(usernameLogged, passwordLogged);
    
            if (user) {
                const userRef = doc(usersRef, user.id); // user'dan gelen id ile DocumentReference oluştur
        
                // Belgeyi al
                const docSnapshot = await getDoc(userRef);
        
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
        
                    if (!userData.plantowatch) {
                        userData.plantowatch = [];
                    }
        
                    // Eğer kitap zaten ekli değilse ekle
                    const isBookAlreadyAdded = userData.plantowatch.some(book => book.name === this.name);
        
                    if (!isBookAlreadyAdded) {
                        // Yeni kitap objesini "plantowatch" dizisine ekle
                        userData.plantowatch.push({
                            name: this.name,
                            imageSrc: this.imageSrc,
                            link: this.link,
                            ptrMark: this.ptrMark,
                            cldMark: this.cldMark
                        });
        
                        // Belgeyi güncelle
                        await updateDoc(userRef, userData);
        
                        console.log("Kitap plana eklendi:", this.name);
                    } else {
                        console.error("Kitap zaten plana ekli:", this.name);
                    }
                } else {
                    console.error("Kullanıcı belgesi bulunamadı:", usernameLogged);
                }
            } else {
                console.error("Kullanıcı belgesi alınamadı.");
            }
        } catch (error) {
            console.error("addToPlanToWatchCollection fonksiyonunda bir hata oluştu:", error);
        }
    }
    

    async deletePlanToWatchCollection() {
        try {
            const username = localStorage.getItem("username");
            const user = await getUserByUsernameAndPassword(username, localStorage.getItem("password"));
    
            if (user) {
                const userRef = doc(usersRef, user.id);
                const docSnapshot = await getDoc(userRef);
    
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
    
                    if (userData.plantowatch) {
                        // Kitabın indeksini bul
                        const bookIndex = userData.plantowatch.findIndex(book => book.name === this.name);
    
                        // Eğer kitap bulunduysa, kitabı sil
                        if (bookIndex !== -1) {
                            userData.plantowatch.splice(bookIndex, 1);
    
                            // Belgeyi güncelle
                            await updateDoc(userRef, userData);
                            console.log("Kitap plantowatch koleksiyonundan kaldırıldı:", this.name);
                        } else {
                            console.error("Kitap bulunamadı:", this.name);
                        }
                    } else {
                        console.error("plantowatch koleksiyonu bulunamadı");
                    }
                } else {
                    console.error("Kullanıcı belgesi bulunamadı:", username);
                }
            } else {
                console.error("Kullanıcı belgesi alınamadı.");
            }
        } catch (error) {
            console.error("deletePlanToWatchCollection fonksiyonunda bir hata oluştu:", error);
        }
    }
    async addToCompletedCollection() {
        try {
            const user = await getUserByUsernameAndPassword(usernameLogged, passwordLogged);
    
            if (user) {
                const userRef = doc(usersRef, user.id); // user'dan gelen id ile DocumentReference oluştur
        
                // Belgeyi al
                const docSnapshot = await getDoc(userRef);
        
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
        
                    if (!userData.completed) {
                        userData.completed = [];
                    }
        
                    // Eğer kitap zaten ekli değilse ekle
                    const isBookAlreadyAdded = userData.completed.some(book => book.name === this.name);
        
                    if (!isBookAlreadyAdded) {
                        // Yeni kitap objesini "plantowatch" dizisine ekle
                        userData.completed.push({
                            name: this.name,
                            imageSrc: this.imageSrc,
                            link: this.link,
                            ptrMark: this.ptrMark,
                            cldMark: this.cldMark
                        });
        
                        // Belgeyi güncelle
                        await updateDoc(userRef, userData);
        
                        console.log("Kitap plana eklendi:", this.name);
                    } else {
                        console.error("Kitap zaten plana ekli:", this.name);
                    }
                } else {
                    console.error("Kullanıcı belgesi bulunamadı:", usernameLogged);
                }
            } else {
                console.error("Kullanıcı belgesi alınamadı.");
            }
        } catch (error) {
            console.error("addToPlanToWatchCollection fonksiyonunda bir hata oluştu:", error);
        }
    }
    async deleteCompletedCollection() {
        try {
            const username = localStorage.getItem("username");
            const user = await getUserByUsernameAndPassword(username, localStorage.getItem("password"));
    
            if (user) {
                const userRef = doc(usersRef, user.id);
                const docSnapshot = await getDoc(userRef);
    
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
    
                    if (userData.completed) {
                        // Kitabın indeksini bul
                        const bookIndex = userData.completed.findIndex(book => book.name === this.name);
    
                        // Eğer kitap bulunduysa, kitabı sil
                        if (bookIndex !== -1) {
                            userData.completed.splice(bookIndex, 1);
    
                            // Belgeyi güncelle
                            await updateDoc(userRef, userData);
                            console.log("Kitap plantowatch koleksiyonundan kaldırıldı:", this.name);
                        } else {
                            console.error("Kitap bulunamadı:", this.name);
                        }
                    } else {
                        console.error("plantowatch koleksiyonu bulunamadı");
                    }
                } else {
                    console.error("Kullanıcı belgesi bulunamadı:", username);
                }
            } else {
                console.error("Kullanıcı belgesi alınamadı.");
            }
        } catch (error) {
            console.error("deletePlanToWatchCollection fonksiyonunda bir hata oluştu:", error);
        }
    }
    // BU FONKSİYONDAN HER ŞEYE ULAŞILIR
    // async getPlanToWatchIconClass() {
    //     try {
    //         const user = await getUserByUsernameAndPassword(usernameLogged, passwordLogged);
    //         //console.log(user);
    
    //         if (user && user.data && user.data.plantowatch) {
    //             const bookInCollection = user.data.plantowatch.find(book => book.name === this.name);
    //             if (bookInCollection){
    //                 return bookInCollection.ptrMark ? 'planToRead fas fa-bookmark' : 'planToRead far fa-bookmark';
    //             }
    //             else {
    //                 return 'far fa-bookmark';
    //             }
    //             // console.log("başarılı");
    //             // console.log(user.data);
    //             // console.log(user.data.plantowatch);
    //             // console.log(bookInCollection);
    //             // return bookInCollection ? 'planToRead fas fa-bookmark' : 'planToRead far fa-bookmark';
    //         } 
    //         else {
    //             console.log("başarısız");
    //             return 'planToRead far fa-bookmark'; // Default durumu
    //         }
    //     } 
    //     catch (error) {
    //         console.error("getPlanToWatchIconClass fonksiyonunda bir hata oluştu:", error);
    //         return 'planToRead far fa-bookmark'; // Hata durumu
    //     }
    // }
    
    

}

async function getPlanToWatchIconClass(bookName) {
    const user = await getUserByUsernameAndPassword(usernameLogged, passwordLogged);

    if (user && user.data && user.data.plantowatch) {
        console.log("if e girdi");
        for (const book of user.data.plantowatch) {
            if (book.name === bookName) {
                console.log(book.name);
                return 'planToRead fas fa-bookmark';
            }
        }

        return 'planToRead far fa-bookmark'; // Kitap bulunamadığında
    } 
    else {
        return 'planToRead far fa-bookmark'; // Default durumu
    }
}
async function getCompletedIconClass(bookName) {
    const user = await getUserByUsernameAndPassword(usernameLogged, passwordLogged);

    if (user && user.data && user.data.completed) {
        console.log("if e girdi");
        for (const book of user.data.completed) {
            if (book.name === bookName) {
                console.log(book.name);
                return 'completed-icon fas fa-check-circle';
            }
        }

        return 'completed-icon far fa-check-circle'; // Kitap bulunamadığında
    } 
    else {
        return 'completed-icon far fa-check-circle'; // Default durumu
    }
}




let myBook = new Book("Hansel & Gratel","book_cover/hansel_and_gretel.jpg","hanselgratel.html");
myBook.addBook();
let white_fang = new Book("White Fang","book_cover/white_fang.jpg","whitefang.html");
white_fang.addBook();
let pinocchio = new Book("Pinocchio","book_cover/pinocchio.jpg","pinocchio.html");
pinocchio.addBook();
let heidi = new Book("Heidi","book_cover/heidi.jpg","heidi.html");
heidi.addBook();
let alice_in_wonderland = new Book("Alice In Wonderland","book_cover/alice_in_wonderland.jpg","aliceinwonderland.html");
alice_in_wonderland.addBook();
let robin_hood = new Book("Robin Hood","book_cover/robin_hood.jpg","robinhood.html");
robin_hood.addBook();
let peter_pan = new Book("Peter Pan","book_cover/peter_pan.jpg","peterpan.html");
peter_pan.addBook();
let lredrhood = new Book("Little Red Riding Hood","book_cover/little_red_riding_hood.jpg","littleredridinghood.html");
lredrhood.addBook();
let theuglyduckling = new Book("The Ugly Duckling","book_cover/the_ugly_duckling.jpg","theuglyduckling.html");
theuglyduckling.addBook();
let thesilverswans = new Book("The Silver Swans","book_cover/the_silver_swans.jpg","thesilverswans.html");
thesilverswans.addBook();
let thethreelittlepigs = new Book("The Three Little Pigs","book_cover/the_three_little_pigs.jpg","thethreelittlepigs.html");
thethreelittlepigs.addBook();
let alibabaandthefortythieves = new Book("Ali Baba and the Forty Thieves","book_cover/alibaba.jpg","alibaba.html");
alibabaandthefortythieves.addBook();
let sleeptbeauty = new Book("Sleeping Beauty","book_cover/sleeping_beauty.jpg","sleepingbeauty.html");
sleeptbeauty.addBook();
let cinderella = new Book("Cinderella","book_cover/cinderella.jpg","cinderella.html");
cinderella.addBook();
let aladdin = new Book("Aladdin","book_cover/aladdin.jpg","aladdin.html");
aladdin.addBook();
let thebeautyandthebeast = new Book("The Beauty and the Beast","book_cover/beautybeast.jpg","beautyandbeast.html");
thebeautyandthebeast.addBook();
let theemperorsnewclothes= new Book("The Emperor's New Clothes","book_cover/The_Emperor.jpg","theemperorsnewclothes.html");
theemperorsnewclothes.addBook();
let thelittlemermaid = new Book("The Little Mermaid","book_cover/The_Little_Mermaid.jpg","thelittlemermaid.html");
thelittlemermaid.addBook();
let thenightingale = new Book("The Nightingale","book_cover/The_Nightingale.jpg","thenightingale.html");
thenightingale.addBook();

