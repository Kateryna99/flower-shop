<template>
<div class="category-banner section">
  <div class="category-banner__wrapper" :style="{backgroundImage:'url(' + banner.imgUrl + ')'}">
    <div class="category-banner__content">
      <div class="category-banner__block">
        <slot>
          <h2 class="category-banner__title section__title section__title--big">{{banner.title}}</h2>
        </slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "BannerComponent",
  props:{
    banner:{
      type:Object
    }
  }
}
</script>

<style lang="scss" scoped>
.category-banner {
  &__wrapper {
    height: 100vh;
    position: relative;

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      background-color: rgba(0, 0, 0, .3);
    }

    @media (max-width: 991px) {
      border-bottom: 1px solid #121212;

      height: 50vh;
    }
  }

  &__content {
  }

  &__block {
  }

  &__title {
    position: relative;
    z-index: 2;

    color: #FFFFFF;
  }
}
</style>