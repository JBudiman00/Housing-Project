import { initializeApp } from 'firebase/app'
import { getDatabase, ref,set } from 'firebase/database';
//import { getFirestore, collection, getDocs, getDoc} from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBWfpNZ0FzrUYxpbYQlQdKVbMeRt-AdeYw",
    authDomain: "storage-solution-842ae.firebaseapp.com",
    projectId: "storage-solution-842ae",
    storageBucket: "storage-solution-842ae.appspot.com",
    messagingSenderId: "723689189815",
    appId: "1:723689189815:web:c9d9197476d0850ebc7832",
    measurementId: "G-4JPVCBMZ5J"
  });

const app = initializeApp(firecaseConfig);

function writeUserData(userId, name, email, password, phoneNum){
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);

    set(reference, {
        name: name,
        email: email,
        password: password,
        phoneNum: phoneNum
    });
}
writeUserData("1", "test", "test@test.com", "testing", 123456789);