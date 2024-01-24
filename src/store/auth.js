import { defineStore } from 'pinia'
import {auth} from "@/firebase-config";
import { useUsersStore } from './users.js'
import { GoogleAuthProvider, signInWithPopup, signInWithCredential, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        usersStore: useUsersStore(),
        user: null,
        error: null
    }),

    getters: {
        getUser: (state) => state.user
    },
    actions: {
        setUser(user) {
            this.user = user
        },
        setError(error) {
            this.error = error
        },

        async saveLoginUserData(loginResult) {
            try {
                const user = loginResult?.user;
                this.setUser(user);

                const credential = GoogleAuthProvider.credentialFromResult(loginResult);
                localStorage.setItem('authCredential', JSON.stringify(credential));

                await this.usersStore.loadUserPermissions(user.uid);
            } catch (error) {
                console.error(error);
                this.setError(error);
                throw error;
            }
        },

        async loginWithGoogle() {
            try {
                const provider = new GoogleAuthProvider();
                const loginResult = await signInWithPopup(auth, provider);
                await this.saveLoginUserData(loginResult);
                await this.usersStore.addUser({
                    name: this.user.displayName,
                    email: this.user.email
                })
            } catch (error) {
                this.setError(error);
            }
        },
        async loginWithCredential() {
            return new Promise((resolve, reject) => {
                let credential = localStorage.getItem('authCredential');

                if (credential) {
                    credential = JSON.parse(credential);
                    credential = GoogleAuthProvider.credential(credential.idToken);

                    signInWithCredential(auth, credential)
                      .then(async (loginResult) => {
                          await this.saveLoginUserData(loginResult);
                          resolve(loginResult);
                      })
                      .catch((error) => {
                          console.error(error);
                          this.setError(error);
                          reject(false);
                      });
                } else {
                    resolve(false);
                }
            });
        },
        async logout() {
            try {
                await signOut(auth);
                localStorage.removeItem('authCredential');
                this.setUser(null);
               await this.usersStore.clearPermissions();
            } catch (error) {
                this.setError(error);
            }
        },

    }
})
