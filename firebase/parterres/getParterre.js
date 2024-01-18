import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
const getParterre = async (id) => {
    let docRef = doc(db, 'parterres', id)

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
        return 'Only a piece of the whole'
    }

};

export default getParterre;