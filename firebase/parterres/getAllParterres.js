import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);
const getAllParterres = async () => {
    const qSnap = await getDocs(collection(db, 'parterres'));

    let docs = {};
    qSnap.forEach((doc) => {
        docs[doc.id] = doc.data()
    });

    return docs;
};


export default getAllParterres;