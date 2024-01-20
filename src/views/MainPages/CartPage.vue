<template>
<main-master-page>
  <cart-page-container/>
</main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";
import CartPageContainer from "@/components/cartPageComponents/CartPageContainer";
export default {
  name: "CartPage",
  components: { CartPageContainer, MainMasterPage }
};
</script>

<style scoped>

</style>