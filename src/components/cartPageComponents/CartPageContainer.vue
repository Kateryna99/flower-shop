<template>
  <div class="cart-page section">
    <div class="section__content section__content--top">
      <div class="cart-page__block">
        <cart-form/>
      </div>
      <div class="cart-page__block">
        <cart-products-info/>
      </div>
    </div>
  </div>
</template>

<script>
import CartForm from "@/components/cartPageComponents/CartForm";
import CartProductsInfo from "@/components/cartPageComponents/CartProductsInfo";

export default {
  name: "CartPageContainer",
  components: { CartProductsInfo, CartForm},
};
</script>

<style lang="scss" scoped>
.wrapper-a{
  padding: 100px;
}
</style>