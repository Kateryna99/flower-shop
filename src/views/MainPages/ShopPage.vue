<template>
<main-master-page>
<shop-page-component/>
</main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import ShopPageComponent from "@/components/shopPageComponents/ShopPageComponent.vue";

export default {
  name: "ShopPage",
  components: {MainMasterPage, ShopPageComponent}
}

</script>

<style scoped>

</style>