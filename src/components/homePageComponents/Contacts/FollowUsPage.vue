<template>
<div class="follow-us-page section">
  <div class="follow-us-page__wrapper">
    <div class="section__img">
      <img src="@/assets/img/home/flower_shop_img.jpg" alt="Our shop">
    </div>
    <div class="section__content section__content--row">
      <div class="follow-us-page__item">
        <h3 class="section__title section__title--small">{{ $t('pages.home.main.titles.followUsTitle')}}</h3>
      </div>
      <div class="follow-us-page__item socials">
        <div class="socials__wrapper">
          <div class="socials__item">
            <a href="" class="socials__link">
              <span class="socials__icon icon icon-instagram"></span>
            </a>
          </div>
          <div class="socials__item">
            <a href="" class="socials__link">
              <span class="socials__icon icon icon-pinterest"></span>
            </a>
          </div>
          <div class="socials__item">
            <a href="" class="socials__link">
              <span class="socials__icon icon icon-facebook"></span>
            </a>
          </div>
          <div class="socials__item">
            <a href="" class="socials__link">
              <span class="socials__icon icon icon-twitter"></span>
            </a>
          </div>
          <div class="socials__item">
            <a href="" class="socials__link">
              <span class="socials__icon icon icon-telegram"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FollowUsPage"
}
</script>

<style lang="scss" scoped>
.follow-us-page {

  border-left: 1px solid #121212;
  position: relative;

  display: flex;
  flex-direction: column;

  &__wrapper {

  }
  &__block {
  }

  &__item {
    padding: 40px 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
      padding: 25px 10px;
    }
    @media (max-width: 991px) {
      border-left: 1px solid #121212;
      border-bottom: 1px solid #121212;
    }
  }
}
</style>