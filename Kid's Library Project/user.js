import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
export {User};

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.planToWatch = [];
        this.completed = [];
    }

    async addUserToDatabase() {
        try {
            const db = getFirestore(); // Firestore bağlantısı
            const userRef = collection(db, "users"); // Kullanıcı koleksiyonu referansı
            const snapshot = await getDocs(userRef);

            let isUserUnique = true;

            // Koleksiyon içinde dön
            snapshot.forEach((doc) => {
                const userData = doc.data();
                if (userData.username === this.username) {
                    // Bu kullanıcı adı zaten var
                    isUserUnique = false;
                    return;
                }
            });

            // Eğer kullanıcı adı benzersizse ekleyin
            if (isUserUnique) {
                await addDoc(userRef, { username: this.username, password: this.password });
                console.log("Kullanıcı başarıyla eklendi.");
            } else {
                console.log("Bu kullanıcı adı zaten var.");
            }
        } catch (error) {
            console.error("Hata:", error);
        }
    }
}

// Kullanım örneği
//const newUser = new User("user3", "user3password");
//newUser.addUserToDatabase();



