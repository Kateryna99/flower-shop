<template>
<cart-form-item>
  <template #form-header>
    <div class="cart-form-item__header">
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
    </div>
  </template>
  <template #form-main>
    <div class="cart-form-item__main form-main">
      <div class="form-main__wrapper">
        <div class="form-main__block">
          <h5 class="section__text">{{ $t('pages.cart.cartTitles.shippingDetails') }}</h5>
        </div>
        <div class="form-main__block">
          <div class="form-main__item">
            <input v-model="userInfo.recipientName" type="text" :placeholder="$t('pages.cart.placeholder.recipientName')" class="input">
          </div>
          <div class="form-main__item">
            <input v-model="userInfo.recipientPhone" maxlength="16" pattern="+46 \d{2} \d{2} \d{2} \d{3}" type="text" :placeholder="$t('pages.cart.placeholder.recipientPhone')" class="input" @click="handleInputClick">
          </div>
          <div class="form-main__item form-main__item--row">
            <input v-model="userInfo.recipientStreet" type="text" :placeholder="$t('pages.cart.placeholder.street')" class="input">
            <input v-model="userInfo.recipientApartment" type="text" :placeholder="$t('pages.cart.placeholder.apartment')" class="input">
          </div>
        </div>
        <div class="form-main__block">
          <router-link :to="{
            name: 'CartPayment',
          }">
            <button class="button" :disabled="!isInputEmpty" :class="{'button--disabled':!isInputEmpty}">{{ $t('buttons.continue') }}</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  <template #form-footer>
    <div class="cart-form-item__footer">
      <div class="cart-form-item__block">
        <h5 class="cart-form-item__title">3.{{ $t('pages.cart.cartTitles.payment') }}</h5>
      </div>
    </div>
  </template>
</cart-form-item>
</template>

<script>

import CartFormItem from "@/components/cartPageComponents/CartFormItem";
import { mapState,mapActions } from "pinia";
import { useCartStore } from "@/store/modules/cart";
export default {
  name: "ShippingView",
  components: { CartFormItem, },
  data() {
    return {
      userInfo: {},
    }
  },
  computed: {
    ...mapState(useCartStore, ["getUserInfo"]),

    isInputEmpty() {
      return this.userInfo.recipientName && this.userInfo.recipientPhone && this.userInfo.recipientStreet && this.userInfo.recipientApartment;
    }
  },
  methods: {
    ...mapActions(useCartStore, ["setUserInfo"]),

    handleInputClick() {
      this.userInfo.number = '+46 ';
    }
  },
  watch:{
    'userInfo.recipientName'(newValue){
      const formattedName = newValue.charAt(0).toUpperCase() + newValue.slice(1);

      this.userInfo = { ...this.userInfo, recipientName: formattedName };

      this.setUserInfo('recipientName', formattedName);
    },
    'userInfo.recipientPhone'(newValue){
      const strippedNumber = newValue.replace(/\D/g, "");
      const formattedNumber = strippedNumber.replace(/(\d{2})(?=\d)/g, "$1 ");

      if (strippedNumber.startsWith("46")) {
        this.userInfo = { ...this.userInfo, recipientPhone: "+" + formattedNumber };
      } else {
        this.userInfo = { ...this.userInfo, recipientPhone: formattedNumber };
      }
      this.setUserInfo('recipientPhone', newValue);
    },
    'userInfo.recipientStreet'(newValue){
      this.setUserInfo('recipientStreet', newValue);
    },
    'userInfo.recipientApartment'(newValue){
      this.setUserInfo('recipientApartment', newValue);
    }
  },
  created() {
    if(this.getUserInfo){
      this.userInfo = this.getUserInfo
    }
  },
};
</script>

<style scoped>

</style>