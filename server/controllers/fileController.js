const fs = require("fs");
class fileController{
    async createFile(req, res){
        let {name, surname, patronymic, subject, mark} = req.body;
        let rawFileName = surname + name + patronymic + ".txt";
        let filesDirestory = '../files/';
        let fileAddress = filesDirestory + rawFileName;
        if (fs.existsSync(fileAddress)) {
            return res.json("Ошибка, нельзя изменить оценку.");
        }
        let fileContent = 
        `Фамилия: ${surname}
Имя: ${name}
Отчество: ${patronymic}
Предмет: ${subject}
Оценка: ${mark}
        `
        fs.writeFile(fileAddress, fileContent, ()=>{

        });


        return res.json(fileAddress);
    }
}

module.exports = new fileController();