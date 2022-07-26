<template>
    <span>
        <Transition name="base-sidebar--overlay">
            <div v-if="visible" class="base-sidebar--overlay" />
        </Transition>
        <Transition :name="`base-sidebar__${$props.side}`">
            <div v-if="$props.visible" :class="`base-sidebar base-sidebar__${$props.side}`"
                @click="e => e.stopPropagation()">
                <div class="base-sidebar--navigation-container">
                    <div class="base-sidebar--navigation-logo" @click="$emit('click')">
                        ✅
                    </div>
                    <div class="base-sidebar--navigation-anchors">
                        <BaseLink type="navigation" v-for="anchor, index in anchors" :key="index" :href="`#${anchor}`"
                            @click="$emit('click')">
                            {{
                                    anchor
                            }}
                        </BaseLink>
                    </div>
                </div>
            </div>
        </Transition>
    </span>
</template>

<script setup lang="ts">
import { useMq } from 'vue3-mq'
import { useNoScroll } from '../../../composables/useNoScroll.composable'
const { applyNoScroll, removeNoScroll } = useNoScroll()

const props = defineProps<{ visible: Boolean, side: "left" | "right", anchors: Array<String> }>()

const mq = useMq();
const isTabletDown = computed(() => mq.xs || mq.s)

watch(() => props.visible, () => {
    if (props.visible && isTabletDown.value) {
        applyNoScroll()
    } else {
        removeNoScroll()
    }
})
</script>

<style lang="scss">
.base-sidebar {
    position: fixed;
    padding: $space;
    box-sizing: border-box;
    width: $sidebar-width;
    top: 0;
    bottom: 0;
    background-color: $secondary;

    border-color: lighten($color: $secondary, $amount: 2);

    &--navigation-container {
        background-color: $secondary;
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        box-sizing: border-box;
    }

    &--navigation-anchors {
        background-color: $secondary;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow-y: scroll;
    }

    &--navigation-logo {
        display: flex;
        background-color: $secondary;
        font-size: 6rem;
        width: 100%;
        justify-content: center;
    }

    &__left {
        border-style: none solid none none;
        left: 0;

        &-enter-from,
        &-leave-to {
            left: -$sidebar-width;
        }

        &-enter-to,
        &-leave-from {
            left: 0;
        }

        &-enter-active,
        &-leave-active {
            transition: left 0.1s ease;
        }
    }

    &__right {
        border-style: none none solid none;
        right: 0;

        &-enter-from,
        &-leave-to {
            right: -$sidebar-width;
        }

        &-enter-to,
        &-leave-from {
            right: 0;
        }

        &-enter-active,
        &-leave-active {
            transition: right 0.1s ease;
        }
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

        &-enter-from,
        &-leave-to {
            opacity: 0;
        }

        &-enter-to,
        &-leave-from {
            opacity: 1;
        }

        &-enter-active,
        &-leave-active {
            transition: opacity 0.1s ease;
        }

        @include for-tablet-down {
            display: block;
        }
    }

}
</style>