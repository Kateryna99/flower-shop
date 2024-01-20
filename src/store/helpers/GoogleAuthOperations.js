
/*import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '@/firebase-config'

const useGoogleAuth = (options = {}) => {
    /!*const saveCredentialsInLocalStorage = options.saveCredentialsInLocalStorage || true
    const authCredentialLocalStorageKey = options.authCredentialLocalStorageKey || 'authCredential'*!/

    const loginWithGoogleAccountPopup = () => {
        return new Promise((resolve, reject) => {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
                .then((loginResult) => {
                    resolve(loginResult?.user)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    const signUpWithWithEmailAndPassword = ({ email, password }) => {
        return new Promise((resolve, reject) => {
            if (!email || !password) reject(false)
            else {
                const authInstance = getAuth()
                createUserWithEmailAndPassword(authInstance, email, password)
                    .then((loginResult) => {
                        resolve(loginResult?.user)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            }
        })
    }

    const signInWithWithEmailAndPassword = ({ email, password }) => {
        return new Promise((resolve, reject) => {
            if (!email || !password) reject(false)
            else {
                const authInstance = getAuth()
                signInWithEmailAndPassword(authInstance, email, password)
                    .then((loginResult) => {
                        resolve(loginResult?.user)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            }
        })
    }

    const logout = () => {
        return new Promise((resolve, reject) => {
            signOut(auth)
                .then(() => {
                    if (saveCredentialsInLocalStorage) {
                        localStorage.removeItem(authCredentialLocalStorageKey)
                    }
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    return {
        loginWithGoogleAccountPopup,
        signUpWithWithEmailAndPassword,
        signInWithWithEmailAndPassword,
        logout
    }
}

export default useGoogleAuth*/
