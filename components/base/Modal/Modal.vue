<template>
    <Transition name="base-modal">
        <div v-if="visible" class="base-modal--overlay" @click="$emit('overlay-click'); ">
            <div class="base-modal" @click="(e) => e.stopPropagation()">
                <h4 class="base-modal--header">
                    {{ header }}
                </h4>
                <p class="base-modal--content">
                    <slot name="content" />
                </p>
                <p class="base-modal--actions">
                    <slot name="actions" />
                </p>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{ header: String, visible: Boolean }>()
defineEmits(['overlay-click'])
const { applyNoScroll, removeNoScroll } = useNoScroll()

watch(() => props.visible, () => {
    if (props.visible) {
        applyNoScroll()
    } else {
        removeNoScroll()
    }
})
</script>

<style lang="scss">
.base-modal--overlay {
    position: fixed;
    display: flex;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.2);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: $overlay-z-index;
}

.base-modal {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width: 30rem;
    max-width: 35rem;
    max-height: 40rem;
    margin: auto;
    z-index: 1001;

    border: 0.5px solid white;
    border-radius: 0.5rem;
    padding: $space * 3;
    background-color: $secondary;

    @include for-tablet-down {
        position: absolute;
        bottom: 0;
        min-width: 100%;
        max-width: 100%;
        max-height: 65vh;
        border-style: solid none none none;
        border-radius: 0;
        align-self: center;
        margin: 0;
    }

    &--header {
        margin-bottom: 0.5rem;
        font-size: 3rem;
        font-weight: bolder;
    }

    &--content {
        margin-bottom: 1rem;
        overflow-y: auto;
        padding: $space * 2;
        border: 0.1rem solid lighten($color: $secondary, $amount: 10);
        border-radius: 0.5rem;
    }

    &--actions {
        align-self: flex-end;

        &>* {
            margin-left: $space;
        }

        @include for-tablet-down {
            &>.base-button {
                border-style: none;
                padding: $space;
            }
        }
    }

    &-enter-from,
    &-leave-to {
        @include for-tablet-down {
            backdrop-filter: blur(2px);
            background-color: rgba(255, 255, 255, 0.0);
            bottom: -95vh;
        }
    }

    &-enter-to,
    &-leave-from {
        @include for-tablet-down {
            backdrop-filter: blur(2px);
            background-color: rgba(255, 255, 255, 0.2);
            bottom: 0;
        }
    }

    &-enter-active,
    &-leave-active {
        transition: all 0.1s ease;
    }
}
</style>