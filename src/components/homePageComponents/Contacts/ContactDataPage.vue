<template>
 <div class="contact-data section">
   <div class=" section__content section__content--row">
     <div class="contact-data__block">
       <div class="contact-data__header">
         <h3 class="section__title section__title--small">{{ $t('pages.home.main.titles.phoneTitle')}}</h3>
       </div>
       <div class="contact-data__main">
         <div class="contact-data__item">
           <a href="tel:+46719205261" class="contact-data__link">+46719205261</a>
         </div>
         <div class="contact-data__item">
           <a href="tel:+380993931881" class="contact-data__link">+380993931881</a>
         </div>
       </div>
     </div>
     <div class="contact-data__block">
       <div class="contact-data__header">
         <h3 class="section__title section__title--small">{{ $t('pages.home.main.titles.addressTitle')}}</h3>
       </div>
       <div class="contact-data__main">
         <div class="contact-data__item">
           <p class="contact-data__hours section__subtitle">{{ $t('pages.home.main.text.workingHoursText')}}</p>
         </div>
         <div class="contact-data__item">
           <a href="https://www.google.com/maps/place/Vasagatan+17,+111+20+Stockholm/@59.3333807,18.0538869,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d60d7e6ef6b:0x55a2385c6d5531d1!8m2!3d59.333378!4d18.0564618!16s%2Fg%2F11c1zlgbw8?entry=ttu" class="contact-data__link contact-data__link--address">{{ $t('pages.home.main.text.addressText')}}</a>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'ContactDataPage',
}
</script>

<style lang="scss" scoped>
.contact-data {
  flex-grow: 1;
  &__block {
    border-left: 1px solid black;

    display: flex;
    flex-direction: column;
  }

  &__header {
    padding: 16px 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid black;
  }

  &__main {
    padding: 24px;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  &__item {
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 4px;

    font-weight: 600;
    letter-spacing: 0.4px;
    &:before{
      content: '\e904';
      font-family: 'icomoon';
    }
    &--address{
      &:before{
        content: '\e920';
      }

      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }

  &__hours {
    @media (max-width: 1024px) {
      font-size: 13px;
    }
  }
}
</style>