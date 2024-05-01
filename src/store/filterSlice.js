import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        data: 'All',
    },
    reducers: {
        setFilter(state, action) {
            state.data = action.payload;
        },
    },
});


//actions
export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
