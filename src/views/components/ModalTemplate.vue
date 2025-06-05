<script setup lang="ts">
const props = defineProps<{
  maxWidth?: string;
  maxHeight?: string;
}>();

const emit = defineEmits<(e: "close") => void>();
</script>

<template>
  <div
    class="modal-overlay"
    @click="emit('close')"
  >
    <div
      class="modal-content"
      :style="{
        maxWidth: props.maxWidth || '600px',
        maxHeight: props.maxHeight || '80vh',
      }"
      @click.stop
    >
      <div class="modal-content-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  overflow: auto;
  width: fit-content;
  height: fit-content;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
