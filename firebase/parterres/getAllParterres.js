import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);
/**
 * The function `getAllParterres` retrieves all documents from the 'parterres' collection in Firestore
 * and returns them as an object with document IDs as keys.
 * @returns An object containing all parterres from the Firestore collection 'parterres', where the
 * keys are the document IDs and the values are the corresponding data of each parterre.
 */
const getAllParterres = async () => {
    const qSnap = await getDocs(collection(db, 'parterres'));

    let docs = {};
    qSnap.forEach((doc) => {
        docs[doc.id] = doc.data()
    });

    return docs;
};


export default getAllParterres;