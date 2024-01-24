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
   <div class="category-page__section section__content section__content--row">
     <product-card v-for="item in setFilteredProductsList" :key="item.id" :product-obj="item"/>
   </div>
  </div>
</div>
</template>

<script>
import {mapState,mapActions} from "pinia";
import {useProductsStore} from "@/store/modules/products";
import {useUsersStore} from "@/store/users";
import ProductCard from "@/components/categoryPageComponents/ProductCard";
import BannerComponent from "@/components/generals/BannerComponent";

export default {
  name: "CategoryPageContainer",
  components: {ProductCard, BannerComponent},
  computed: {
    ...mapState(useProductsStore, ['getFilteredProductsList','getCategoryBanner']),
    ...mapState(useUsersStore, ['userPermissions']),

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
    ...mapActions(useProductsStore, ['loadList']),


  },
  mounted() {
    this.loadList()
  }
}
</script>

<style lang="scss" scoped>
.category-page {
  &__section {
    @media (max-width: 560px) {
      grid-template-columns: minmax(0,1fr);
    }
  }
}

</style>