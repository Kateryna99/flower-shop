<template>
    <form class="cart-form-item section">
      <div class="cart-form-item__wrapper">
        <slot name="form-header"></slot>
          <slot name="form-main"></slot>
        <slot name="form-footer"></slot>
      </div>
    </form>
</template>

<script>
export default {
  name: "cartFormItem"
};
</script>

<style scoped>

</style>