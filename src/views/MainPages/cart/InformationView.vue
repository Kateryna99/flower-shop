<template>
<cart-form-item>
  <template #form-main>
      <div class="cart-form-item__main form-main">
        <div class="form-main__wrapper">
          <div class="form-main__block">
            <h5 class="section__text">{{ $t('pages.cart.cartTitles.contactInformation') }}</h5>
          </div>
          <div class="form-main__block">
            <div class="form-main__item">
              <input type="text" :placeholder="$t('pages.cart.placeholder.name')" class="form-main__input">
            </div>
            <div class="form-main__item">
              <input type="text" :placeholder="$t('pages.cart.placeholder.email')" class="form-main__input">
            </div>
            <div class="form-main__item">
              <input type="text" :placeholder="$t('pages.cart.placeholder.phone')" class="form-main__input">
            </div>
          </div>
          <div class="form-main__block">
            <router-link :to="{
            name: 'CartShipping',
          }">
              <button class="button">{{ $t('buttons.continue') }}</button>
            </router-link>
          </div>
        </div>
      </div>
  </template>
  <template #form-footer>
    <div class="cart-form-item__footer">
      <div class="cart-form-item__block">
        <h5 class="cart-form-item__title">2.{{ $t('pages.cart.cartTitles.shippingDetails') }}</h5>
      </div>
      <div class="cart-form-item__block">
        <h5 class="cart-form-item__title">3.{{ $t('pages.cart.cartTitles.payment') }}</h5>
      </div>
    </div>
  </template>
</cart-form-item>
</template>

<script>


import CartFormItem from "@/components/cartPageComponents/CartFormItem";
export default {
  name: "InformationView",
  components: { CartFormItem },
};
</script>

<style scoped>

</style>