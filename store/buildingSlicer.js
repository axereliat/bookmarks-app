import { createSlice } from '@reduxjs/toolkit'

const initialState = {buildings: []};

export const buildingSlicer = createSlice({
    name: 'building',
    initialState,
    reducers: {
        loadData: (state, action) => {
            state.buildings = action.payload;
        },
        add: (state, action) => {
            state.buildings.push(action.payload);
        },
        update: (state, action) => {
            const idx = state.buildings.findIndex(el => el.id === action.payload.id);
            state.buildings[idx] = {...action.payload};
        },
        destroy: (state, action) => {
            const idx = state.buildings.findIndex(el => el.id === action.payload);
            state.buildings.splice(idx, 1);
        }
    },
})

export const {add, update, destroy, loadData} = buildingSlicer.actions;

export default buildingSlicer.reducer;
