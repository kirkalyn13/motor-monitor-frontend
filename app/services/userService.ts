import { firestoreDb as db } from "@/firebase-config"
import { doc, collection, getDoc, setDoc  } from "firebase/firestore"
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

export const addUserData = async(email: string, user: User): Promise<void> => {
    try {
        await setDoc(doc(userRef, email), user)
    } catch(err) {
        console.error(err)
    }
}