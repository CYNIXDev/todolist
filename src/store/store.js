// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import filterSlice from './filterSlice';
import themeSlice from './themeSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        filter: filterSlice,
        theme: themeSlice,
    },
});
