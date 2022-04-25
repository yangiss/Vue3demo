import { ref, watchEffect } from "vue"
import * as todoStorage from "../util/todoStorage"

export default function useTodoList(){
  const todosRef = ref(todoStorage.fetch())
  console.log(todosRef)
  window.todosRef = todosRef
  watchEffect(()=> {
    // console.log(todosRef.value)
    todoStorage.save(todosRef.value)
  })
  return {
    todosRef,
  }
};