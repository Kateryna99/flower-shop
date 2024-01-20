<template>
<div class="category-page section">
  <div class="section__content section__content--top">
    <div class="section__sticky">
      <div class="section__block">
        <banner-component :banner="{
          imgUrl:setCategoryBanner[0].imgUrl,
          title:$t(`categories.${setCategoryBanner[0].title}`)
        }"/>
      </div>
    </div>
   <div class="section__content">
     <product-card v-for="item in setFilteredProductsList" :key="item.id" :product-obj="item"/>
   </div>
  </div>
</div>
</template>

<script>
import {mapState,mapActions} from "pinia";
import {useProductsStore} from "@/store/modules/products";
import ProductCard from "@/components/categoryPageComponents/ProductCard";
import BannerComponent from "@/components/generals/BannerComponent";

export default {
  name: "CategoryPageContainer",
  components: {ProductCard, BannerComponent},
  computed: {
    ...mapState(useProductsStore, ['getFilteredProductsList','getCategoryBanner']),

    getCurrentCategory(){
      return this.$route.params.category
    },
    setFilteredProductsList(){
      return this.getFilteredProductsList(this.getCurrentCategory)
    },
    setCategoryBanner(){
      const category = this.getCurrentCategory
      return this.getCategoryBanner(category)
    }

  },
  methods:{
    ...mapActions(useProductsStore, ['loadList'])
  },
  mounted() {
    this.loadList()
  }
}
</script>

<style scoped>

</style>