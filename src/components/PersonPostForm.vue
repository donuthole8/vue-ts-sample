<script setup lang="ts">
import { ref } from 'vue'
const inputtedName = ref<string>('')
const inputtedAge  = ref<number>()

const emit = defineEmits(['register'])

const register = () => {
  const person = {
    id: Math.random(),
    name: inputtedName.value,
    age: inputtedAge.value,
  }
  console.log("person ...", person)
  emit('register', person)
}
</script>

<template>
  <div class="form-container flex flex-col rounded m-8  bg-teal-400">
    <div class="input-container">
      <div>
        <label>name:</label>
        <input class="input rounded w-64 m-2" type="text" v-model="inputtedName">
      </div>
      <div>
        <label>age:</label>
        <input class="input rounded w-64 m-2" type="number" v-model="inputtedAge">
      </div>
    </div>
    <button class="register-button m-2 bg-white hover:bg-slate-200" @click="register">Post</button>
  </div>
</template>
