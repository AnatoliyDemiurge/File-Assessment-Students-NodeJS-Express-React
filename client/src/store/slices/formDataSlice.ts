import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    surname:'',
    name:'',
    patronymic:'',
    subject:'',
    mark:'',
    error:''
}

const formDataSlice = createSlice({
    name:'formData',
    initialState,
    reducers:{
        setFormData(state, action) {
            state.surname = action.payload.surname
            state.name = action.payload.name
            state.patronymic = action.payload.patronymic
            state.subject = action.payload.subject
            state.mark = action.payload.mark
        },
        removeFormData(state, action){
            state.surname = ''
            state.name = ''
            state.patronymic = ''
            state.subject = ''
            state.mark = ''
            state.error = action.payload
        },
    }
})

export const {setFormData, removeFormData} = formDataSlice.actions

export default formDataSlice.reducer