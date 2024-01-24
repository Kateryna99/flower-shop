<template>
<div class="wrapper">
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container">
        <nav class="nav nav-menu">
          <div class="nav-menu__wrapper nav-menu__wrapper--right">
<!--            <div class="nav-menu__block">
              <div class="nav-menu__item nav-menu__item&#45;&#45;right">
                <router-link v-if="getCurrentRouteName==='home'" class="nav__link" to="/shop">
                  <div class="nav__text nav__text&#45;&#45;up">{{ $t('menu.shop') }}</div>
                  <div class="nav__text nav__text&#45;&#45;down">{{ $t('menu.shop') }}</div>
                </router-link>
                <router-link v-else class="nav__link" to="/">
                  <div class="nav__text nav__text&#45;&#45;up">{{ $t('menu.home') }}</div>
                  <div class="nav__text nav__text&#45;&#45;down">{{ $t('menu.home') }}</div>
                </router-link>
              </div>
              <div v-if="getCurrentRouteName==='home'" class="nav-menu__item nav-menu__item&#45;&#45;right">
                <a href="#" class="nav__link" @click.prevent="setScrollToCodeBlock('contacts')">
                  <div class="nav__text nav__text&#45;&#45;up">{{ $t('menu.contact') }}</div>
                  <div class="nav__text nav__text&#45;&#45;down">{{ $t('menu.contact') }}</div>
                </a>
              </div>
            </div>-->
            <div class="nav-menu__block">
              <div class="nav-menu__language">
                <div class="nav-menu__flag" @click="changeLanguage()">
                  <img :src="getCurrentLanguageFlag" alt="" class="nav-menu__img">
                  <p v-if="getCurrentLanguage==='en'"  class="nav-menu__text">EN</p>
                  <p v-else class="nav-menu__text__text">UA</p>
                </div>
              </div>
              <div class="nav-menu__item nav-menu__item--left">
                <router-link class="nav__link" to="/">
                  <div class="nav__text nav__text--up">{{ $t('menu.home') }}</div>
                  <div class="nav__text nav__text--down">{{ $t('menu.home') }}</div>
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
</div>
</template>

<script>
export default {
  name: "SettingsMasterPage",
  computed: {
    getCurrentLanguageFlag() {
      return this.getCurrentLanguage === 'en'
        ? require('@/assets/img/home/english_flag.png')
        : require('@/assets/img/home/ukraine_flag.svg');
    },
    getCurrentLanguage() {
      return this.$i18n.locale
    },
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ua' : 'en';

      if (localStorage.getItem('currentLang') !== this.$i18n.locale) {
        localStorage.setItem('currentLang', this.$i18n.locale);
      }
    },
  },
    created() {
      if(localStorage.getItem('currentLang')){
        this.$i18n.locale = localStorage.getItem('currentLang');
      }
    }
};
</script>

<style scoped>

</style>