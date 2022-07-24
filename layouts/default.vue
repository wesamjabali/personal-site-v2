<template>
  <div class="default-layout">
    <div class="default-layout--left-sidebar">
      <BaseButton type="primary">Hello</BaseButton>
      Hey there, I'm your left sidebar!
    </div>
    <div class="default-layout--main-content">
      <slot />
    </div>
    <div class="default-layout--right-sidebar"></div>
  </div>
</template>

<style lang="scss">
.default-layout {
  display: flex;
  justify-content: space-between;

  &--main-content {
    max-width: 45rem;
    margin: auto;
    padding-left: $sidebar-width + 1rem;
    padding-right: $sidebar-width + 1rem;

    @include for-tablet-down {
      padding-left: 2rem;
      padding-right: 2rem;

    }
  }

  @mixin sidebar {
    position: fixed;
    box-sizing: border-box;
    min-width: $sidebar-width;
    max-width: $sidebar-width;
    height: 100vh;
    border-color: lighten($color: $background-color, $amount: 2);

    @include for-tablet-down {
      display: none;
    }
  }

  &--left-sidebar {
    @include sidebar;
    border-style: none solid none none;
    left: 0;
  }
}
</style>