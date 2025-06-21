import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from '@/lib/firebaseSDK';

const db = getFirestore(app);

export const ContactForm = async (name: string, email: string, message: string) => {
    // Only run on client side
    if (typeof window === 'undefined') {
        throw new Error('ContactForm can only be called on the client side');
    }

    try {
        await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            message: message
        });
        console.log("success")
    } catch (err) {
        console.log(err)
        throw err; // Re-throw the error so the component can handle it
    }
}