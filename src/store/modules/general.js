import {defineStore} from "pinia";
import {homeCategoryCardList, companyInfoList,ourStoryBlocks} from "../helpers/data.js";

export const useHomeStore = defineStore('home', {
    state: () => ({
        categoryCardList: homeCategoryCardList,
        companyInfoList: companyInfoList,
        ourStoryBlocks: ourStoryBlocks
    }),
    getters: {
        getCategoryCardList: (state) => state.categoryCardList,
        getCompanyInfoList: (state) => state.companyInfoList,
        getOurStoryBlocks: (state) => state.ourStoryBlocks
    },
    actions: {
        setScrollToCodeBlock(blockTitle) {
            const targetBlock = document.getElementById(blockTitle);

            if(targetBlock) {
                targetBlock.scrollIntoView({behavior: 'smooth'});
            }
        },

    }
})