import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
const getFlower = async (fId) => {
    let docRef = doc(db, 'flowers', fId)

    let [res, err] = [null, null];

    try {
        res = await getDoc(docRef);
    } catch (e) {
        err = e
    }

    if (res) {
        return await res.data()
    } else {
        console.error('FetchErr:', err)
        return null;
    }
}

export default getFlower;