<template>
  <div class="pop-up">
    <div class="pop-up__wrapper">
      <div class="pop-up__content">
        <div class="pop-up__block">
             <slot name="title"><h2 class="section__title">{{ $t('extra.titles.thankYou')}}</h2></slot>
        </div>
        <div class="pop-up__block">
            <slot name="text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pop-up"
}
</script>

<style scoped>

</style>