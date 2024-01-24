import DbOperations from '@/store/helpers/DbOperations';
const collectionDB = new DbOperations('users');
import {useAuthStore} from "./auth.js";
import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
  state: () => ({
    authStore: useAuthStore(),
    permissions: {},
  }),

  getters: {
    userPermissions: (state) => state.permissions,
  },
  actions: {
    async addUser(user) {
      try {
        this.setError(null);
        this.setLoading(true);
        await collectionDB.addItem(user);
        await this.loadList();
      } catch (error) {
        this.setError(error);
      } finally {
        this.setLoading(false);
      }
    },
    setPermissions(permissions) {
      this.permissions = permissions;
    },
    clearPermissions() {
      this.permissions = {};
    },
    loadUserPermissions(userId) {
      //userId ??= this.authStore.getUser.uid
      collectionDB.getItemById(userId).then((permissions) => {
        this.setPermissions(permissions);
      });
    }
  }
});
