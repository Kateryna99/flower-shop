<template>
  <div class="FAQ-item">
    <div class="FAQ-item__wrapper" :class="{'FAQ-item__wrapper--active': isClicked}" @click="changeClass">
      <div class="FAQ-item__block">
        <div class="FAQ-item__component">
          <h3 class="FAQ-item__title">{{infoObj.title[getCurrentLanguage]}}</h3>
        </div>
        <div class="FAQ-item__component">
          <div class="FAQ-item__icon"></div>
        </div>
      </div>
      <div class="FAQ-item__answer">
        <p class="FAQ-item__text">{{infoObj.answer[getCurrentLanguage]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQItem",
  props: {
    infoObj: {
      type: Object
    }
  },
  data() {
    return {
      isClicked: false
    };
  },
  computed: {
    getCurrentLanguage() {
      return this.$i18n.locale === "en" ? "en" : "ua";
    }
  },
  methods: {
    changeClass() {
      this.isClicked = !this.isClicked
    }
  }
};
</script>

<style lang="scss" scoped>
.FAQ-item {
  &__wrapper {
    padding: 24px 0;
    border-bottom: 1px solid #121212;

    cursor: pointer;

    &--active {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .FAQ-item__answer {
        height: auto;
        opacity: 1;
      }

      .FAQ-item__icon {
        &:before {
          content: "\e906";
        }
      }
    }
  }

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__answer {
    height: 0;
    overflow: hidden;
    opacity: 0;

    transition: all .3s ease-in-out;
  }

  &__component {
  }

  &__title {
    font-size: 28px;
  }

  &__icon {


    &:before {
      content: "\e905";
      font-family: 'icomoon';
    }
  }

  &__text {
  }
}
</style>