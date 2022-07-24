<template>
  <button :class="`base-button base-button__${props.type} ${props.border ? '' : 'base-button__no-border'}`">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

type ButtonTypes = "primary" | "secondary" | "error";
const props = defineProps({
  type: { type: String as PropType<ButtonTypes>, required: true },
  border: { type: Boolean, required: false, default: true }
});
</script>

<style lang="scss">
.base-button {
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.1em;
  background-color: transparent;
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 0.5rem;

  padding-top: $space * 2;
  padding-bottom: $space * 2;
  padding-left: $space * 4;
  padding-right: $space * 4;

  &__no-border {
    border-style: none;
  }

  &__primary {
    border-color: $primary;

    &:hover {
      background-color: $primary;
    }
  }

  &__error {
    border-color: $error;

    &:hover {
      background-color: $error;
    }
  }
}
</style>
