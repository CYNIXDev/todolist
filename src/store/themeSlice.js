import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: false
}
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: state => {
            state.isDark = state.isDark ? false : true;
            const body = document.querySelector('body');
            if (state.isDark) {
                body.classList.remove('light');
                body.classList.add('dark');
            } else {
                body.classList.remove('dark');
                body.classList.add('light');
            }

        }
    }
})

//actions
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
