import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDDdSpZmgu3j_TBNQ8D0VtgzGw7ATyZo5U",
    authDomain: "minishop-2f1db.firebaseapp.com",
    databaseURL: "https://minishop-2f1db-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "minishop-2f1db",
    storageBucket: "minishop-2f1db.appspot.com",
    messagingSenderId: "1019582016130",
    appId: "1:1019582016130:web:4ef18b6cff7418ae14e29b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };