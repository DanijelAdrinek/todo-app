import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {object} ReferenceState state
 */


/**
 * possible statuses of todo's
 */
export const TODO_STATUSES = {
    todo: 'todo',
    inProgress: 'in progress',
    done: 'done'
};

/**
 * redux todo slice
 */
export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: {
            0: {name: 'example todo', status: 'todo'},
            1: {name: 'operi ves', status: 'todo'}
        }
    },
    reducers: {
        
        /**
         * adds a new todo object to our state
         * 
         * @param {ReferenceState} state 
         * @param {object} action { id, name, status }
         */
        addTodo: (state, action) => {
            const { id, name, status } = action.payload;
            state.value[id] = {name, status};
        },

        /**
         * removes a todo object from our state
         * 
         * @param {ReferenceState} state 
         * @param {number} action id
         */
        removeTodo: (state, action) => {
            delete state.value[action.payload]
        },

        /**
         * changes the status of a todo
         * 
         * @param {ReferenceState} state 
         * @param {object} action { id, status } 
         */
        changeTodoStatus: (state, action) => {
            const {id, status} = action.payload;
            state.value[id].status = status;
        }
    }
});

export const { addTodo, removeTodo, changeTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;