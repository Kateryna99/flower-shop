<template>
<main-master-page>
  <flower-subscription-container/>
</main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";
import FlowerSubscriptionContainer from "@/components/flowerSubscription/FlowerSubscriptionContainer";
export default {
  name: "FlowerSubscriptionPage",
  components: { FlowerSubscriptionContainer, MainMasterPage }
}
</script>

<style scoped>

</style>