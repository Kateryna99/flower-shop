<template>
  <settings-master-page>
    <div class="login-page">
      <div class="login-page__wrapper">
        <div class="login-page__container">
          <div class="login-page__content">
            <div class="login-page__header">
              <h2 class="login-page__title">{{ $t("login.login") }}</h2>
            </div>
            <div class="login-page__main">
              <div v-if="getLoginMessage" class="login-page__block">
                <p class="login-page__text">{{getLoginMessage}}</p>
              </div>
              <div class="login-page__block login-page__block--center">
                <button class="login-page__button" @click="login">{{ $t("login.enterWithGoogle")
                  }}
                </button>
              </div>
              <div class="login-page__block">
                <div class="login-page__item">
                  <label class="login-page__label">{{ $t("login.name") }}</label>
                </div>
                <div class="login-page__item">
                  <input type="text" class="input">
                </div>
              </div>
              <div class="login-page__block">
                <div class="login-page__item">
                  <label class="login-page__label">{{ $t("login.password") }}</label>
                </div>
                <div class="login-page__item">
                  <input type="password" class="input">
                </div>
              </div>
            </div>
            <div class="login-page__footer">
              <div class="button button">{{ $t("login.enter") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </settings-master-page>
</template>

<script>
import { useAuthStore } from "@/store/auth.js";
import { mapActions,mapState } from "pinia";
import SettingsMasterPage from "@/masterPages/SettingsMasterPage";

export default {
  name: "LoginPage",
  components: { SettingsMasterPage},
  computed: {
    ...mapState(useAuthStore,['getUser']),

    getLoginMessage() {
      return this.$route.params.message
    }
  },
  methods: {
    ...mapActions(useAuthStore, ["loginWithGoogle"]),


    async login() {
      try{
        await this.loginWithGoogle()
        this.$router.push({
          name: 'home',
        })
      }
      catch(error){
        console.log(error)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  &__wrapper {
    padding-top: 83px;
    height: 100vh;
    background-color: #F5F5F7;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__container {
    max-width: 600px;
    width: 100%;

    margin: 0 auto;
  }

  &__content {
    padding: 40px;
    border: 1px solid #121212;

    display: flex;
    flex-direction: column;
    gap: 30px;

    background-color: #FFFFFF;
  }

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
  }

  &__title {
    font-size: 38px;
    font-weight: 500;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &--center {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    gap: 8px;

    border: 1px solid #FF3355;
    border-radius: 4px;
    padding: 10px;

    //color: #F4416B;
    color: #34A853;
    font-weight: 500;

    &:before {
      content: "\e90c";
      font-family: 'icomoon';
      color: #4285f4;
    }
  }

  &__item {
  }

  &__label {
  }

  &__footer {
  }
}
</style>