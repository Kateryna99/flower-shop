<template>
  <main-master-page>
    <category-page-container/>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";
import CategoryPageContainer from "@/components/categoryPageComponents/CategoryPageContainer";


export default {
  name: "CategoryPage",
  components: {CategoryPageContainer, MainMasterPage},

}
</script>



<style lang="scss" scoped>

</style>
