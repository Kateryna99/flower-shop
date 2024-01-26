<template>
  <div class="flower-subscription section">
    <div class="section__content section--border section__content--top">
      <div class="flower-subscription__content">
        <banner-component :banner="{
          imgUrl: require('@/assets/img/flower_subscription/banner.jpg'),
        }" class="section__block"></banner-component>
      </div>
      <div class="flower-subscription__content">
        <title-poster :title="$t('mainTitles.flowerSubscription')">
          <template #main>
            <div class="flower-subscription__main section__main">
              <div class="flower-subscription__block">
                <div class="flower-subscription__item">
                  <p class="flower-subscription__title">
                    {{ $t("pages.flowerSubscription.subscriptionSubtitles.forYourself") }}</p>
                </div>
                <div class="flower-subscription__item">
                  <p class="flower-subscription__text">
                    {{ $t("pages.flowerSubscription.subscriptionTexts.forYourselfText") }}</p>
                </div>
              </div>
              <div class="flower-subscription__block">
                <div class="flower-subscription__item">
                  <p class="flower-subscription__title">
                    {{ $t("pages.flowerSubscription.subscriptionSubtitles.asAGift") }}</p>
                </div>
                <div class="flower-subscription__item">
                  <p class="flower-subscription__text">{{ $t("pages.flowerSubscription.subscriptionTexts.asAGiftText")
                    }}</p>
                </div>
              </div>
              <div class="flower-subscription__block">
                <div class="flower-subscription__item">
                  <p class="flower-subscription__title">
                    {{ $t("pages.flowerSubscription.subscriptionSubtitles.forBusiness") }}</p>
                </div>
                <div class="flower-subscription__item">
                  <p class="flower-subscription__text">
                    {{ $t("pages.flowerSubscription.subscriptionTexts.forBusinessText") }}</p>
                </div>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="section__footer">
              <button class="button button--secondary" @click.prevent="setScrollToCodeBlock('subscription-plans')">{{ $t("buttons.explore") }}</button>
            </div>
          </template>
        </title-poster>
      </div>
    </div>
    <div class="section__content section--border">
      <div class="section__sticky">
        <title-poster :title="$t('pages.flowerSubscription.subscriptionTitles.howDoesItWork')"
                      class="flower-subscription__border section__block" />
      </div>
      <div class="flower-subscription__blocks">
        <title-poster :title="$t('pages.flowerSubscription.subscriptionTitles.choosePlan')" class="title-block--small">
          <template #main>
            <div class="section__main">
              <p class="flower-subscription__text">{{ $t("pages.flowerSubscription.subscriptionTexts.planText") }}</p>
            </div>
          </template>
        </title-poster>
        <title-poster :title="$t('pages.flowerSubscription.subscriptionTitles.frequencyAndDuration')"
                      class="title-block--small">
          <template #main>
            <div class="section__main">
              <p class="flower-subscription__text">
                {{ $t("pages.flowerSubscription.subscriptionTexts.frequencyAndDurationText") }}</p>
            </div>
          </template>
        </title-poster>
        <title-poster :title="$t('pages.flowerSubscription.subscriptionTitles.payOnce')" class="title-block--small">
          <template #main>
            <div class="section__main">
              <p class="flower-subscription__text">{{ $t("pages.flowerSubscription.subscriptionTexts.payOnceText")
                }}</p>
            </div>
          </template>
        </title-poster>
      </div>
    </div>
    <div class="section--border section__content" id="subscription-plans">
      <form class="section__wrapper section__wrapper--small form">
        <div class="section__header">
          <p class="section__subtitle">
            {{ $t("pages.flowerSubscription.subscriptionSubtitles.buildYourSubscription") }}</p>
          <h3 class="section__title section__title--small">
            {{ $t("pages.flowerSubscription.subscriptionTitles.planSelection") }}</h3>
        </div>
        <div class="section__main section__main--small">
          <p class="flower-subscription__text flower-subscription__text--none">
            {{ $t("pages.flowerSubscription.subscriptionTexts.planText") }}</p>
        </div>
        <div :class="{'flower-subscription--disabled': !selecting.firstStep}"
             class="flower-subscription__step flower-subscription__step--first">
          <selecting-card v-for="item in getSubscriptionOptionsList" :key="item.id" :selecting-obj="item" @select="selectStep"/>
        </div>
        <div :class="{'flower-subscription--disabled': !selecting.secondStep}"
             class="flower-subscription__step flower-subscription__step--second">
          <div class="form__block">
            <h3 class="form__title">{{ $t("pages.flowerSubscription.subscriptionTitles.howOftenYouWantDelivery") }}</h3>
            <p class="form__subtitle">{{ $t("pages.flowerSubscription.subscriptionTexts.howOftenYouWantDeliveryText")
              }}</p>
          </div>
          <div class="form__block form__block--row form__block--row--padding">
            <button class="button button--secondary" @click.prevent="selectStep({
            step: 'secondStep',
            nextStep:'thirdStep',
            value: 'monthly',
            type: 'frequency',
            })">{{ $t("pages.flowerSubscription.subscriptionButtons.monthly") }}
            </button>
            <button class="button button--secondary" @click.prevent="selectStep({
            step: 'secondStep',
            nextStep:'thirdStep',
            value: 'bi-weekly',
            type: 'frequency',
            })">{{ $t("pages.flowerSubscription.subscriptionButtons.biweekly") }}
            </button>
            <button class="button button--secondary" @click.prevent="selectStep({
            step: 'secondStep',
            nextStep:'thirdStep',
            value: 'weekly',
            type: 'frequency',
            })">{{ $t("pages.flowerSubscription.subscriptionButtons.weekly") }}
            </button>
          </div>
        </div>
        <div :class="{'flower-subscription--disabled': !selecting.thirdStep}" class="flower-subscription__step flower-subscription__step--third">
          <div class="form__block">
            <h3 class="form__title">{{ $t("pages.flowerSubscription.subscriptionTitles.howManyYouWantDelivery") }}</h3>
            <p class="form__subtitle">{{ $t("pages.flowerSubscription.subscriptionTexts.howManyYouWantDeliveryText") }}</p>
          </div>
          <div class="form__block quantity">
              <div class="quantity__block">
                <div class="quantity__item">
                  <button class="quantity__button icon icon-cheveron-down" :disabled="!isInputCorrect" @click.prevent="decreaseQuantity"></button>
                </div>
                <div class="quantity__item">
                  <input v-model="deliveryQuantity" readonly type="text" value="1" class="quantity__input">
                </div>
                <div class="quantity__item">
                  <button class="quantity__button icon icon-cheveron-up" @click.prevent="increaseQuantity"></button>
                </div>
              </div>
          </div>
          <div class="form__block">
            <button class="button" @click.prevent="sendToCartPage">{{ $t('buttons.addToBasket') }}</button>
          </div>
        </div>
      </form>
      <div class="section__sticky">
        <banner-component :banner="{
          imgUrl: require('@/assets/img/home/girl_with_flowers.jpg'),
        }" class="section__block" />
      </div>
    </div>
    <div class="subscription-FAQ">
      <div class="section__wrapper subscription-FAQ__wrapper">
        <div class="subscription-FAQ__content">
          <div class="subscription-FAQ__header">
            <h2 class="section__title section__title--normal section__title--center">{{ $t('pages.flowerSubscription.subscriptionTitles.subscriptionFAQ') }}</h2>
          </div>
          <div class="subscription-FAQ__main">
            <FAQItem v-for="item in getFAQList" :key="item.id" :info-obj="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComponent from "@/components/generals/BannerComponent";
import TitlePoster from "@/components/generals/TitlePoster";
import SelectingCard from "@/components/flowerSubscription/SelectingCard";
import { useSubscriptionOptionsStore } from "@/store/modules/subscriptions";
import { useCartStore } from "@/store/modules/cart";
import {useAuthStore} from "@/store/auth";
import {useHomeStore} from "@/store/modules/general";
import FAQItem from "@/components/flowerSubscription/FAQ/FAQItem";
import { mapActions, mapState } from "pinia";


export default {
  name: "FlowerSubscriptionContainer",
  components: {FAQItem,  SelectingCard, TitlePoster, BannerComponent },
  data() {
    return {
      selecting: {
        firstStep: true,
        secondStep: false,
        thirdStep: false,
      },
      subscription:{
      },
      deliveryQuantity: 1,
    };
  },
  computed: {
    ...mapState(useSubscriptionOptionsStore, ["getSubscriptionOptionsList",'getFAQList']),
    ...mapState(useAuthStore, ["getUser"]),

    isInputCorrect() {
      return this.deliveryQuantity > 1
    },
  },
  methods: {
    ...mapActions(useSubscriptionOptionsStore, ["loadList"]),
    ...mapActions(useCartStore, ["addItem"]),
    ...mapActions(useHomeStore, ["setScrollToCodeBlock"]),

    increaseQuantity() {
      this.deliveryQuantity++;
    },
    decreaseQuantity() {
      this.deliveryQuantity--;
    },
    selectStep({step,nextStep, type,value}){
      this.subscription[type] = value;

      this.selecting[step] = false;
      this.selecting[nextStep] = true;
    },
    sendToCartPage() {

      console.log(this.subscription)
      this.addItem({
        productQuantity: this.deliveryQuantity,
        frequency: this.subscription.frequency,
        productId: this.subscription.subscriptionType.id
      });

      if(this.getUser){
        this.$router.push({
          name: "CartPage",
        });
      }else{
        this.$router.push({
          name: "LoginPage",
          params:{
            message: this.$i18n.t('login.message')
          }
        })
      }


    }

  },
  mounted() {
    this.loadList();
  }
};
</script>

<style lang="scss" scoped>
.flower-subscription {
  &__content {
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
  }

  &__item {
  }

  &__step {
    display: flex;
    flex-direction: column;
    gap: 24px;

    border-bottom: 1px solid #bebbbb;

    &:not(:last-child) {
      padding-bottom: 40px;
    }

    &:not(:first-child) {
      padding-top: 40px;
    }
  }

  &__title {
    text-align: start;
    font-weight: 500;
  }

  &__text {
    text-align: start;

    display: flex;
    align-items: start;
    gap: 10px;
    position: relative;


    padding-left: 20px;

    &:before {
      content: "";

      position: absolute;
      top: 10px;
      left: 5px;

      width: 5px;
      height: 5px;

      border: 1px solid #121212;
      border-radius: 50%;

      background-color: #121212;
    }

    &--none {
      padding: 0;

      &:before {
        display: none;
      }
    }
  }

  &--disabled {
    pointer-events: none;
    opacity: 0.3;
  }
}

.form {
  &__block {
    &--row {
      display: flex;

      &--padding {
         gap: 16px;
      }
    }
  }


  &__title {
    font-size: 28px;
    line-height: 1.2;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__subtitle {
  }

}

.subscription-FAQ {
  &__wrapper {
    background-color: #F5F5F7;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px) {
      justify-content: stretch;
      align-items: stretch;
    }
  }

  &__content {
    padding: 80px;
    border: 1px solid #121212;

    display: flex;
    flex-direction: column;
    gap: 40px;

    background-color: #FFFFFF;

    max-width: 60vw;
    width: 100%;

    //margin: 0 auto;


    @media (max-width: 1024px) {
      padding: 40px;
      gap: 20px;
    }
    @media (max-width: 991px) {
      max-width: 100vw;
    }
  }

  &__header {
  }

  &__main {
  }
}


</style>