<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const isActiveButton = ref<string>(props.modelValue)
const onClick = (buttonType: string) => {
  isActiveButton.value = buttonType
  emits('update:modelValue', isActiveButton.value)
}
</script>

<template>
  <ul class="flex justify-center">
    <li>
      <button
        :class="{ 'bg-sky-300': isActiveButton === 'bad' }"
        @click="onClick('bad')"
        type="button"
        class="m-2">Bad</button>
    </li>
    <li>
      <button
        :class="{ 'bg-sky-300': isActiveButton === 'average' }"
        @click="onClick('average')"
        type="button"
        class="m-2">Average</button>
    </li>
    <li>
      <button 
        :class="{ 'bg-sky-300': isActiveButton === 'great' }"
        @click="onClick('great')"
        type="button"
        class="m-2">Great</button>
    </li>
  </ul>
</template>

<style scoped>
.active {
  background-color: aqua;
}
</style>