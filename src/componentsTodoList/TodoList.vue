<script setup lang="ts">
import { inject } from 'vue'
import { todoKey } from '../useTodo.ts'

const state = inject(todoKey)
if (!state) {
  throw new Error('state is undefined')
}

const { todoItems, addTodo: _addTodo } = state

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
../useTodo.ts