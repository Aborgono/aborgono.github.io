import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from './config'

const fetchDocuments = async() => {
    const querySnapshot = await getDocs(collection(db, "Leaderboard"));
    const documents = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    return documents;
}

const addUserAndScore = async (name, selectedMode, score) => {
    try {
        const res = await addDoc(collection(db, 'Leaderboard'), {
            name: name,
            selectedMode: selectedMode,
            score: score
        });
        console.log('Success')  
    } catch (error) {
        console.error(error)
    }
    return
}

export {fetchDocuments, addUserAndScore}