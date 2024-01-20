<template>
<cart-form-item>
  <template #form-header>
    <div class="cart-form-item__header cart-form-item__header--row">
      <div class="cart-form-item__block cart-form-item__block--row">
        <div class="cart-form-item__item">
          <h5 class="cart-form-item__title cart-form-item__title--grey">{{ $t('pages.cart.cartTitles.contactInformation') }}</h5>
        </div>
        <div class="cart-form-item__item">
          <router-link :to="{ name: 'CartInfo' }">
            <div class="cart-form-item__icon icon icon-pen"></div>
          </router-link>
        </div>
      </div>
      <div class="cart-form-item__block cart-form-item__block--row">
        <div class="cart-form-item__item">
          <h5 class="cart-form-item__title cart-form-item__title--grey">{{ $t('pages.cart.cartTitles.shippingDetails') }}</h5>
        </div>
        <div class="cart-form-item__item">
          <router-link :to="{ name: 'CartShipping' }">
            <div class="cart-form-item__icon icon icon-pen"></div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  <template #form-main>
    <div class="cart-form-item__main form-main">
      <div class="form-main__wrapper">
        <div class="form-main__block">
          <h5 class="section__text">{{ $t('pages.cart.cartTitles.payment') }}</h5>
        </div>
        <div class="form-main__block">
          <div class="form-main__item">
            <input type="text" :placeholder=" $t('pages.cart.placeholder.cardNumber') " class="form-main__input">
          </div>
          <div class="form-main__item form-main__item--row">
            <input type="text" :placeholder=" $t('pages.cart.placeholder.MMYY') " class="form-main__input">
            <input type="text" :placeholder=" $t('pages.cart.placeholder.cvv') " class="form-main__input">
          </div>
        </div>
        <div class="form-main__block">
          <button class="button">{{ $t('buttons.makeAPurchase') }}</button>
        </div>
      </div>
    </div>
  </template>
</cart-form-item>
</template>

<script>

import CartFormItem from "@/components/cartPageComponents/CartFormItem";
export default {
  name: "PaymentView",
  components: { CartFormItem }
};
</script>

<style scoped>

</style>