<script setup lang="ts">
import { inject } from 'vue'

const { todoItems, addTodo: _addTodo } = inject('todoItems')

const addTodo = (title: string) => {
  _addTodo(title)
}

</script>

<template>
  <div>
    <ul>
      <li v-for="todo in todoItems">
        {{ todo.title }}
      </li>
    </ul>
    <button @click="addTodo('add')">Add</button>
  </div>
</template>
