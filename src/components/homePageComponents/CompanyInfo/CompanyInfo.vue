<template>
  <div class="company-info section section--border">
    <div class="company-info__wrapper">
      <div class="section__content company-info__content info-block">
        <div class="section__sticky">
          <title-poster :title="$t('mainTitles.aboutUsTitle')" class="section__block"/>
        </div>
        <title-poster :title="$t('mainTitles.title')" class="title-block--small">
          <template #subtitle>
            <p class="section__subtitle">{{ $t('mainTitles.ourStory') }}</p>
          </template>
          <template #main>
            <div class="section__main">
              <p class="company-info__text">{{$t(`pages.home.main.text.ourStoryText`)}}</p>
            </div>
          </template>
          <template #footer>
            <div class="section__footer">
              <router-link to="/our-story">
                <button class="button button--secondary"> {{ $t('buttons.learnMore') }}</button>
              </router-link>
            </div>
          </template>
        </title-poster>
      </div>
      <div class="section__content">
        <div class="section__sticky">
          <title-poster :title="$t('pages.home.main.titles.WhyUsTitle')" class="section__block"/>
        </div>
        <div class="company-info__block">
          <title-poster v-for="item in getCompanyInfoList" :key="item.id" :title="$t(`pages.home.main.titles.${item.title}`)" class="title-block--small">
            <template #main>
              <div class="section__main">
                <p class="company-info__text">{{$t(`pages.home.main.text.${item.description}`)}}</p>
              </div>
            </template>
          </title-poster>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TitlePoster from "@/components/generals/TitlePoster.vue";
import {mapState} from 'pinia'
import {useHomeStore} from "@/store/modules/general";

export default {
  name: "CompanyInfo",
  components: {TitlePoster},
  computed: {
    ...mapState(useHomeStore, ['getCompanyInfoList'])
  }
}


</script>

<style lang="scss" scoped>
.company-info {
  &__wrapper {
  }
  &__content{
    border-bottom: 1px solid black;
  }
  &__block {
    display: flex;
    flex-direction: column;
  }
  &__text{
    text-align: start;
  }
}

.info-block {
  &__block {
    padding-top: 64px;
  }
}

</style>