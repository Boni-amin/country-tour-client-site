import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confic";


const initializeAuthenrication = ()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthenrication;