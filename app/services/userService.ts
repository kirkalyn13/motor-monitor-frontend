import { firestoreDb as db } from "@/firebase-config"
import { doc, collection, setDoc, getDocs, query, where, DocumentData } from "firebase/firestore"
import { User } from "../types/user"

const userRef = collection(db, "users")

export const getUserData = async (email: string): Promise<any> => {
    try {
        const data: DocumentData[] = []
        const q = query(userRef, where("email", "==", email))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        })
        return data[0]
    } catch(err) {
        console.error(err)
    }
    return null
}

export const addUserData = async(user: User): Promise<void> => {
    try {
        await setDoc(doc(userRef), user)
    } catch(err) {
        console.error(err)
    }
}