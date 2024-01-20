<template>
<div class="selecting-card section">
  <div class="selecting-card__wrapper">
    <div class="section__content">
        <div class="selecting-card__img">
          <img :src="selectingObj.imgSrc" alt="">
        </div>
      <div class="selecting-card__block">
        <div class="selecting-card__item">
          <p class="section__text">{{selectingObj.title[getCurrentLanguage]}}</p>
        </div>
        <div class="selecting-card__item list">
          <ul class="list__wrapper">
            <li v-for="item in selectingObj.features" :key="item" class="list__item">{{item[getCurrentLanguage]}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="selecting-card__footer">
      <button class="button" @click.prevent="select">{{ $t('buttons.select') }}</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "SelectingCard",
  props:{
    selectingObj: {
      type: Object
    }
  },
  computed:{
    getCurrentLanguage(){
      return this.$i18n.locale==='en' ? 'en' : 'ua'
    }
  },
  methods:{
    select(){
      this.$emit('select', {
        step: 'firstStep',
        nextStep: 'secondStep',
        type: 'subscriptionType',
        value: this.selectingObj
      })


    }
  }
};
</script>

<style lang="scss" scoped>
.selecting-card {
  &__wrapper {
    border: 1px solid #bebbbb;

  }

  &__block {
    padding: 16px;
    border-left: 1px solid #bebbbb;

    display: flex;
    flex-direction: column;
    gap: 16px;

  }

  &__img {
    width: 100%;
    height: 100%;

    overflow: hidden;
    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;

      transition: all 0.3s ease;

    }
  }

  &__item {
  }

  &__footer {
  }

  &:hover{

    img{
      transform: scale(1.2);
    }

  }
}


.list {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__item {
    padding-left: 10px;

    display: flex;
    align-items: center;
    gap: 10px;


    &:before {
      content: "";
      width: 5px;
      height: 5px;

      border-radius: 50%;
      border: 1px solid #121212;
      background-color: #121212;
    }
  }
}


</style>