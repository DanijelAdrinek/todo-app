import { createSlice } from "@reduxjs/toolkit";
import initialTodosData from '../../mock/data.json';

/**
 * @typedef {object} ReferenceState state
 */

/**
 * generates a unique GUID every time it gets run
 * 
 * @returns {string} GUID
 */
function generateID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
};

// possible statuses of todos
export const TODO_STATUSES = {
    todo: 'todo',
    inProgress: 'in progress',
    done: 'done'
};

// possible filters
export const TODO_FILTERS = {
    all: 'all',
    inProgress: 'in progress',
    done: 'done'
}

/**
 * redux todo slice
 */
export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialTodosData,
    reducers: {
        
        /**
         * adds a new todo object to our state
         * 
         * @param {ReferenceState} state 
         * @param {string} action name
         */
        addTodo: (state, action) => {
            const name = action.payload;
            const id = generateID();
            const status = TODO_STATUSES.todo;
            state.todos.push({ id, name, status });
        },

        /**
         * removes a todo object from our state
         * 
         * @param {ReferenceState} state 
         * @param {string} action id
         */
        removeTodo: (state, action) => {
            const id = action.payload;
            const newState = state.todos.filter(todo => todo.id !== id);
            state.todos = newState;
        },

        /**
         * removes the last todo from our state
         * 
         * @param {ReferenceState} state 
         */
        removeLastTodo: state => {
            state.todos.pop();
        },

        /**
         * changes the status of a todo
         * 
         * @param {ReferenceState} state 
         * @param {object} action { id, status } 
         */
        changeTodoStatus: (state, action) => {
            const {id, status} = action.payload;
            
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            
            if (index !== -1) {
                state.todos[index].status = status;
            };
        },

        /**
         * 
         * @param {ReferenceState} state 
         * @param {string} action status
         */
        setFilterStatus: (state, action) => {
            const status = action.payload;
            state.filter = status;
        }
    }
});

export const { addTodo, removeTodo, removeLastTodo, changeTodoStatus, setFilterStatus } = todoSlice.actions;

export default todoSlice.reducer;