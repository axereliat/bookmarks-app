import { createSlice } from '@reduxjs/toolkit'
import jsonData from '../data/buildings.json';

export const buildingSlicer = createSlice({
    name: 'building',
    initialState: jsonData,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        update: (state, action) => {
            state = state.map(el => {
                if (el.id === action.payload.id) return el;
                return {...action.payload};
            });
        },
        destroy: (state, action) => {
            state = state.filter(el => el.id !== action.payload);
        }
    },
})

export const {add, update, destroy} = buildingSlicer.actions;

export default buildingSlicer.reducer;
