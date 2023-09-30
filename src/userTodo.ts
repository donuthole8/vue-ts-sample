import { ref } from 'vue'

type Todo = {
  id: number,
  title: string,
}

const defaultTodoItems: Todo[] = [
  {
    id: 0, 
    title: 'first',
  }, 
  {
    id: 1, 
    title: 'second',
  }, 
]

export const todoItems = (() => {
  const todoItems = ref<Todo[]>(defaultTodoItems)

  const addTodo = (title: string) => {
    todoItems.value.push({
      id: Math.random(),
      title: title
    })
  }

  return { todoItems, addTodo }
})()
