<template>
<div class="service-page section">
  <div class="service-page__wrapper">
      <title-poster :title="$t('pages.home.main.titles.serviceTitle')" class="title-block--center"/>
      <service-banner/>
    <wedding-event-decor-page/>
  </div>
</div>
</template>

<script>

import TitlePoster from "@/components/generals/TitlePoster.vue";
import ServiceBanner from "@/components/homePageComponents/services/ServiceBanner.vue";
import WeddingEventDecorPage from "@/components/homePageComponents/services/WeddingEventDecorPage.vue";

export default {
  name: "ServicePage",
  components: {TitlePoster, ServiceBanner, WeddingEventDecorPage}
}
</script>

<style scoped>

</style>