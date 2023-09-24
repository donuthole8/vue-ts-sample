<script setup lang="ts">
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';
import { Ref, ref } from 'vue';

export type Person = {
  id: number,
  name: string,
  age: number,
}

const persons: Ref<Person[]> = ref([
  {
    id: 0,
    name: 'varan',
    age: 24,
  },
  {
    id: 1,
    name: 'vargo',
    age: 26,
  },
  {
    id: 2,
    name: 'adol',
    age: 52,
  },
])

const registerPerson = (person: Person) => {
  persons.value.push(person)
}

const deletePerson = (id: number) => {
  persons.value = persons.value.filter(
    person => person.id !== id
  )
}

</script>

<template>
  <div class="container flex flex-col">
    <PersonPostForm @register="registerPerson"/>
    <div class="list-container">
      <ul>
        <PersonList :persons="persons" @delete="deletePerson"/>
      </ul>
    </div>
  </div>
</template>
