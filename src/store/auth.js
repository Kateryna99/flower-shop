import { defineStore } from 'pinia'
import { useUsersStore } from './users'
import authOperations from 'src/store/helpers/GoogleAuthOperations.js'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        usersStore: useUsersStore(),
        user: null
    }),

    getters: {
        getUser: (state) => state.user
    },

    actions: {
        async signUpWithWithEmailAndPassword(email, password) {
            try {
                const res = await authOperations.signUpWithWithEmailAndPassword({ email, password })

                this.user = res

                await this.usersStore.addUserWithCustomId({
                    id: this.user?.uid,
                    data: {
                        email,
                        permissions: {
                            create: false,
                            read: true,
                            update: false,
                            delete: false
                        }
                    }
                })
            } catch (error) {
                // handle error
            }
        },

        async signInWithWithEmailAndPassword(email, password) {
            try {
                const res = await authOperations.signInWithWithEmailAndPassword({ email, password })

                this.user = res

                await this.usersStore.loadUserById(this.user.uid)

                return res
            } catch (error) {
                // handle error
                throw error
            }
        },

        async loginWithGoogleAccount() {
            try {
                const res = await authOperations.loginWithGoogleAccountPopup()

                this.user = res

                await this.usersStore.addUserWithCustomId({
                    id: this.user?.uid,
                    data: {
                        email: this.user?.email,
                        permissions: {
                            create: false,
                            read: true,
                            update: false,
                            delete: true
                        }
                    }
                })

                await this.usersStore.loadUserById(this.user.uid)

                return res
            } catch (error) {
                // handle error
                throw error
            }
        },

        async logOut() {
            try {
                await authOperations.logout()

                this.usersStore.currentUser = null
            } catch (error) {
                // handle error
            }
        },

        async getAuthData() {
            return this.user
        }
    }
})
