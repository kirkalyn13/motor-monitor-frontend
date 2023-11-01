import { firestoreDb as db } from "@/firebase-config"
import { doc, collection, setDoc, getDocs, updateDoc, query, where, DocumentData } from "firebase/firestore"
import { User, UserData } from "../types/user"

const userRef = collection(db, "users")

export const getUserData = async (email: string): Promise<any> => {
    try {
        let id: String
        const data: DocumentData[] = []
        const q = query(userRef, where("email", "==", email))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                user: doc.data()
            })
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

export const editUserData = async(userData: UserData): Promise<void> => {
    try {
        await updateDoc(doc(db, "users", userData.id), userData.user)
    } catch(err) {
        console.error(err)
    }
}