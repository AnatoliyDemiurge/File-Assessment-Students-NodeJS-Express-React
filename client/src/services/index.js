import {$host} from "../api/index";

export const sendForm = async (surname, name, patronymic, subject, mark) => {
    const {data} = await $host.post('api/file',{surname, name, patronymic, subject, mark});
    return data;
}
