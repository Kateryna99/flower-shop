import firebaseDB from '@/firebase-config'
import {doc, collection, getDocs, getDoc, addDoc,deleteDoc, updateDoc, setDoc, query, where, documentId} from 'firebase/firestore/lite'


class DbOperations {
    constructor(collectionTitle) {
        this.dbCollection = collection(firebaseDB, `/${collectionTitle}`)
    }
    getListFromSnapshot(snapshot) {
        const list = []
        snapshot.docs.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data()
            })
        })
        return list
    }
    loadItemsList() {
        return new Promise((resolve, reject) => {
            getDocs(this.dbCollection)
                .then((querySnapshot) => {
                    resolve(this.getListFromSnapshot(querySnapshot))
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }


    addItem(item) {
        return new Promise((resolve, reject) => {
            addDoc(this.dbCollection, item)
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    addItemWithCustomId(id, item) {
        return new Promise((resolve, reject) => {
            setDoc(doc(this.dbCollection, id), item)
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    deleteItem(id) {
        return new Promise((resolve, reject) => {
            deleteDoc(doc(this.dbCollection, id))
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }


    updateItem(itemId, data) {
        return new Promise((resolve, reject) => {
            const oldDocRef = doc(this.dbCollection, itemId)
            updateDoc(oldDocRef, data)
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    getItemById(itemId) {
        return new Promise((resolve, reject) => {
            const docRef = doc(this.dbCollection, itemId)
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists()) resolve(docSnap.data())
                    else resolve({})
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    loadFilteredData(fieldTitle, compareOperator, valueToCompare) {
        const q = query(this.dbCollection, where(fieldTitle, compareOperator, valueToCompare))
        return new Promise((resolve, reject) => {
            getDocs(q)
                .then((querySnapshot) => {
                    resolve(this.getListFromSnapshot(querySnapshot))
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    loadDocumentsFromIdsList(idsList) {
        const q = query(this.dbCollection, where(documentId(), 'in', idsList))
        return new Promise((resolve, reject) => {
            getDocs(q)
                .then((querySnapshot) => {
                    resolve(this.getListFromSnapshot(querySnapshot))
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}

export default DbOperations
