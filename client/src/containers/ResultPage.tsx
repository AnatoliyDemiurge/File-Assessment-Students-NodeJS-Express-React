import { store } from '../store';
import clases from "./ResultPage.module.scss";

const ResultPage = () => {
    return (
        <div className={clases.result}>
           {store.getState().formData.surname === "" ? <div className={clases.result__error}>Ошибка: {store.getState().formData.error}</div> : 
            <div className={clases.result__success}>
                <div>Данные результирующего файла:</div>
                <div>Фамилия: {store.getState().formData.surname}</div>
                <div>Имя: {store.getState().formData.name}</div>
                <div>Отчество: {store.getState().formData.patronymic}</div>
                <div>Предмет: {store.getState().formData.subject}</div>
                <div>Оценка: {store.getState().formData.mark}</div>
            </div>}
        </div>
    );
};

export default ResultPage;