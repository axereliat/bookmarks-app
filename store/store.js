import {configureStore} from "@reduxjs/toolkit";
import buildingReducer from './buildingSlicer';

export default configureStore({
    reducer: {
        building: buildingReducer
    }
});
