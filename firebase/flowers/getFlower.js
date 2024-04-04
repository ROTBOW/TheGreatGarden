import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
/**
 * The function `getFlower` retrieves a flower document from a Firestore database using its ID
 * asynchronously.
 * @param fId - The `fId` parameter in the `getFlower` function is used to specify the ID of the flower
 * document that you want to retrieve from the Firestore database.
 * @returns The `getFlower` function is returning the data of the flower document with the specified
 * `fId` if the document is successfully fetched. If there is an error during the fetch operation, it
 * will log the error to the console and return `null`.
 */
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