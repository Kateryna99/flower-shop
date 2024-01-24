<template>
  <div class="product-card section section--border">
    <router-link :to="{
      name: 'ProductPage',
      params: {
        productId: productObj.id,
        productSubtitle: productObj.subtitle
      }
    }">
      <div class="product-card__wrapper" :style="{backgroundImage: 'url(' + productObj.imgSrc + ')'}">
        <div class="product-card__content">
          <div class="product-card__item">
            <h5 class="product-card__title">{{ productObj.title[getCurrentLanguage] }}</h5>
          </div>
          <div class="product-card__item">
            <p class="product-card__price">{{ productObj.price }}$</p>
          </div>
        </div>
      </div>
    </router-link>
    <teleport to="body">
      <pop-up v-if="showPopup">
        <template #title>
          <div class="pop-up__icon icon icon-close" @click="closePopUp"></div>
          <div class="pop-up__item">
            <div class="pop-up__element">
              <label class="pop-up__label">Category:</label>
            </div>
            <div class="pop-up__element">
              <input v-model="product.category" type="text" placeholder="fresh-flower" class="input input--small">
            </div>
          </div>
          <div class="pop-up__item">
            <div class="pop-up__element">
              <label class="pop-up__label">Description:</label>
            </div>
            <div class="pop-up__element pop-up-language-element">
              <div class="pop-up-language-element__wrapper">
                <div class="pop-up-language-element__block">
                  <div class="pop-up-language-element__item">
                    <label class="pop-up-language-element__label">EN:</label>
                  </div>
                  <div class="pop-up-language-element__item">
                    <textarea v-model="product.description.en" class="pop-up__textarea" name=""
                              placeholder="Product description in English" id="" cols="46" rows="4"></textarea>
                  </div>
                </div>
                <div class="pop-up-language-element__block">
                  <div class="pop-up-language-element__item">
                    <label class="pop-up-language-element__label">UA:</label>
                  </div>
                  <div class="pop-up-language-element__item">
                    <textarea v-model="product.description.ua" class="pop-up__textarea" name="" id=""
                              placeholder="Product description in Ukrainian" cols="46" rows="4"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pop-up__item">
            <div class="pop-up__element">
              <label class="pop-up__label">ImgSrc:</label>
            </div>
            <div class="pop-up__element">
              <input v-model="product.imgSrc" type="text" placeholder="Product card image source"
                     class="input input--small">
            </div>
          </div>
          <div class="pop-up__item">
            <div class="pop-up__element">
              <label class="pop-up__label">Price:</label>
            </div>
            <div class="pop-up__element">
              <input v-model="product.price" type="number" placeholder="Price in dollars" class="input input--small">
            </div>
          </div>
          <div class="pop-up__item">
            <div class="pop-up__element">
              <label class="pop-up__label">SubImgUrl:</label>
            </div>
            <div class="pop-up__element">
              <input v-model="product.subImgUrl" type="text" placeholder="Product page image source"
                     class="input input--small">
            </div>
          </div>
          <div class="pop-up__item">
            <div class="pop-up__element">
              <label class="pop-up__label">Subtitle:</label>
            </div>
            <div class="pop-up__element">
              <input v-model="product.subtitle" type="text" placeholder="rosy-delight" class="input input--small">
            </div>
          </div>
          <div class="pop-up__item">
            <div class="pop-up__element">
              <label class="pop-up__label">Title:</label>
            </div>
            <div class="pop-up__element pop-up-language-element">
              <div class="pop-up-language-element__wrapper">
                <div class="pop-up-language-element__block">
                  <div class="pop-up-language-element__item">
                    <label class="pop-up-language-element__label">EN:</label>
                  </div>
                  <div class="pop-up-language-element__item">
                    <textarea v-model="product.title.en" class="pop-up__textarea" name=""
                              placeholder="Product title in English" id="" cols="46" rows="3"></textarea>
                  </div>
                </div>
                <div class="pop-up-language-element__block">
                  <div class="pop-up-language-element__item">
                    <label class="pop-up-language-element__label">UA:</label>
                  </div>
                  <div class="pop-up-language-element__item">
                    <textarea v-model="product.title.ua" class="pop-up__textarea" name="" id=""
                              placeholder="Product title in Ukrainian" cols="46" rows="3"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #text>
          <div class="pop-up__block pop-up__block--row">
            <button class="button button--secondary" @click="closePopUp">{{ $t("buttons.back") }}</button>
            <button class="button" @click="applyChanges">{{ $t("buttons.apply") }}</button>
          </div>
        </template>
      </pop-up>
    </teleport>
    <div v-if="userPermissions.update" class="admin">
      <div class="admin__wrapper">
        <div class="admin__item">
          <span class="admin__icon icon icon-close" @click="deleteItem(productObj.id)"></span>
        </div>
        <div class="admin__item">
          <span class="admin__icon icon icon-pencil" @click="showPopUpToChange(productObj.id)"></span>
        </div>
        <div class="admin__item">
          <span class="admin__icon icon icon-checkmark" @click="showPopupToCreate"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/store/users.js";
import { useProductsStore } from "@/store/modules/products";
import { mapState, mapActions } from "pinia";
import PopUp from "@/components/generals/Pop-up";

export default {
  name: "ProductCard",
  components: { PopUp },
  props: {
    productObj: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showPopup: false,
      product: {
        category: "",
        description: {
          en: "",
          ua: ""
        },
        imgSrc: "",
        price: null,
        subImgUrl: "",
        subtitle: "",
        title: {
          en: "",
          ua: ""
        }
      },
      category:{

      }
    };
  },
  computed: {
    ...mapState(useUsersStore, ["userPermissions"]),
    ...mapState(useProductsStore, ["getItemById"]),

    getCurrentLanguage() {
      return this.$i18n.locale === "en" ? "en" : "ua";
    },


  },
  methods: {
    ...mapActions(useProductsStore, ["deleteItem", "updateItem",'addItem']),

    showPopUpToChange(id) {
      this.showPopup = true;

      this.product = this.getItemById(id);
      this.category.edit = true

    },
    showPopupToCreate() {
      this.showPopup = true;

      this.category.add = true
    },
    closePopUp() {
      this.showPopup = false;

      this.product = {
        category: "",
        description: {
          en: "",
          ua: ""
        },
        imgSrc: "",
        price: null,
        subImgUrl: "",
        subtitle: "",
        title: {
          en: "",
          ua: ""
        }
      };

      this.category = {}
    },
    applyChanges() {
      if(this.category.edit){
        this.updateItem({
          itemId: this.product.id,
          ...this.product
        })
      }
      if(this.category.add){
        this.addItem(this.product)
      }

      this.showPopup = false;
      this.category = {}
    }
  },
};

</script>

<style lang="scss" scoped>
.product-card {
  cursor: pointer;
  overflow: hidden;
  border-left: 1px solid #121212;

  position: relative;

  &__wrapper {
    padding: 24px;
    min-height: 360px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;


    display: flex;
    justify-content: center;
    align-items: end;

    transition: all 0.3s ease-in-out;

    @media (max-width: 991px) {
      border-bottom: 1px solid #121212;
    }
  }

  &__content {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 4px;
  }

  &__item {
  }

  &__title {
    font-weight: 500;
  }

  &__price {
    font-size: 14px;
    font-weight: 500;

    color: grey;
  }

  &:hover {
    .product-card__wrapper {
      transform: scale(1.1);
    }
  }
}
</style>