<template>
  <div class="default-layout">
    <BaseSidebar side="left" :visible="showSidebar || isDesktopUp" :anchors="anchors" @click="toggleSidebar()" />
    <BaseButton class="desktop-hide" @click="toggleSidebar()" type="primary" :floating-circle="true">✅</BaseButton>
    <div class="default-layout--main-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMq } from 'vue3-mq'
import { useIsMounted } from '../composables/useIsMounted.composable'
const { isMounted } = useIsMounted()
const mq = useMq()

const showSidebar = ref(false)
const isDesktopUp = computed(() => isMounted.value && !['xs', 's'].includes(mq.current))
const anchors = computed(() => {
  if (process.client) {
    return [...document.querySelectorAll('h2').values()].map((header) => header.textContent)
  }
})

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
    max-width: $content-max-width;
    margin: auto;
    padding-left: $sidebar-width + 1rem;
    padding-right: $sidebar-width;
    padding-top: $space * 4;
    // TODO: Get the spacing right

    @include for-desktop-only {
      padding-right: $space * 8;

    }

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