<template>
  <div class="banner section section--border">
    <div class="banner__wrapper">
      <div class="banner__container">
        <div class="section__content">
          <div class="section__sticky">
            <home-banner/>
          </div>
          <div class="banner__block">
            <banner-text-page
                v-for="(item, index) in getCategoryCardList"
                :key="item.id"
                :category-obj="{
                  id: item.id,
                  title: $t(`categories.${item.title}`),
                  category: item.category,
                  imgUrl: item.imgUrl
                }"
                :class="{'category-card--even': index % 2 !== 0}"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import HomeBanner from "@/components/homePageComponents/Banner/HomeBanner";
import BannerTextPage from "@/components/generals/BannerTextPage";
import {mapState} from 'pinia'
import {useHomeStore} from "@/store/modules/general";

export default {
  name: "BannerPage",
  components: {
    HomeBanner,
    BannerTextPage
  },
  computed: {
    ...mapState(useHomeStore, ['getCategoryCardList'])
  }
}
</script>

<style lang="scss" scoped>
.banner {
  &__wrapper {
    padding-top: 83px;
  }

  &__category-border {
    &:not(:last-child) {
      border-bottom: 1px solid #121212;
    }
  }
}
</style>