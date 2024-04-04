import firebase_app from "../config";
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";

const db = getFirestore(firebase_app);
/**
 * The function `addFlower` asynchronously adds a flower document to a Firestore database collection
 * with a specified ID and timestamp.
 * @param flower - The `flower` parameter is an object that represents a flower to be added to a
 * database. It likely contains properties such as the flower's name, color, size, and any other
 * relevant information.
 * @param id - The `id` parameter in the `addFlower` function is the identifier for the document in the
 * 'flowers' collection where the flower data will be stored.
 * @returns The `addFlower` function returns an object with two properties: `res` and `err`. The `res`
 * property contains the result of setting the document in the Firestore database with the provided
 * flower data and merging any existing data if the document already exists. The `err` property
 * contains any error that occurred during the process.
 */
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