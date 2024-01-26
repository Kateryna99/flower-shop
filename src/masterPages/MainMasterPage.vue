<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__wrapper">
        <div class="header__container">
          <nav class="nav nav-menu" :class="{'nav-menu--active':menuShow}">
            <div  class="nav-menu__wrapper" :class="{'nav-menu__wrapper--active':menuShow}">
              <div  class="nav-menu__item nav-menu__block-none">
                <span class="nav-menu__icon icon-close" @click="closeMenu"></span>
              </div>
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
                    <div class="nav-menu__flag" @click="changeLanguage()">
                      <img :src="getCurrentLanguageFlag" alt="" class="nav-menu__img">
                      <p v-if="getCurrentLanguage==='en'"  class="nav-menu__text">EN</p>
                      <p v-else class="nav-menu__text__text">UA</p>
                    </div>
                  </div>
                <div class="nav-menu__item nav-menu__item--left">
                  <router-link v-if="!getUser"  class="nav__link" to="/login">
                    <div class="nav__text nav__text--up">{{ $t('menu.signIn') }}</div>
                    <div class="nav__text nav__text--down">{{ $t('menu.signIn') }}</div>
                  </router-link>
                  <a v-else href="#" class="nav__link" @click="logoutUser">
                    <div class="nav__text nav__text--up">{{ $t('menu.signOut') }}</div>
                    <div class="nav__text nav__text--down">{{ $t('menu.signOut') }}</div>
                  </a>
                </div>
                <div class="nav-menu__item nav-menu__item--left">
                  <router-link class="nav__link" to="/cart">
                    <div class="nav__text nav__text--up">{{ $t('menu.cart') }}</div>
                    <div class="nav__text nav__text--down">{{ $t('menu.cart') }}</div>
                  </router-link>
                </div>
              </div>
              <div class="nav-menu__block-none nav-menu__item">
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
          </nav>
          <div class="burger nav-menu__block-none" @click="openBurgerMenu">
            <div class="burger__wrapper">
              <div class="burger__item"></div>
              <div class="burger__item"></div>
              <div class="burger__item"></div>
            </div>
          </div>
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
                <input v-model="userEmail" type="email" :placeholder="$t('footer.placeholder')" class="input">
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
                  <div class="socials__wrapper socials__wrapper--start">
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
import {mapState,mapActions} from "pinia";
import {useAuthStore} from "@/store/auth";
import PopUp from "@/components/generals/Pop-up.vue";

export default {
  name: "MainMasterPage",
  components: {
    PopUp
  },
  data() {
    return {
      userEmail:null,
      popUpShow: false,
      menuShow: false
    }
  },
  computed: {
    ...mapState(useAuthStore,['getUser']),

    getCurrentRouteName() {
      return this.$route.name;
    },
    isInputEmpty() {
      return this.userEmail
    },
    getCurrentLanguage() {
      return this.$i18n.locale
    },
    getCurrentLanguageFlag() {
      return this.getCurrentLanguage === 'en'
        ? require('@/assets/img/home/english_flag.png')
        : require('@/assets/img/home/ukraine_flag.svg');
    },
  },
  methods: {
    ...mapActions(useHomeStore, ['setScrollToCodeBlock']),
    ...mapActions(useAuthStore, ['logout']),

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
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ua' : 'en';

      if (localStorage.getItem('currentLang') !== this.$i18n.locale) {
        localStorage.setItem('currentLang', this.$i18n.locale);
      }
    },
    async logoutUser() {
      await this.logout()
      window.location.reload()
    },
    openBurgerMenu() {
      this.menuShow = true
    },
    closeMenu(){
      this.menuShow = false
    },
    closeMenuOnClick(event){
      if (event.target.classList.contains('nav-menu')) {
        this.closeMenu()
      }
    }
  },
  created() {
    document.addEventListener('click', (event)=>{
      this.closePopupOnClick(event)
      this.closeMenuOnClick(event)
    });

    if(localStorage.getItem('currentLang')){
      this.$i18n.locale = localStorage.getItem('currentLang');
    }
  }
}

</script>

<style lang="scss" scoped>


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

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 570px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));

    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 24px;

    padding: 40px;

    &:not(:last-child) {
      border-right: 1px solid #121212;
    }

    @media (max-width: 991px) {
      border-bottom: 1px solid #121212;
    }
    @media (max-width: 768px) {
      padding: 40px 15px;

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

  &__footer {
  }
}

.button {
}


</style>