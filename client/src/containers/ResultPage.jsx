import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../store';

const ResultPage = () => {
    console.log(store.getState().formData.mark);
    const test = useSelector(state => state.formData.mark);
    console.log(test);
    return (
        <div>
           {store.getState().formData.surname =="" ? <div>{store.getState().formData.error}</div> : 
            <div>
                <div>{store.getState().formData.surname}</div>
                <div>{store.getState().formData.name}</div>
                <div>{store.getState().formData.patronymic}</div>
                <div>{store.getState().formData.subject}</div>
                <div>{store.getState().formData.mark}</div>
            </div>}
        </div>
    );
};

export default ResultPage;