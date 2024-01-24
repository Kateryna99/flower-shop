<template>
  <cart-form-item>
    <template #form-main>
      <div class="cart-form-item__main form-main">
        <div class="form-main__wrapper">
          <div class="form-main__block">
            <h5 class="section__text">{{ $t("pages.cart.cartTitles.contactInformation") }}</h5>
          </div>
          <div class="form-main__block">
            <div class="form-main__item">
              <input v-model="userInfo.name" type="text" :placeholder="$t('pages.cart.placeholder.name')" class="input">
            </div>
            <div class="form-main__item">
              <input v-model="userInfo.email" type="email" :placeholder="$t('pages.cart.placeholder.email')" class="input">
            </div>
            <div class="form-main__item">
              <input v-model="userInfo.number" maxlength="16" pattern="+46 \d{2} \d{2} \d{2} \d{3}" type="text" :placeholder="$t('pages.cart.placeholder.phone')" class="input" @click="handleInputClick">
            </div>
          </div>
          <div class="form-main__block">
            <router-link :to="{
            name: 'CartShipping',
          }">
              <button class="button" :disabled="!isInputEmpty" :class="{'button--disabled':!isInputEmpty}">{{ $t("buttons.continue") }}</button>
            </router-link>
          </div>
        </div>
      </div>
    </template>
    <template #form-footer>
      <div class="cart-form-item__footer">
        <div class="cart-form-item__block">
          <h5 class="cart-form-item__title">2.{{ $t("pages.cart.cartTitles.shippingDetails") }}</h5>
        </div>
        <div class="cart-form-item__block">
          <h5 class="cart-form-item__title">3.{{ $t("pages.cart.cartTitles.payment") }}</h5>
        </div>
      </div>
    </template>
  </cart-form-item>
</template>

<script>
import {mapState,mapActions} from "pinia";
import {useCartStore} from "@/store/modules/cart";
import CartFormItem from "@/components/cartPageComponents/CartFormItem";

export default {
  name: "InformationView",
  components: { CartFormItem },
  data() {
    return {
      userInfo:{},
    };
  },
  computed: {
    ...mapState(useCartStore, ["getUserInfo"]),

    isInputEmpty() {
      return this.userInfo.number && this.userInfo.email && this.userInfo.name;
    }
  },
  methods: {
    ...mapActions(useCartStore, ["setUserInfo"]),


    handleInputClick() {
      this.userInfo.number = '+46 ';
    }
  },
  watch: {
    'userInfo.number'(newValue) {
      const strippedNumber = newValue.replace(/\D/g, "");
      const formattedNumber = strippedNumber.replace(/(\d{2})(?=\d)/g, "$1 ");

      if (strippedNumber.startsWith("46")) {
        this.userInfo = { ...this.userInfo, number: "+" + formattedNumber };
      } else {
        this.userInfo = { ...this.userInfo, number: formattedNumber };
      }
      this.setUserInfo('number', newValue);
    },
    'userInfo.email'(newValue) {
      this.setUserInfo('email', newValue);
    },
    'userInfo.name'(newValue) {
      const formattedName = newValue.charAt(0).toUpperCase() + newValue.slice(1);

      this.userInfo = { ...this.userInfo, name: formattedName };

      this.setUserInfo('name', formattedName);
    }
  },
  created() {
    if(this.getUserInfo){
      this.userInfo = this.getUserInfo
    }
  }
}
;
</script>

<style scoped>

</style>