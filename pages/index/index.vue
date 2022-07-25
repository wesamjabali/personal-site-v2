<template>
  <div>
    <BaseModal :visible="activeModal" @overlay-click="toggleModal()" header="Hello!">
      <template #content>{{ content }}</template>
      <template #actions>
        <BaseButton @click="toggleModal()" type="error">❌ Cancel</BaseButton>
        <BaseButton @click="getStarted()" type="primary">✅ Get started</BaseButton>
      </template>
    </BaseModal>
    <div>
      <ContentDoc class="content" path="/test" />
    </div>
    <BaseButton type="primary" @click="toggleModal()">Modal</BaseButton>

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

const content = "Lorem Ipsum ".repeat(5000)
</script>


