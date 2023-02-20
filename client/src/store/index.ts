import {configureStore} from '@reduxjs/toolkit';
import formDataReducer from './slices/formDataSlice';

export const store = configureStore({
    reducer: {
        formData: formDataReducer,
    }
});