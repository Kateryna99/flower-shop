<template>
  <div class="wedding-event-page section">
    <div class="wedding-event-page__wrapper">
      <div class="wedding-event-page__content">
        <title-poster :title="$t('mainTitles.eventAndWedding')" class="title-block--center">
          <template #subtitle>
            <p class="section__subtitle section__subtitle--center">{{ $t('mainTitles.service') }}</p>
          </template>
          <template #main>
            <div class="section__main">
              <p class="wedding-event-page__text section__text">{{ $t('pages.home.main.text.eventAndWeddingText') }}</p>
            </div>
          </template>
          <template #footer>
            <div class="section__footer">
              <button class="button button--tertiary">{{ $t('buttons.inquire') }}</button>
            </div>
          </template>
        </title-poster>
      </div>
    </div>
  </div>
</template>

<script>

import TitlePoster from "@/components/generals/TitlePoster.vue";

export default {
  name: "WeddingEventDecorPage",
  components: {TitlePoster}
}
</script>

<style lang="scss" scoped>

.wedding-event-page {
  &__wrapper {
    padding: 80px;

    height: 100vh;

    background-image: url("@/assets/img/home/wedding_event.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    color: #FFFFFF;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  &__content {
  }

  &__text {
    max-width: 650px;
    width: 100%;
  }
}

</style>