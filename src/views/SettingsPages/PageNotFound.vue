<template>
  <settings-master-page>
    <div class="page-not-found">
      <div class="page-not-found__wrapper">
          <div v-for="index in getRandomNumber(10,60)" :key="index" class="page-not-found__icon icon icon-bug" :style="{
            position: 'absolute',
            top: getRandomNumber(0, 100) + '%',
            left: getRandomNumber(0, 100) + '%',
            fontSize: getRandomNumber(10, 30) + 'px',
            animationDuration: getRandomNumber(2, 5) + 's',
            color: getRandomColor()
          }"></div>
        <div class="page-not-found__block">
          <h3 class="page-not-found__title">{{ $t("extra.texts.pageNotFound") }}</h3>
        </div>
      </div>
    </div>
  </settings-master-page>
</template>

<script>
import SettingsMasterPage from "@/masterPages/SettingsMasterPage";

export default {
  name: "PageNotFound",
  components: { SettingsMasterPage },
  methods: {
    getRandomNumber(max, min) {
      return min + Math.floor(Math.random()*(max - min + 1));
    },
    getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}
  }
};
</script>

<style lang="scss" scoped>
.page-not-found {
  min-height: 100vh;
  width: 100%;
  &__wrapper {
    min-height: 100vh;
   padding-top: 83px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    overflow: hidden;
  }

  &__icon {
    z-index: 2;
    animation: bugMove infinite linear forwards;
    @keyframes bugMove {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  &__block {
  }

  &__title {
    position: relative;
    z-index: 3;

    font-family: Algerian, sans-serif;
    font-size: 38px;
    font-weight: 500;
  }
}
</style>