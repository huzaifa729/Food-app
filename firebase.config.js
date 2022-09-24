import { getApp, getApps, initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBJSmhIG-1wT1OGDNtqscXZ4m1jipv88nk",
    authDomain: "foodapp-9e219.firebaseapp.com",
    databaseURL: "https://foodapp-9e219-default-rtdb.firebaseio.com",
    projectId: "foodapp-9e219",
    storageBucket: "foodapp-9e219.appspot.com",
    messagingSenderId: "882438523426",
    appId: "1:882438523426:web:20778a8de49194fdf4587b"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };


  