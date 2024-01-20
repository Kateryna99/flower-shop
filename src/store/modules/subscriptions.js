import {defineStore} from "pinia";
import DbOperations from "../helpers/DbOperations";
import {FAQList} from "@/store/helpers/data";

const collectionDB = new DbOperations("subscriptionOptions");


export const useSubscriptionOptionsStore = defineStore("subscriptionOptions", {
  state: () => ({
    subscriptionOptionsList: [],
    FAQList: FAQList,
    loading: false,
    error: null
  }),
  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
    getItemById: (state) => (itemId) => state.subscriptionOptionsList.find((item) => item.id === itemId),
    getSubscriptionOptionsList: (state) => state.subscriptionOptionsList,
    getFAQList: (state) => state.FAQList
  },
  actions: {
    setError(error) {
      this.error = error;
    },
    setLoading(loading) {
      this.loading = loading;
    },
    setSubscriptionOptionsList(list) {
      this.subscriptionOptionsList = list;
    },
    async loadList() {
      this.setError(null);
      this.setLoading(true);

      try {
        const list = await collectionDB.loadItemsList();
        this.setSubscriptionOptionsList(list);
      } catch (error) {
        this.setError(error);
      } finally {
        this.setLoading(false);
      }
    },
    async addItem(products) {
      try {
        this.setError(null);
        this.setLoading(true);
        await collectionDB.addItem(products);
        await this.loadList();
      } catch (error) {
        this.setError(error);
      } finally {
        this.setLoading(false);
      }
    },
    async deleteItem(itemId) {
      this.setError(null);
      this.setLoading(true);
      try {
        await collectionDB.deleteItem(itemId);
        await this.loadList();
      } catch (error) {
        this.setError(error);
      } finally {
        this.setLoading(false);
      }
    },
    async updateItem(itemId,data) {
      this.setError(null);
      this.setLoading(true);
      try {
        await collectionDB.updateItem(itemId,data);
        await this.loadList();
      } catch (error) {
        this.setError(error);
      } finally {
        this.setLoading(false);
      }

    }
  }
})