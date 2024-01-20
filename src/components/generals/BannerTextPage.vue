<template>
  <div class="category-card section section--border">
    <div class="category-card__wrapper section__content">
      <div class="category-card__banner">
        <div class="category-card__block">
          <div class="category-card__item">
            <h3 class="category-card__title">{{ categoryObj.title }}</h3>
          </div>
          <div class="category-card__item category-card__item--bottom">
            <slot name="text">
              <router-link :to="{
              name: 'CategoryPage',
        params: {
          category: categoryObj.category
        }
            }">
                <button class="category-card__button">{{ $t('buttons.shopNow') }}</button>
              </router-link>
            </slot>
          </div>
        </div>
      </div>
      <slot name="image">
        <router-link :to="{
        name: 'CategoryPage',
        params: {
          category: categoryObj.category
        }
      }" class="category-card__link">
          <div class="category-card__img">
            <img :src="categoryObj.imgUrl" :alt="categoryObj.category">
          </div>
        </router-link>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerTextPage",
  props: {
    categoryObj: {
      type: Object,
      required: true
    }
  }
}

</script>

<style lang="scss" scoped>


.icon-arrow-thin-right {
}
</style>