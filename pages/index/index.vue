<template>
  <div>
    <BaseModal v-if="activeModal" @overlay-click="toggleModal()" header="Hello!">
      <template #content>{{ content }}</template>
      <template #actions>
        <BaseButton @click="toggleModal()" type="error">❌ Cancel</BaseButton>
        <BaseButton @click="getStarted()" type="primary">✅ Get started</BaseButton>
      </template>
    </BaseModal>
    <div class="hello">
      <BaseButton type="primary" @click="toggleModal()">Modal</BaseButton>
      {{ content }}
      <BaseButton type="primary" @click="toggleModal()">Modal</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeModal = ref(false)

const toggleModal = () => {
  activeModal.value = !activeModal.value
}
const getStarted = () => {
  alert("Ready!")
}

const content = "This is fake content! ".repeat(500)
</script>

<style lang="scss">
.hello {
  font-size: 20px;
}

@include for-tablet-only {
  .tablet {
    display: none;
  }
}
</style>
