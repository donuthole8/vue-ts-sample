<script setup lang="ts">
import { computed, ref, ComputedRef } from 'vue'
const inputtedName = ref<string>('')
const inputtedAge  = ref<number>()

const emit = defineEmits(['register'])

const register = () => {
  const person = {
    id: Math.random(),
    name: inputtedName.value,
    age: inputtedAge.value,
  }
  emit('register', person)
}

const nameLengthLimit: number = 15

const isValidName: ComputedRef<boolean> = computed(() => {
  if (inputtedName.value.length >= nameLengthLimit) {
    return false;
  } else {
    return true;
  }
})

const backgroundColor: ComputedRef<string> = computed(() => {
  return isValidName.value ? 'bg-white	' : 'bg-yellow-300';
})
</script>

<template>
  <div class="form-container flex flex-col rounded m-8  bg-teal-400">
    <div class="input-container">
      <div>
        <label>name:</label>
        <input class="input rounded w-64 m-2" :class="backgroundColor" type="text" v-model="inputtedName">
      </div>
      <span class="text-rose-300 font-bold" v-if="!isValidName">{{ nameLengthLimit }} character or less, please</span>
      <div>
        <label>age:</label>
        <input class="input rounded w-64 m-2" type="number" v-model="inputtedAge">
      </div>
    </div>
    <button class="register-button m-2 bg-white hover:bg-slate-200" @click="register" :disabled="!isValidName">Post</button>
  </div>
</template>
