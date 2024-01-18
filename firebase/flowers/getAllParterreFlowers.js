import firebase_app from "../config";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
const getAllParterresFlowers = async (pId) => {
    const q = query(collection(db, 'flowers'), where('parterre_id', '==', pId));
    const qSnap = await getDocs(q);

    let docs = {};
    qSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        docs[doc.id] = doc.data()
    });

    return docs;
}

export default getAllParterresFlowers;