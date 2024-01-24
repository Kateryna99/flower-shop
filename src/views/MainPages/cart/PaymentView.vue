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
            <input v-model="userInfo.cardNumber" maxlength="19" type="text" :placeholder=" $t('pages.cart.placeholder.cardNumber') " class="input">
          </div>
          <div class="form-main__item form-main__item--row">
            <input v-model="userInfo.mmyy" maxlength="5" type="text" :placeholder=" $t('pages.cart.placeholder.MMYY') " class="input">
            <input v-model="userInfo.cvv" maxlength="3" type="text" :placeholder=" $t('pages.cart.placeholder.cvv') " class="input">
          </div>
        </div>
        <div class="form-main__block">
          <button class="button" :disabled="!isInputEmpty" :class="{'button--disabled':!isInputEmpty}" @click.prevent="makePurchase">{{ $t('buttons.makeAPurchase') }}</button>
        </div>
      </div>
    </div>
  </template>
</cart-form-item>
  <teleport to="body">
    <pop-up v-if="popUpShow">
      <template #text>
        <p class="section__text">{{ $t('extra.texts.thankYouText') }}</p>
      </template>
    </pop-up>
  </teleport>
</template>

<script>
import { mapState,mapActions } from "pinia";
import { useCartStore } from "@/store/modules/cart";
import CartFormItem from "@/components/cartPageComponents/CartFormItem";
import PopUp from "@/components/generals/Pop-up.vue";
export default {
  name: "PaymentView",
  components: { CartFormItem,PopUp },
  data() {
    return {
      userInfo:{},
      popUpShow: false,
    }
  },
  computed:{
    ...mapState(useCartStore,['getUserInfo']),

    isInputEmpty() {
      return this.userInfo.cardNumber && this.userInfo.mmyy && this.userInfo.cvv
    }
  },
  methods:{
    ...mapActions(useCartStore,['setUserInfo']),

    makePurchase(){
      this.popUpShow = true

      setTimeout(() => {
        this.popUpShow = false;
      }, 4000)
    },
    closePopupOnClick(event) {
      if (event.target.classList.contains('pop-up')) {
        this.popUpShow = false;
      }
    }
  },
  watch: {
    'userInfo.cardNumber'(newValue) {
      const strippedNumber = newValue.replace(/\D/g, "");

      const formattedNumber = strippedNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

      this.userInfo = { ...this.userInfo, cardNumber: formattedNumber };

      this.setUserInfo('cardNumber',newValue)
    },
    'userInfo.mmyy'(newValue) {
      const strippedNumber = newValue.replace(/\D/g, "");

      const formattedNumber = strippedNumber.replace(/(\d{2})(?=\d)/g, "$1/");

      this.userInfo = { ...this.userInfo, mmyy: formattedNumber };

      this.setUserInfo('mmyy',newValue)
    },
    'userInfo.cvv'(newValue) {
      const strippedNumber = newValue.replace(/\D/g, "");

      this.userInfo = { ...this.userInfo, cvv: strippedNumber };

      this.setUserInfo('cvv',newValue)
    }
  },
  created() {
    document.addEventListener('click', this.closePopupOnClick);

    if(this.getUserInfo){
      this.userInfo = this.getUserInfo
    }
  }
};
</script>

<style scoped>

</style>