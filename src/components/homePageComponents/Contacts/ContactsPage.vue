<template>
  <div class="contacts-page section section--border" id="contacts">
    <div class="section__content">
      <div class="contacts-page__block">
        <title-poster :title=" $t('pages.home.main.titles.toContactUsTitle')">
          <template #main>
            <form action="#" class="contact-form">
              <div class="contact-form__wrapper">
                <div class="contact-form__block">
                  <div class="contact-form__item">
                    <p class="section__text">{{ $t('pages.home.main.text.letsTalkText') }}</p>
                  </div>
                </div>
                <div class="contact-form__block">
                  <div class="contact-form__item">
                    <input v-model="phoneNumber" type="text" maxlength="16" pattern="+46 \d{2} \d{2} \d{2} \d{3}"
                           placeholder="+46 XX XX XX XXX" class="input" @click="handleInputClick"
                           required>
                  </div>
                  <div class="contact-form__item">
                    <button class="button" @click.prevent="showPopUp">{{ $t('buttons.bookCall') }}</button>
                  </div>
                </div>
              </div>
            </form>
          </template>
        </title-poster>
        <contact-data-page/>
      </div>
      <div class="contacts-page__follow">
        <follow-us-page/>
      </div>
      <teleport to="body">
        <pop-up v-if="popUpShow">
          <template #text>
            <p class="section__text">{{ $t('extra.texts.thankYouText') }}</p>
          </template>
        </pop-up>
      </teleport>
    </div>
  </div>
</template>

<script>
import TitlePoster from "@/components/generals/TitlePoster.vue";
import ContactDataPage from "@/components/homePageComponents/Contacts/ContactDataPage.vue";
import FollowUsPage from "@/components/homePageComponents/Contacts/FollowUsPage.vue";
import PopUp from "@/components/generals/Pop-up.vue";


export default {
  name: "ContactsPage",
  components: {
    TitlePoster,
    ContactDataPage,
    FollowUsPage,
    PopUp
  },
  data() {
    return {
      phoneNumber: '',
      popUpShow: false
    }
  },
  methods: {
    handleInputClick() {
      this.phoneNumber = '+46 ';
    },
    showPopUp() {
      this.popUpShow = true;

      setTimeout(() => {
        this.popUpShow = false;
      }, 4000)

      this.phoneNumber = '';
    },
    closePopupOnClick(event) {
      if (event.target.classList.contains('pop-up')) {
        this.popUpShow = false;
      }
    }
  },
  watch: {
    phoneNumber(newValue) {
      const strippedNumber = newValue.replace(/\D/g, '');
      const formattedNumber = strippedNumber.replace(/(\d{2})(?=\d)/g, '$1 ');

      if (strippedNumber.startsWith('46')) {
        this.phoneNumber = '+' + formattedNumber;
      } else {
        this.phoneNumber = formattedNumber;
      }
    }
  },
  created() {
    document.addEventListener('click', this.closePopupOnClick);
  }
}

</script>

<style lang="scss" scoped>
.contacts-page {
  &__block {
    display: flex;
    flex-direction: column;
  }
}

.contact-form {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__block {
    display: flex;
    gap: 16px;
  }

  &__item {
    max-width: 100%;
    width: 100%;
  }

  &__text {
  }
}

</style>