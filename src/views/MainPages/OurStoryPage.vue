<template>
  <main-master-page>
    <our-story-banner/>
    <title-poster :title="$t('pages.aboutUs.aboutUsTitles.foundersPassion')" class="title-block--center">
      <template #subtitle>
        <p class="section__subtitle">{{$t('mainTitles.ourStory')}}</p>
      </template>
      <template #main>
        <div class="section__main">
          <p class="title-block__text">{{$t('pages.aboutUs.aboutUsTexts.foundersPassionText')}}</p>
        </div>
      </template>
    </title-poster>
    <category-card-page v-for="(item,index) in getOurStoryBlocks" :key="item.id" :category-obj="{
      title: $t(`pages.aboutUs.aboutUsTitles.${item.title}`),
    }" :class="{'category-card--even': index % 2 === 0}" class="category-card--column category-card--column">
      <template #text>
        <p class="category-card__text">{{ $t(`pages.aboutUs.aboutUsTexts.${item.description}`) }}</p>
      </template>
      <template #image>
        <div class="section__img">
          <img :src="item.imgUrl" :alt="item.title">
        </div>
      </template>
    </category-card-page>
    <title-poster :title="$t('pages.aboutUs.aboutUsTitles.discoverOurBouquets')" class="title-block--center">
        <template #main>
          <div class="section__main">
            <p class="section__text section__text--width">{{ $t('pages.aboutUs.aboutUsTexts.discoverOurBouquetsText')}}</p>
          </div>
        </template>
      <template #footer>
        <div class="section__footer">
          <router-link to="/shop">
            <button class="button">{{ $t('buttons.shopNow')}}</button>
          </router-link>
        </div>
      </template>
    </title-poster>
  </main-master-page>
</template>

<script>

import OurStoryBanner from "@/components/ourStoryComponeents/OurStoryBanner";
import MainMasterPage from "@/masterPages/MainMasterPage";
import TitlePoster from "@/components/generals/TitlePoster";
import CategoryCardPage from "@/components/generals/BannerTextPage";
import {mapState} from "pinia";
import {useHomeStore} from "@/store/modules/general";

export default {
  name: "OurStoryPage",
  components: {CategoryCardPage, TitlePoster, MainMasterPage, OurStoryBanner},
  computed:{
    ...mapState(useHomeStore, ['getOurStoryBlocks'])
  }
}
</script>

<style scoped>

</style>