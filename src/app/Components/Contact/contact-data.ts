import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from '@/lib/firebaseSDK';
const db = getFirestore(app);

export const ContactForm = async (name: string, email: string, message: string) => {  
    
    try {
        await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            message: message
        });
        console.log("success")
    } catch (err) {
        console.log(err)
        throw err;
    }
}