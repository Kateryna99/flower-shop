<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__wrapper">
        <div class="header__container">
          <nav class="nav nav-menu">
            <div class="nav-menu__wrapper">
              <div class="nav-menu__block">
                <div class="nav-menu__item nav-menu__item--right">
                  <router-link v-if="getCurrentRouteName==='home'" class="nav__link" to="/shop">
                    <div class="nav__text nav__text--up">{{ $t('menu.shop') }}</div>
                    <div class="nav__text nav__text--down">{{ $t('menu.shop') }}</div>
                  </router-link>
                  <router-link v-else class="nav__link" to="/">
                    <div class="nav__text nav__text--up">{{ $t('menu.home') }}</div>
                    <div class="nav__text nav__text--down">{{ $t('menu.home') }}</div>
                  </router-link>
                </div>
                <div v-if="getCurrentRouteName==='home'" class="nav-menu__item nav-menu__item--right">
                  <a href="#" class="nav__link" @click.prevent="setScrollToCodeBlock('contacts')">
                    <div class="nav__text nav__text--up">{{ $t('menu.contact') }}</div>
                    <div class="nav__text nav__text--down">{{ $t('menu.contact') }}</div>
                  </a>
                </div>
              </div>
              <div class="nav-menu__block">
                  <div class="nav-menu__language">
                    <div v-if="getCurrentLanguage==='en'" class="nav-menu__flag" @click="changeLanguage('ua')">
                      <img src="@/assets/img/home/english_flag.png" alt="" class="nav-menu__img">
                      <p  class="nav-menu__text">EN</p>
                    </div>
                    <div v-else class="nav-menu__flag" @click="changeLanguage('en')">
                      <img src="@/assets/img/home/ukraine_flag.svg" alt="" class="nav-menu__img">
                      <p class="nav-menu__text">UA</p>
                    </div>
                  </div>
                <div class="nav-menu__item nav-menu__item--left">
                  <router-link class="nav__link" to="/">
                    <div class="nav__text nav__text--up">{{ $t('menu.signIn') }}</div>
                    <div class="nav__text nav__text--down">{{ $t('menu.signIn') }}</div>
                  </router-link>
                </div>
                <div class="nav-menu__item nav-menu__item--left">
                  <router-link class="nav__link" to="/cart">
                    <div class="nav__text nav__text--up">{{ $t('menu.cart') }}</div>
                    <div class="nav__text nav__text--down">{{ $t('menu.cart') }}</div>
                  </router-link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <main class="page">
      <slot></slot>
    </main>
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__container">
          <div class="footer__content nav">
            <form class="footer__block footer-form">
              <div class="footer-form__header">
                <p class="footer-form__text">{{ $t('footer.footerText') }}</p>
              </div>
              <div class="footer-form__main">
                <input v-model="userEmail" type="email" :placeholder="$t('footer.placeholder')" class="footer-form__input">
              </div>
              <div class="footer-form__footer">
                <button class="button" :class="{'button--disabled':!isInputEmpty}" :disabled="!isInputEmpty" @click.prevent="showPopUp">{{ $t('buttons.remind') }}</button>
              </div>
            </form>
            <div class="footer__block">
              <div class="footer__item">
                <h4 class="footer__title">{{ $t('menu.contact') }}</h4>
              </div>
              <div class="footer__item footer__item--column">
                <!--{{ $t('pages.homePageComponents.main.titles.generalEnquiry') }}-->
                <h5 class="footer__title footer__title--small">{{ $t('pages.home.main.titles.addressTitle') }}</h5>
                <a href="https://www.google.com/maps/place/Vasagatan+17,+111+20+Stockholm/@59.3333807,18.0538869,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d60d7e6ef6b:0x55a2385c6d5531d1!8m2!3d59.333378!4d18.0564618!16s%2Fg%2F11c1zlgbw8?entry=ttu"
                   class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('pages.home.main.text.addressText') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('pages.home.main.text.addressText') }}</div>
                </a>
              </div>
              <div class="footer__item footer__item--column">
                <h5 class="footer__title footer__title--small">{{ $t('pages.home.main.titles.phoneTitle') }}</h5>
                <a href="tel:+46729105261" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('pages.home.main.titles.phoneTitle') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('pages.home.main.titles.phoneTitle') }}</div>
                </a>
              </div>
              <div class="footer__item footer__item--column">
                <h5 class="footer__title footer__title--small">{{ $t('pages.home.main.titles.generalEnquiry') }}</h5>
                <a href="mailto:katya.stelmakhova@gmail.com" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('pages.home.main.titles.generalEnquiry') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('pages.home.main.titles.generalEnquiry') }}</div>
                </a>
              </div>
              <div class="footer__item footer__item--gap">
                <h4 class="footer__title">{{ $t('pages.home.main.titles.followUsTitle') }}</h4>
                <div class="socials">
                  <div class="socials__wrapper">
                    <div class="socials__item">
                      <a href="" class="socials__link">
                        <span class="socials__icon icon icon-instagram"></span>
                      </a>
                    </div>
                    <div class="socials__item">
                      <a href="" class="socials__link">
                        <span class="socials__icon icon icon-pinterest"></span>
                      </a>
                    </div>
                    <div class="socials__item">
                      <a href="" class="socials__link">
                        <span class="socials__icon icon icon-facebook"></span>
                      </a>
                    </div>
                    <div class="socials__item">
                      <a href="" class="socials__link">
                        <span class="socials__icon icon icon-twitter"></span>
                      </a>
                    </div>
                    <div class="socials__item">
                      <a href="" class="socials__link">
                        <span class="socials__icon icon icon-telegram"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer__block">
              <div class="footer__item">
                <h4 class="footer__title">{{ $t('menu.shop') }}</h4>
              </div>
              <div class="footer__item footer__item--column">
                <router-link to="/shop" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('categories.allProducts') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('categories.allProducts') }}</div>
                </router-link>
                <router-link :to="{
                  name:'CategoryPage',
                  params:{
                    category:'fresh-flower'
                  }
                }" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('categories.freshFlowers') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('categories.freshFlowers') }}</div>
                </router-link>
                <router-link :to="{
                  name:'CategoryPage',
                  params:{
                    category:'dried-flower'
                  }
                   }" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('categories.driedFlowers') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('categories.driedFlowers') }}</div>
                </router-link>
                <router-link :to="{
                  name:'CategoryPage',
                  params:{
                    category:'live-plant'
                  }
                   }"  class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('categories.livePlants') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('categories.livePlants') }}</div>
                </router-link>
                <router-link :to="{
                  name:'CategoryPage',
                  params:{
                    category:'aroma-candle'
                  }
                   }"  class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('categories.aromaCandles') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('categories.aromaCandles') }}</div>
                </router-link>
                <router-link :to="{
                  name:'CategoryPage',
                  params:{
                    category:'fresheners'
                  }
                   }"  class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('categories.fresheners') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('categories.fresheners') }}</div>
                </router-link>
              </div>
              <div class="footer__item">
                <h4 class="footer__title">{{ $t('mainTitles.service') }}</h4>
              </div>
              <div class="footer__item footer__item--column"><!--{{ $t('mainTitles.ourStory')  blog}}-->
                <router-link to="/flower-subscription" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('mainTitles.flowerSubscription') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('mainTitles.flowerSubscription') }}</div>
                </router-link>
                <a href="#" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('mainTitles.eventAndWedding') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('mainTitles.eventAndWedding') }}</div>
                </a>
              </div>
            </div>
            <div class="footer__block">
              <div class="footer__item">
                <h4 class="footer__title">{{ $t('mainTitles.aboutUsTitle') }}</h4>
              </div>
              <div class="footer__item footer__item--column"><!---->
                <router-link to="/our-story" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('mainTitles.ourStory') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('mainTitles.ourStory') }}</div>
                </router-link>
                <a href="#" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('mainTitles.blog') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('mainTitles.blog') }}</div>
                </a>
              </div>
              <div class="footer__item footer__item--column">
                <a href="#" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('footer.footerTitles.shipping') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('footer.footerTitles.shipping') }}</div>
                </a>
                <a href="#" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('footer.footerTitles.termsAndConditions') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('footer.footerTitles.termsAndConditions') }}</div>
                </a>
                <a href="#" class="nav__link">
                  <div class="nav__text nav__text--up">{{ $t('footer.footerTitles.privacyPolicy') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('footer.footerTitles.privacyPolicy') }}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <teleport to="body">
      <pop-up v-if="popUpShow">
        <template #text>
          <p class="section__text">{{ $t('extra.texts.thankYouText') }}</p>
        </template>
      </pop-up>
    </teleport>
  </div>
</template>

<script>
import {useHomeStore} from "@/store/modules/general.js";
import PopUp from "@/components/generals/Pop-up.vue";
import {mapActions} from "pinia";

export default {
  name: "MainMasterPage",
  components: {
    PopUp
  },
  data() {
    return {
      userEmail:null,
      popUpShow: false
    }
  },
  computed: {
    getCurrentRouteName() {
      return this.$route.name;
    },
    isInputEmpty() {
      return this.userEmail
    },
    getCurrentLanguage() {
      return this.$i18n.locale
    }
  },
  methods: {
    ...mapActions(useHomeStore, ['setScrollToCodeBlock']),

    showPopUp() {
      this.popUpShow = true;

      setTimeout(() => {
        this.popUpShow = false;
      }, 4000)
    },
    closePopupOnClick(event) {
      if (event.target.classList.contains('pop-up')) {
        this.popUpShow = false;
      }
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang
    }
  },
  created() {
    document.addEventListener('click', this.closePopupOnClick);
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  max-width: 100%;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;

  & > .page {
    flex-grow: 1;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  width: 100%;
  height: 83px;


  &__wrapper {

    background-color: #FFFFFF;
    border: 1px solid #121212;
    position: relative;
  }

  &__container {
    padding: 0;
  }
}

.nav {
  &__link {
    height: 20px;
    overflow: hidden;


    &:hover {
      .nav__text--up {
        transform: translateY(-20px);
      }

      .nav__text--down {
        transform: translateY(-20px);
        color: #808080;
      }
    }
  }

  &__text {
    transition: transform 0.2s ease;
    font-weight: 500;
  }
}

.nav-menu {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__block {
    display: flex;
    align-items: center;

    max-width: 360px;
    width: 100%;


    position: relative;
  }

  &__item {
    max-width: 100%;
    width: 100%;
    padding: 32px 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;

      height: 100%;
      width: 1px;
      background-color: #121212;
    }

    &--right {
      &:before {
        right: 0;
      }
    }

    &--left {
      &:before {
        left: 0;
      }
    }
  }

  &__language {
    cursor: pointer;

    position: absolute;
    left: -100px;
    top: calc(50% - 15px);
  }
  &__flag{
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &__img{
    width: 30px;
    height: 30px;
  }
}

.page {
}

.footer {
  &__wrapper {
    border: 1px solid #121212;
  }

  &__container {
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: auto;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 24px;

    padding: 40px;

    &:not(:last-child) {
      border-right: 1px solid #121212;
    }
  }

  &__item {
    &--column {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &--gap {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  &__title {
    font-size: 21px;
    font-weight: 500;
    color: #808080;
    text-transform: capitalize;

    &--small {
      font-size: 14px;
      font-weight: 400;
    }
  }

}

.footer-form {
  &__header {
  }

  &__text {
    line-height: 1.4;
  }

  &__main {
  }

  &__input {
    border: 1px solid #808080;
    padding: 16px;
  }

  &__footer {
  }
}

.button {
}


</style>