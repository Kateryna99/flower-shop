import DbOperations from '@/store/helpers/DbOperations';
const collectionDB = new DbOperations('users');
import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', () => {
    const state = {
        usersList: null,
        currentUser: null,
    };

    const getters = {
        getUsersList: () => state.usersList,
        getCurrentUser: () => state.currentUser,
    };

    const methods = {
        async loadUsersList() {
            state.usersList = await collectionDB.loadItemsList();
        },

        async loadUserById(userId) {
            if (userId) {
                state.currentUser = await collectionDB.getItemById(userId);
                return state.currentUser;
            }
        },

        async addUser(userData) {
            state.currentUser = await collectionDB.addItem(userData);
        },

        async addUserWithCustomId({ id, data }) {
            const userObj = await this.loadUserById(id);
            if (!userObj?.email) {
                state.currentUser = await collectionDB.addItemWithCustomId(id, data);
            }
        },

        async updateUser({ id, data }) {
            state.currentUser = await collectionDB.updateItem(id, data);
        },

        async deleteUser(userData) {
            state.currentUser = await collectionDB.deleteItem(userData);
        },
    };

    return { state, getters, methods };
});
