<template>
<div class="banner-block section section__block">
  <div class="banner-block__wrapper section__wrapper">
    <div class="banner-block__block">
      <div class="banner-block__item">
        <h1 class="banner-block__title">{{ $t('mainTitles.title')}}</h1>
      </div>
      <div class="banner-block__item">
        <p class="section__text">{{ $t('mainSubtitles.mainTitleSubtitle')}}</p>
      </div>
    </div>
    <div class="section__content section__content--row">
      <div class="banner-block__item banner-block__item--padding-right">
        <div class="banner-block__img">
          <img src="@/assets/img/home/banner_img.jpg" alt="Banner">
        </div>
      </div>
      <div class="banner-block__item banner-block__item--padding-left">
        <p class="banner-block__text">{{ $t('pages.home.main.text.bannerText')}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "HomeBanner",
}

</script>

<style lang="scss" scoped>
.banner-block {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;

    //height: 100%;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding-bottom: 54px;
    border-bottom: 1px solid #121212;
  }

  &__item {
    &--padding-right {
      padding-right: 24px;
      position: relative;

      &:after {
        content: '';

        position: absolute;
        top: 0;
        right: 0;

        height: 100%;
        width: 1px;
        background-color: #121212;
      }
    }

    &--padding-left {
      padding-left: 24px;

      display: flex;
      justify-content: flex-start;
      align-items: end;
    }
  }

  &__title {
    font-size: 67px;
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 52px;
    }
  }

  &__img {
    max-width: 100%;
    width: 100%;

    overflow: hidden;

    img{
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }
  }

  &__text {
    font-size: 14px;
  }
}
</style>