<template>
  <div class="story-banner section section--border">
    <div class="section__content section__content--top">
      <div class="story-banner__block">
        <title-poster :title="$t('mainTitles.title')" class="title-block--center">
          <template #subtitle>
            <p class="story-banner__subtitle">{{ $t('mainTitles.aboutUsTitle') }}</p>
          </template>
          <template #main>
            <div class="section__main">
              <p class="section__text section__text--width">{{ $t('mainSubtitles.mainTitleSubtitle') }}</p>
            </div>
          </template>
          <template #footer>
            <div class="social">
              <div class="socials__wrapper">
                <div class="socials__item socials__item--border">
                  <a href="" class="socials__link">
                    <span class="socials__icon icon icon-instagram"></span>
                  </a>
                </div>
                <div class="socials__item socials__item--border">
                  <a href="" class="socials__link">
                    <span class="socials__icon icon icon-pinterest"></span>
                  </a>
                </div>
                <div class="socials__item socials__item--border">
                  <a href="" class="socials__link">
                    <span class="socials__icon icon icon-facebook"></span>
                  </a>
                </div>
                <div class="socials__item socials__item--border">
                  <a href="" class="socials__link">
                    <span class="socials__icon icon icon-twitter"></span>
                  </a>
                </div>
                <div class="socials__item socials__item--border">
                  <a href="" class="socials__link">
                    <span class="socials__icon icon icon-telegram"></span>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </title-poster>
      </div>
      <div class="story-banner__img">
        <category-banner :banner="{
     imgUrl: require('@/assets/img/about_us/abou_us_banner.jpg'),
   }">
        </category-banner>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBanner from "@/components/generals/BannerComponent";
import TitlePoster from "@/components/generals/TitlePoster";

export default {
  name: "OurStoryBanner",
  components: {TitlePoster, CategoryBanner},
}
</script>

<style lang="scss" scoped>

.story-banner {
  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__subtitle {
    font-family: 'Papyrus', sans-serif;
    margin-bottom: 24px;

    font-size: 38px;
  }
}



</style>