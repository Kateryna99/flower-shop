<template>
<div class="product-page section">
  <div class="section__content section__content--top">
    <div class="section__img">
    <img :src="product.subImgUrl" :alt="product.title[getCurrentLanguage]">
    </div>
    <form class="product-page__block form">
      <div class="product-page__body">
        <div class="form__block">
          <h3 class="section__title section__title--small">{{product.title[getCurrentLanguage]}} - ${{product.price}}</h3>
        </div>
        <div class="form__block form__block--column">
          <p v-if="product.type" class="product-page__type">{{product.type}}</p>
          <p class="product-page__text">{{product.description[getCurrentLanguage]}}</p>
        </div>
        <div class="form__block quantity">
          <div class="quantity__wrapper">
            <div class="form__block">
              <label class="quantity__label">{{ $t('pages.product.productOptions.quantity')}}</label>
            </div>
            <div class="quantity__block">
              <div class="quantity__item">
                <button class="quantity__button icon icon-cheveron-down" :disabled="!isInputCorrect" @click.prevent="decreaseQuantity"></button>
              </div>
              <div class="quantity__item">
                <input v-model="selectedProduct.productQuantity" readonly type="number" value="1" class="quantity__input">
              </div>
              <div class="quantity__item">
                <button class="quantity__button icon icon-cheveron-up" @click.prevent="increaseQuantity"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="options">
          <div class="options__wrapper">
            <div class="options__block">
              <p class="section__text">{{ $t('pages.product.productOptions.price.priceTitle')}}</p>
            </div>
            <div class="options__block">
              <div class="options__item">
                <input v-model="selectedProduct.price" type="radio" id="full-price" :value="product.price" name="price-option" class="options__input" required>
              </div>
              <div class="options__item">
                <label for="full-price" class="options__label">{{ $t('pages.product.productOptions.price.fullPrice')}}{{product.price}}</label>
              </div>
            </div>
            <div class="options__block">
              <div class="options__item">
                <input v-model="selectedProduct.price" type="radio" id="sale-price" :value="product.price-((25*100)/product.price)" name="price-option" class="options__input" required>
              </div>
              <div class="options__item">
                <label for="sale-price" class="options__label">{{ $t('pages.product.productOptions.price.discountPrice')}}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-page__footer">
        <button class="button" :class="{'button-disabled':!isInputEmpty}" :disabled="!isInputEmpty"  @click.prevent="sendUserToCart">{{ $t('buttons.addToBasket')}}</button>
      </div>
      </form>
  </div>
</div>
</template>

<script>
import { useCartStore } from "@/store/modules/cart";
import {mapActions} from "pinia";

export default {
  name: "ProductPageCard",
  props: {
    product: {
      type: Object
    }
  },
  data() {
    return {
      selectedProduct:{
        productQuantity: 1,
      },
    }
  },
  computed: {
    getCurrentLanguage() {
      return this.$i18n.locale === 'en' ? 'en' : 'ua';
    },
    isInputCorrect(){
      return this.selectedProduct.productQuantity > 1
    },
    isInputEmpty(){
      return this.selectedProduct.price
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addItem']),

    decreaseQuantity() {
      this.selectedProduct.productQuantity--;
    },
    increaseQuantity() {
      this.selectedProduct.productQuantity++;
    },
    sendUserToCart() {
      if(this.selectedProduct.price !== this.product.price)
        this.$router.push({
          name: 'FlowerSubscriptionPage',
        })
      else {
        this.addItem({
          productQuantity: this.selectedProduct.productQuantity,
          productId:this.product.id
        })

        this.$router.push({
          name: 'CartPage',
        })
      }


    }
  }
}
</script>

<style lang="scss" scoped>
.product-page {
  &__block {
    border-left: 1px solid #121212;

    padding: 40px;

    display: flex;
    flex-direction: column;
  }

  &__body {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__text {
  }

  &__footer {
  }
  &__type{
     font-weight: 700;
  }
}

.form {
  &__block {
    display: flex;
    align-items: center;
  }
  &__block--column{
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}



.options {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;


    margin-bottom: 24px;
  }

  &__block {
    display: flex;
    gap: 12px;
  }

  &__item {

  }

  &__input {
    width: 24px;
    height: 24px;

    cursor: pointer;
  }

  &__label {
    cursor: pointer;
  }
}

.button {
}
</style>