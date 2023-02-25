import {useState} from 'react';
import { sendForm } from '../services';
import {Button, Form} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { removeFormData, setFormData } from '../store/slices/formDataSlice';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import clases from "./FormComponent.module.scss";
const FormComponent = () => {
    enum marks{
        fail = "Неудовлетворительно",
        satisfactorily = "Yдовлетворительно",
        good = "Хорошо",
        excellant = "Отлично",
    }
    const [surname, setSurname] = useState('') ;
    const [name, setName] = useState('') ;
    const [patronymic, setPatronymic] = useState('');
    const [subject, setSubject] = useState('');
    const [mark, setMark] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                <Dropdown>
                        <Dropdown.Toggle>{mark ||"Выберите оценку"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={e=> setMark(marks.excellant)}
                                >
                                    Отлично
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={e=> setMark(marks.good)}
                                >
                                    Хорошо
                             </Dropdown.Item>
                             <Dropdown.Item
                                    onClick={e=> setMark(marks.satisfactorily)}
                                >
                                    Удовлитворительно
                             </Dropdown.Item>
                             <Dropdown.Item
                                    onClick={e=> setMark(marks.fail)}
                                >
                                    Неудовлитворительно
                             </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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