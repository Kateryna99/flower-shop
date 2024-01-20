<template>
  <div class="order-summary section">
    <div class="order-summary__wrapper">
      <div class="order-summary__header">
        <h5 class="section__subtitle">{{ $t("pages.cart.cartTitles.orderSummary") }}</h5>
      </div>
      <div class="order-summary__main">
        <div class="order-summary__block">
          <cart-product-banner v-for="item in combinedList" :key="item.id" :product="item" />
        </div>
        <div class="order-summary__block order-total">
          <div class="order-total__wrapper">
            <div class="order-total__block">
              <div class="order-total__item">
                <p class="order-total__text">{{ $t("pages.cart.cartText.discount") }}</p>
              </div>
              <div class="order-total__item order-total__item--row">
                <input v-model="giftCode" type="text" :placeholder="$t('pages.cart.placeholder.giftCard')" class="order-total__input">
                <button class="button" :class="{'button--disabled':isInputCorrect}" :disabled="isInputCorrect" @click="applyDiscount">{{ $t("buttons.apply") }}</button>
              </div>
            </div>
            <div class="order-total__block order-total__block--padding">
              <div class="order-total__item">
                <p class="order-total__text">{{ $t("pages.cart.cartTitles.subtotal") }}</p>
                <p class="order-total__text">${{ totalPrice }}</p>
              </div>
              <div class="order-total__item">
                <p class="order-total__text">{{ $t("pages.cart.cartTitles.shipping") }}</p>
                <p class="order-total__text">Free</p>
              </div>
            </div>
            <div class="order-total__block">
              <div class="order-total__item">
                <p class="order-total__text">{{ $t("pages.cart.cartTitles.total") }}</p>
                <p class="order-total__text">${{ totalPrice }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-summary__footer">
        <p class="order-summary__text">{{ $t("pages.cart.cartTitles.secureCheckout") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/store/modules/cart";
import { useProductsStore } from "@/store/modules/products";
import { useSubscriptionOptionsStore } from "@/store/modules/subscriptions";
import CartProductBanner from "@/components/cartPageComponents/CartProductBanner";

export default {
  name: "CartProductsInfo",
  components: { CartProductBanner },
  data() {
    return {
      combinedList: [],
      totalPrice: 0,
      giftCode: null,
    };
  },
  computed: {
    ...mapState(useCartStore, ["getCartList"]),
    ...mapState(useProductsStore, ["getProductsList"]),
    ...mapState(useSubscriptionOptionsStore, ["getSubscriptionOptionsList"]),


    isInputCorrect() {
      return this.giftCode;
    },

  },
  methods: {
    ...mapActions(useCartStore, { loadCartList: "loadList" }),
    ...mapActions(useProductsStore, { loadBouquetsList: "loadList" }),
    ...mapActions(useSubscriptionOptionsStore, { loadSubscriptionOptionsList: "loadList" }),


    getFilteredList(productArray, cartList) {

      const filteredList = [];

      for (let item of productArray) {
        for (let component of cartList) {
          if (component.productId === item.id) {
            filteredList.push(item);
          }
        }
      }

      return filteredList;
    },
    async loadData() {
      try {
        await this.loadCartList();
        await this.loadBouquetsList();
        await this.loadSubscriptionOptionsList();

        const bouquetsData = this.getProductsList;
        const subscriptionOptionsData = this.getSubscriptionOptionsList;
        const cartList = this.getCartList;

        const bouquetsList = this.getFilteredList(bouquetsData, cartList);
        const subscriptionOptionsList = this.getFilteredList(subscriptionOptionsData, cartList);

        this.combinedList = bouquetsList.concat(subscriptionOptionsList);

        this.combinedList.forEach(item => {
          const cartItem = cartList.find(cartItem => cartItem.productId === item.id);
          item.productQuantity = cartItem ? cartItem.productQuantity : 0;

          if ("frequency" in cartItem) {
            item.frequency = cartItem.frequency;
          }
        });
        this.totalPrice = this.combinedList.reduce((total, item) => total + (item.price * item.productQuantity), 0);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    },

    applyDiscount() {
      this.totalPrice -= 10;
    }
  },
  mounted() {
    this.loadData();
  }
};


</script>

<style lang="scss" scoped>
.order-summary {
  height: 100%;
  border-left: 1px solid #121212;

  &__wrapper {
    padding: 40px 80px;

    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__header {
  }

  &__main {
    flex-grow: 1;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__footer {
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 5px;

    &:after {
      content: "\e912";
      font-family: 'icomoon';
    }
  }

}

.order-total {
  &__wrapper {
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 16px;

    margin-top: 24px;


   &:not(:last-child) {
     border-bottom: 1px solid #afacac;
     padding-bottom: 24px;
   }
    &--padding {
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    gap: 16px;

    &--row {

    }
  }

  &__text {
  }

  &__input {
    padding: 16px;
    border: 1px solid #D2D2D7;
  }

  &__item {
  }
}


</style>