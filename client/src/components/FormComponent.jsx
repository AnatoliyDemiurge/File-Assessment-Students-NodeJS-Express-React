import {useState} from 'react';
import { sendForm } from '../services';
import {Button, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFormData, setFormData } from '../store/slices/formDataSlice';
const FormComponent = () => {
    const [surname, setSurname] = useState('') ;
    const [name, setName] = useState('') ;
    const [patronymic, setPatronymic] = useState('');
    const [subject, setSubject] = useState('');
    const [mark, setMark] = useState('');
    const dispatch = useDispatch();
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
        }
            );
            
    }
    return (
        <div>
            <Form>
                <Form.Control
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    className="mt-3"
                    placeholder={"Введите фамилию"}
                >
                </Form.Control>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-3"
                    placeholder={"Введите имя"}
                >
                </Form.Control>
                <Form.Control
                    value={patronymic}
                    onChange={e => setPatronymic(e.target.value)}
                    className="mt-3"
                    placeholder={"Введите отчество"}
                >
                </Form.Control>
                <Form.Control
                    value={subject}
                    onChange={e=> setSubject(e.target.value)}
                    className="mt-3"
                    placeholder={"Введите предмет"}
                >
                </Form.Control>
                <Form.Control
                    value={mark}
                    onChange={e=> setMark(e.target.value)}
                    className="mt-3"
                    placeholder={"Введите оценку"}
                >
                </Form.Control>
            </Form>
            <Link to="/result"><Button onClick={sendData}>Отправить</Button></Link>
    </div>
    );
};

export default FormComponent;