import firebase_app from "../config";
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";

const db = getFirestore(firebase_app);
const addFlower = async (flower, id) => {
    let res = null;
    let err = null;

    flower['planted_at'] = Timestamp.fromDate(new Date())
    
    try {
        res = await setDoc(doc(db, 'flowers', id),
            flower,
            {merge: true})
    } catch (e) {
        err = e;
    };

    return {res, err};
}

export default addFlower;