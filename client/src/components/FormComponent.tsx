import {useEffect} from 'react';
import { sendForm } from '../services';
const FormComponent = () => {
    useEffect(()=>{
        sendForm("Трилл","Трилл","Трилл","Русский","Три").then(data => console.log(data));
      },[])
    return (
        <div>
            
        </div>
    );
};

export default FormComponent;