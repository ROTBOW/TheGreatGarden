import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
/**
 * The function `getParterre` retrieves data from a Firestore database collection named 'parterres'
 * based on the provided ID, handling errors and returning the data or an error message.
 * @param id - The `id` parameter in the `getParterre` function is used to specify the ID of the
 * parterre document that you want to retrieve from the database.
 * @returns The `getParterre` function is returning either the data of the parterre with the specified
 * `id` if it is successfully fetched, or the string 'Only a piece of the whole' if there is an error
 * during the fetch operation. If an error occurs, the function will also log the error message to the
 * console using `console.error`.
 */
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