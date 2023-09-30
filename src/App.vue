<script setup lang="ts">
// Persons App
// import Persons from './componentsPersons/Persons.vue'
// RocketIcon App
// import CardList from './componentsRocketIcon/CardList.vue'
// TodoList App
// import { provide } from 'vue'
// import { todoItems, todoKey } from './useTodo';
// import TodoList from './componentsTodoList/TodoList.vue'
// provide (todoKey, todoItems)
// Form App
import Form from './componentsForm/Form.vue'
</script>

<template>
  <h1 class="text-3xl font-bold underline text-white">
    Vue + ts + tailwind Sample App
  </h1>
  <!-- Persons App -->
  <!-- <Persons /> -->

  <!-- RocketIcon App -->
  <!-- <CardList /> -->

  <!-- TodoLIst App -->
  <!-- <TodoList /> -->

  <!-- Form App -->
  <Form />
</template>


<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
}
</style>