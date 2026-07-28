// Firebase Configuration

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { 
getFirestore 
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


import { 
getAuth 
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import { 
getStorage 
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";



const firebaseConfig = {

apiKey: "AIzaSyCM6ZvVOQEVBoNPJNCBJBOJP83WAX2O5lU",

authDomain: "amar-social-hub.firebaseapp.com",

projectId: "amar-social-hub",

storageBucket: "amar-social-hub.firebasestorage.app",

messagingSenderId: "12961893425",

appId: "1:12961893425:web:c74bba9ca1c9d4badad910",

measurementId: "G-F2DPY3DWG2"

};



const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);



export {
db,
auth,
storage
};
