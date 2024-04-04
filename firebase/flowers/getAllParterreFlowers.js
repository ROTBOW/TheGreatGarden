import firebase_app from "../config";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
/**
 * The function `getAllParterresFlowers` retrieves all flowers associated with a specific parterre ID
 * from a Firestore database.
 * @param pId - The `pId` parameter in the `getAllParterresFlowers` function represents the ID of a
 * parterre. The function retrieves all the flowers associated with the specified parterre ID from a
 * collection in a Firestore database.
 * @returns The `getAllParterresFlowers` function is returning an object where the keys are the
 * document IDs of the flowers in the specified parterre (determined by the `pId` parameter) and the
 * values are the data of each flower document.
 */
const getAllParterresFlowers = async (pId) => {
    const q = query(collection(db, 'flowers'), where('parterre_id', '==', pId));
    const qSnap = await getDocs(q);

    let docs = {};
    qSnap.forEach((doc) => {
        docs[doc.id] = doc.data()
    });

    return docs;
}

export default getAllParterresFlowers;