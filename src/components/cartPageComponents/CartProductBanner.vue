<template>
<div class="cart-product-banner section">
  <div class="cart-product-banner__wrapper">
    <div class="cart-product-banner__img">
      <img :src="product.imgSrc" :alt="product.title[getCurrentLanguage]">
    </div>
    <div class="cart-product-banner__block">
      <div class="cart-product-banner__item cart-product-banner__item--column">
        <h5 class="section__text">{{product.title[getCurrentLanguage]}}</h5>
        <p class="cart-product-banner__text">{{ $t('pages.product.productOptions.quantity') }} ({{product.productQuantity}})</p>
        <p v-if="product.frequency" class="cart-product-banner__text">{{ $t('pages.cart.cartTitles.frequency') }}: {{product.frequency}}</p>
      </div>
      <div class="cart-product-banner__item">
        <p class="section__text">{{product.price}}$</p>
      </div>
    </div>
    <div class="cart-product-banner__icon icon icon-close" @click="deleteCartItem(product.id)"></div>
  </div>
</div>
</template>

<script>
import {mapState } from "pinia";
import {useCartStore} from "@/store/modules/cart";

export default {
  name: "CartProductBanner",
  props:{
    product:{
      type: Object
    }
  },
  computed: {
    ...mapState(useCartStore, ['getCartList']),
    getCurrentLanguage() {
      return this.$i18n.locale==='en' ? 'en' : 'ua'
    }
  },
  methods:{
    deleteCartItem(id){
      this.$emit('deleteCartItem',id)
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-product-banner {
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 16px;

    padding-bottom: 16px;
    border-bottom: 1px solid #b4afaf;

    position: relative;
  }

  &__img {
    border: 1px solid #121212;

    max-width: 160px;
    width: 100%;
    height: 160px;

    img{
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }
  }

  &__block {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__item {
    &--column {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
  &__icon{
    position: absolute;
    right: 0;
    top: 0;

    cursor: pointer;
  }
}
</style>