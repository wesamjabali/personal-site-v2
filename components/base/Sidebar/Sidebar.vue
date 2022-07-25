<template>
    <span>
        <div class="base-sidebar--overlay" @click="$emit('overlay-click')" />
        <div class="base-sidebar base-sidebar__left" @click="e => e.stopPropagation()">
            <BaseLink type="navigation" v-for="anchor, index in anchors" :key="index" :href="`#${anchor}`">{{ anchor
            }}</BaseLink>
        </div>
    </span>
</template>

<script setup lang="ts">
defineProps({ anchors: Array<String> })
defineEmits(['overlay-click'])
</script>

<style lang="scss">
.base-sidebar {
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
    border-color: lighten($color: $secondary, $amount: 2);
    background-color: $secondary;

    &>* {
        background-color: lighten($color: $secondary, $amount: 4);
    }

    &--overlay {
        position: fixed;
        backdrop-filter: blur(2px);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: transparent;
        display: none;

        @include for-tablet-down {
            display: block;
        }
    }

    &__left {
        border-style: none solid none none;
        left: 0;
    }
}
</style>