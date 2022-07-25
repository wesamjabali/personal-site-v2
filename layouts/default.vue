<template>
  <div class="default-layout">
    <BaseSidebar v-if="showSidebar" :anchors="anchors" @overlay-click="toggleSidebar()"></BaseSidebar>
    <BaseButton class="desktop-hide" @click="toggleSidebar()" type="primary" :floating-circle="true">✅</BaseButton>
    <div class="default-layout--main-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const anchors = ['anchor1', 'anchor2', 'this is a very long anchor!', 'sh']
const showSidebar = ref(false)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
}
</script>

<style lang="scss">
.default-layout {
  display: flex;
  justify-content: space-between;

  &--main-content {
    width: 100%;
    max-width: 45rem;
    margin: auto;
    padding-left: $sidebar-width + 1rem;
    padding-right: $sidebar-width + 1rem;

    @include for-tablet-down {
      padding-top: $space * 2;
      padding-left: $space * 4;
      padding-right: $space * 4;
    }
  }
}

.desktop-hide {
  @include for-desktop-up {
    display: none;
  }
}
</style>