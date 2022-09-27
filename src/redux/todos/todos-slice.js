import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {object} ReferenceState
 */

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {name: 'example todo', status: 'all'}
        ]
    },
    reducers: {
        /**
         * 
         * @param {ReferenceState} state 
         * @param { } action 
         */
        addTodo(state, action) {
            state.todos += action.payload;
        }
    }
});