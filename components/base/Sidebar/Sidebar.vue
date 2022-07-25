<template>
    <div class="base-sidebar--overlay" @click="$emit('overlay-click')">
        <div class="base-sidebar base-sidebar__left" @click="e => e.stopPropagation()">
            <BaseLink type="navigation" v-for="anchor, index in anchors" :key="index" :href="`#${anchor}`">{{ anchor
            }}</BaseLink>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({ anchors: Array<String> })
defineEmits(['overlay-click'])
</script>

<style lang="scss">
@mixin sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    min-width: $sidebar-width;
    max-width: $sidebar-width;
    padding-left: $space;
    padding-right: $space;
    height: 100vh;
    border-color: lighten($color: $background-color, $amount: 2);
}

.base-sidebar {
    &--overlay {
        position: fixed;
        backdrop-filter: blur(2px);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: transparent;
    }

    &__left {
        @include sidebar;
        border-style: none solid none none;
        left: 0;
    }
}
</style>