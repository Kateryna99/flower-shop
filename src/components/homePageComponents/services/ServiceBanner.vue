<template>
   <div class="section section--border">
     <div class="section__content">
       <banner-component :banner="{
         imgUrl:require('@/assets/img/home/girl_with_flowers.jpg'),
       }"/>
       <div class="section__sticky">
         <title-poster :title="$t('mainTitles.flowerSubscription')" class="title-block--centre section__block section__title--center">
           <template #subtitle>
             <p class="section__subtitle section__subtitle--center">{{$t('mainTitles.service')}}</p>
           </template>
           <template #main>
             <div class="section__main">
               <p class="section__text">{{$t('pages.home.main.text.flowerSubscriptionText')}}</p>
             </div>
           </template>
           <template #footer>
             <div class="section__footer">
               <router-link to="/flower-subscription">
                 <button class="button button--secondary">{{ $t('buttons.subscribe')}}</button>
               </router-link>
             </div>
           </template>
         </title-poster>
       </div>
       </div>
     </div>
<!--   </div>-->
</template>

<script >

import TitlePoster from "@/components/generals/TitlePoster.vue";
import BannerComponent from "@/components/generals/BannerComponent";

export default {
  name: "ServiceBanner",
  components: { BannerComponent, TitlePoster}

}
</script>

<style scoped>

</style>