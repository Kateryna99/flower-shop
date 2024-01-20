<template>
  <div class="product-card section section--border">
    <router-link :to="{
      name: 'ProductPage',
      params: {
        productId: productObj.id,
        productSubtitle: productObj.subtitle
      }
    }">
    <div class="product-card__wrapper" :style="{backgroundImage: 'url(' + productObj.imgSrc + ')'}">
      <div class="product-card__content">
        <div class="product-card__item">
          <h5 class="product-card__title">{{ productObj.title[getCurrentLanguage] }}</h5>
        </div>
        <div class="product-card__item">
          <p class="product-card__price">{{productObj.price}}$</p>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default{
  name:"ProductCard",
  props:{
    productObj:{
      type:Object,
      required:true
    }
  },
  computed:{
    getCurrentLanguage(){
      return this.$i18n.locale === 'en' ? 'en' : 'ua';
    }
  }

}

</script>

<style lang="scss" scoped>
.product-card {
  cursor: pointer;
  overflow: hidden;
  border-left: 1px solid #121212;
  &__wrapper {
    padding: 24px;
    min-height: 360px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;



    display: flex;
    justify-content: center;
    align-items: end;

    transition: all 0.3s ease-in-out;

  }

  &__content {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 4px;
  }

  &__item {
  }

  &__title {
    font-weight: 500;
  }

  &__price {
    font-size: 14px;
    font-weight: 500;

    color: grey;
  }

  &:hover {
    .product-card__wrapper {
      transform: scale(1.1);
    }
  }
}
</style>