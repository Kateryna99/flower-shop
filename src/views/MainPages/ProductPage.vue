<template>
  <main-master-page>
    <product-page-card :product="getItemById(getCurrentProductId)" />
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";
import { mapState, mapActions } from "pinia";
import { useProductsStore } from "@/store/modules/products";
import ProductPageCard from "@/components/productPageComponents/ProductPageCard";

export default {
  name: "ProductPage",
  components: {ProductPageCard,  MainMasterPage },
  computed: {
    ...mapState(useProductsStore, ["getItemById"]),
    getCurrentProductId() {
      return this.$route.params.productId;
    }
  },
  methods: {
    ...mapActions(useProductsStore, ["loadList"])
  },
  created() {
    this.loadList();
  }

};
</script>

<style scoped>

</style>