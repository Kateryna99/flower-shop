import { defineStore } from "pinia";
import DbOperations from '../helpers/DbOperations'
import {categoryBanners} from "@/store/helpers/data";


const collectionDB = new DbOperations('productsList')

export const useProductsStore = defineStore("products", {
    state: () => (  {
        productsList: [],
        loading: false,
        error: null,
        categoryBannersList: categoryBanners
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
        getFilteredProductsList: (state) =>(category)=> state.productsList.filter(item=>item.category===category),
        getProductsList: (state) => state.productsList,
        getItemById: (state) => (itemId) => state.productsList.find((item) => item.id === itemId),
        getCategoryBanner: (state) =>(category)=> state.categoryBannersList.filter(item=>item.category===category)
    },
    actions: {
        setError(error) {
            this.error = error;
        },
        setLoading(loading) {
            this.loading = loading;
        },
        setFriendsList(list) {
            this.productsList = list;
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
    },

});
