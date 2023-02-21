import {useState} from 'react';
import { sendForm } from '../services';
import {Button, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFormData, setFormData } from '../store/slices/formDataSlice';
import clases from "./FormComponent.module.scss";
import {useNavigate} from "react-router-dom";
const FormComponent = () => {
    const [surname, setSurname] = useState('') ;
    const [name, setName] = useState('') ;
    const [patronymic, setPatronymic] = useState('');
    const [subject, setSubject] = useState('');
    const [mark, setMark] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const sendData = () => {
        sendForm(surname, name, patronymic, subject, mark)
            .then((data) => {
                if (data.surname){
                    dispatch(setFormData({
                        surname: data.surname,
                        name: data.name,
                        patronymic: data.patronymic,
                        subject: data.subject,
                        mark: data.mark
                    }
                    )
                    )
                }else{
                    dispatch(removeFormData(data));
                }
                navigate('/result');
        }
            );
            
    }
    return (
        <div className={clases.form}>
            <Form
                className={clases.form__wrapper}
            >
                <h3 className={clases.form__title}>Оценка студентов</h3>
                <Form.Control
                    value={surname}
                    className={clases.form__field}
                    onChange={e => setSurname(e.target.value)}
                    placeholder={"Введите фамилию"}
                >
                </Form.Control>
                <Form.Control
                    value={name}
                    className={clases.form__field}
                    onChange={e => setName(e.target.value)}
                    placeholder={"Введите имя"}
                >
                </Form.Control>
                <Form.Control
                    value={patronymic}
                    className={clases.form__field}
                    onChange={e => setPatronymic(e.target.value)}
                    placeholder={"Введите отчество"}
                >
                </Form.Control>
                <Form.Control
                    value={subject}
                    className={clases.form__field}
                    onChange={e=> setSubject(e.target.value)}
                    placeholder={"Введите предмет"}
                >
                </Form.Control>
                <Form.Control
                    value={mark}
                    className={clases.form__field}
                    onChange={e=> setMark(e.target.value)}
                    placeholder={"Введите оценку"}
                >
                </Form.Control>
                <Button
                    className={clases.form__button}
                    onClick={sendData}
                >
                    Отправить
                </Button>
            </Form>
    </div>
    );
};

export default FormComponent;