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
            const idx = state.findIndex(el => el.id === action.payload.id);
            state[idx] = {...action.payload};
        },
        destroy: (state, action) => {
            console.log('action payload', action.payload);
            const idx = state.findIndex(el => el.id === action.payload);
            state.splice(idx, 1);
        }
    },
})

export const {add, update, destroy} = buildingSlicer.actions;

export default buildingSlicer.reducer;
