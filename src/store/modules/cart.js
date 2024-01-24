import { defineStore } from "pinia";
import DbOperations from "@/store/helpers/DbOperations";

const collectionDB = new DbOperations("cartList");

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartList: [],
    loading: false,
    error: null,
    totalPrice: 0,
    userInfo:{},
  }),
  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
    getItemById: (state) => (itemId) => state.cartList.find((item) => item.id === itemId),
    getCartList: (state) => state.cartList,
    getUserInfo: (state) => state.userInfo,
    getCartProductByProductId: (state) => (productId) => state.cartList.find((item) => item.productId === productId),
  },
  actions: {
    setError(error) {
      this.error = error;
    },
    setLoading(loading) {
      this.loading = loading;
    },
    setFriendsList(list) {
      this.cartList = list;
    },
    setUserInfo(category,data){
      this.userInfo[category] = data
    },
    async loadList() {
      this.setError(null);
      this.setLoading(true);

      try {
        const list = await collectionDB.loadItemsList();
        this.setFriendsList(list);
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
    }
  }
});