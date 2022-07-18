<template>
  <div>
    <span class="tablet">tablet</span>
    <BaseButton type="primary">Get Started</BaseButton>
  </div>
</template>

<style lang="scss">
@include for-tablet-only {
  .tablet {
    display: none;
  }
}
</style>
