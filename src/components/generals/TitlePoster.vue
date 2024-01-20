<template>
  <div class="title-block section section--border">
    <div class="section__wrapper">
      <div class="title-block__header">
        <slot name="subtitle"></slot>
        <h2 class="section__title">{{title}}</h2>
      </div>
        <slot name="main"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>


export default {
  name: "TitlePoster",
  props:{
    title:{
      type: String
    }
  },
}
</script>

<style lang="scss" scoped>

</style>