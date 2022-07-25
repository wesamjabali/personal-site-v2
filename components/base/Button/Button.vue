<template>
  <button
    :class="`base-button base-button__${props.type} ${!props.border ? 'base-button__no-border' : ''} ${props.floatingCircle ? 'base-button__floating-circle' : ''}`">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

type ButtonTypes = "primary" | "error";
const props = defineProps({
  type: { type: String as PropType<ButtonTypes>, required: true },
  border: { type: Boolean, required: false, default: true },
  floatingCircle: { type: Boolean }
});
</script>

<style lang="scss">
.base-button {
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.1em;
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

  // TODO: Add a way to change position
  &__floating-circle {
    padding: $space;
    backdrop-filter: blur(2px);
    text-align: center;
    box-sizing: border-box;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    bottom: 5%;
    right: 5%;
    height: 5rem;
    width: 5rem;
    font-size: 2rem;
    border-style: none;
    border-radius: 100rem;
  }
}
</style>
