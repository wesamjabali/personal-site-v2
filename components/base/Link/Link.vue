<template>
    <a :href="href" :class="`base-link base-link__${props.type ?? 'inline'}`">
        <slot />
    </a>
</template>

<script setup lang="ts">
const props = defineProps<{ href: string, type: "navigation" | "inline" }>()
</script>

<style lang="scss">
.base-link {
    color: $primary;

    &:visited {
        color: $primary
    }

    &__navigation {
        padding: 1rem;
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 0.5rem;
        margin-top: 1rem;
        box-sizing: border-box;
        width: 100%;
        text-align: center;

        &:hover {
            background-color: white;
            color: black;
        }

        &::before {
            content: '#️';
        }
    }

}
</style>