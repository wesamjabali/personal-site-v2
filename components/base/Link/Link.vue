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
    transition: all 300ms;

    &:visited {
        color: $primary
    }

    &__navigation {
        font-weight: 600;
        padding-block: $space;
        text-decoration: none;
        border-radius: 0.5rem;
        margin-top: $space * 1.5;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;



        &:hover {
            background-color: lighten($color: $secondary, $amount: 20);
            color: $text-color;
        }

        &::before {
            content: '#️';
            display: inline-block;
            position: relative;
        }
    }

}
</style>