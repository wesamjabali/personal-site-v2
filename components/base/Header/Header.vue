<template>
    <div class="base-header">
        <div class="base-header--logo">
            <div class="base-header--logo__inner">🚥</div>
        </div>
        <div class="base-header--items">
            <div class="base-header--navigation-item" v-for="item in props.navigationItems" :key="item.href">
                <BaseLink type="navigation" :href="item.href">{{ item.title }}</BaseLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({ navigationItems: Array<{ title: string, href: string }> })


</script>

<style lang="scss">
.base-header {
    position: fixed;


    left: 0;
    right: 0;
    height: $header-height;

    z-index: $header-z-index;
    box-shadow: 10px 0 10px lightgray;

    display: flex;
    flex-direction: row;
    justify-content: start;
    background-color: rgba(104, 161, 226, 0.9);
    backdrop-filter: blur(10px);

    &>*,
    &>*>* {
        background-color: transparent;
    }

    &--logo {
        width: $sidebar-width;
        display: flex;
        font-size: 4rem;

        &__inner {
            margin: auto;
        }
    }

    &--items {
        display: flex;
        justify-content: end;
        flex-direction: row;
        justify-items: flex-end;
        margin-top: auto;
        margin-left: auto;



    }

    &--navigation-item {
        margin-inline: $space/2;
        // height: 100%;


        &>* {

            border-radius: $space $space 0 0;
            padding: $space;



            &:hover {
                background-color: rgba(211, 211, 211, 0.6);
            }

            color: $secondary;

            &:visited {
                color: $secondary
            }
        }

        align-self: flex-end;
        // padding: $space;
    }
}
</style>