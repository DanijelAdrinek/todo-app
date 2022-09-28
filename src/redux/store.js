import { configureStore } from '@reduxjs/toolkit'
import todoSlice  from './todo/todo-slice'

export default configureStore({
  reducer: {
    todos: todoSlice
  },
})