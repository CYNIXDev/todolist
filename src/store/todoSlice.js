import { createSlice } from '@reduxjs/toolkit';

let data = [
    {
        id: 1,
        title: 'Do homework',
        completed: false
    },
    {
        id: 2,
        title: 'Read book',
        completed: false
    },
    {
        id: 3,
        title: 'Go to the gym',
        completed: false
    },
    {
        id: 4,
        title: 'Buy groceries',
        completed: false
    },
    {
        id: 5,
        title: 'Walk the dog',
        completed: false
    }
]


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        data: data,
    },
    reducers: {
        addTodo(state, action) {
            state.data.push(action.payload);
        },
        toggleTodo(state, action) {
            state.data.forEach((todo, i) => {
                if (todo.id === action.payload) {
                    state.data[i].completed = !todo.completed;
                }
            });
        },
        removeTodo(state, action) {
            state.data = state.data.filter(todo => todo.id !== action.payload);
        },
        clearCompleted(state) {
            state.data = state.data.filter(todo => {
                return todo.completed === false
            });
        },
    },
});


//actions
export const { addTodo, toggleTodo, removeTodo, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;
