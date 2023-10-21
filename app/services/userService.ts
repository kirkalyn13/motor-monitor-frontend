import { firestoreDb as db } from "@/firebase-config"
import { doc, collection, getDoc } from "firebase/firestore"
import { User } from "../types/user"

const userRef = collection(db, "users")

export const getUserData = async (email: string): Promise<any> => {
    try {
        const docRef = doc(db, "users", email)
        const user = await getDoc(docRef)
        return user.data()
    } catch(err) {
        console.error(err)
    }
    return null
}