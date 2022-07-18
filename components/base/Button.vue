<template>
  <button
    :class="`base-button base-button__${props.type}`"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

type ButtonTypes = "primary" | "secondary";
const props = defineProps({
  type: { type: String as PropType<ButtonTypes>, required: true },
});
</script>

<style lang="scss">
.base-button {
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.1em;
  background-color: transparent;
  border-style: solid;
  border-width: 0.1em;

  padding-top: $space * 2;
  padding-bottom: $space * 2;
  padding-left: $space * 4;
  padding-right: $space * 4;

  &__primary {
    border-color: $primary;
    &:hover {
      background-color: $primary;
    }
  }
}
</style>
