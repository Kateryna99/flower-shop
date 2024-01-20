<template>
  <div class="cart-form section">
    <div class="cart-form__wrapper">
      <div class="cart-form__header">
        <div class="cart-form__item">
            <h4 class="cart-form__title" :class="{'cart-form__title--chosen':getCurrentChildRouteName==='CartInfo'}">
              {{ $t("pages.cart.cartTitles.information") }}</h4>
        </div>
        <div class="cart-form__item">
            <h4 class="cart-form__title"
                :class="{'cart-form__title--chosen':getCurrentChildRouteName==='CartShipping'}">
              {{ $t("pages.cart.cartTitles.shipping") }}</h4>
        </div>
        <div class="cart-form__item">
            <h4 class="cart-form__title" :class="{'cart-form__title--chosen':getCurrentChildRouteName==='CartPayment'}">
              {{ $t("pages.cart.cartTitles.payment") }}</h4>
        </div>
      </div>
      <div class="cart-form__main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "CartForm",
  components: {},
  computed: {
    getCurrentChildRouteName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-form {
  &__wrapper {
    padding: 40px 80px;

    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__item {
  }

  &__title {
    font-size: 14px;
    line-height: 1.2;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 8px;

    &--chosen {
      font-weight: 500;
    }

    &:after {
      content: '\e902';
     font-family: 'icomoon';
    }
  }

  &__main {
  }
}
</style>