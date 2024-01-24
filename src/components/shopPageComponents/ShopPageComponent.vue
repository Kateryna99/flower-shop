<template>
<div class="shop-page section">
  <div class="section__content section__content--top">
    <div class="shop-page__sticky">
      <div class="section__block">
          <div class="shop-page__item">
              <h2 class="shop-page__title">{{$t('categories.chooseCategory')}}</h2>
          </div>
      </div>
    </div>
    <div class="shop-page__block">
      <category-card-page
          v-for="(item, index) in getCategoryCardList"
          :key="item.id"
          :category-obj="item"
          :class="{'category-card--even': index % 2 !== 0}"
      />
    </div>
  </div>
</div>
</template>

<script>
import CategoryCardPage from "@/components/generals/BannerTextPage.vue";
import {useHomeStore} from "@/store/modules/general.js";
import {mapState} from "pinia";

export default {
  name: "ShopPage",
  components: { CategoryCardPage},
  computed: {
    ...mapState(useHomeStore, ['getCategoryCardList'])
  }
}
</script>

<style lang="scss" scoped>
.shop-page {
  &__title {
    font-size: 70px;
    font-weight: 600;

  }
 /* &__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }*/
  &__block {
  }
  &__item{
    text-align: center;
    padding:80px;

    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    //height: 100%;

    @media (max-width: 991px) {
      border-bottom: 1px solid #121212;
      min-height: 60vh;
    }
  }
}


</style>