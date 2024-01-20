<template>
  <main-master-page>
    <banner-page/>
    <company-info />
    <contacts-page />
    <service-page />
  </main-master-page>
</template>

<script >
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import CompanyInfo from "@/components/homePageComponents/CompanyInfo/CompanyInfo.vue";
import BannerPage from "@/components/homePageComponents/Banner/BannerPage.vue";
import ContactsPage from "@/components/homePageComponents/Contacts/ContactsPage.vue";
import ServicePage from "@/components/homePageComponents/services/ServicePage.vue";


export default {
  name: "HomePage",
  components: {MainMasterPage, CompanyInfo, BannerPage, ContactsPage, ServicePage},

}


</script>

<style lang="scss" scoped>

</style>
