import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyCJUgHO3owT-ybKkzJQhPnno72tWB2Pgps",
  authDomain: "miprj-d2db5.firebaseapp.com",
  projectId: "miprj-d2db5",
  storageBucket: "miprj-d2db5.appspot.com",
  messagingSenderId: "1025132692255",
  appId: "1:1025132692255:web:9f66a907144344f8e7662a",
  measurementId: "G-SP8W60ZMBT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// firestore 객체 생성
const db = getFirestore(app);
// firestore export
export {db}