const fs = require("fs");
class fileController{
    async createFile(req, res){
        let {name, surname, patronymic, subject, mark} = req.body;
        let rawFileName = surname + name + patronymic + ".txt";
        let filesDirestory = '../files/';
        let fileAddress = filesDirestory + rawFileName; 
        if (fs.existsSync(fileAddress)) {
            const regexp = /а:\s[аА-яЯ]*/;
            let fileData = fs.readFileSync(fileAddress, 'utf-8');
            let test = fileData.match(regexp).toString();
            let fileDataSlice = test.slice(3);
            if (fileDataSlice == 'Неудовлитворительно' || fileDataSlice == 'неудовлитворительно'){
                let fileContent = 
        `Фамилия: ${surname}
Имя: ${name}
Отчество: ${patronymic}
Предмет: ${subject}
Оценка: ${mark}
                `;
                fs.writeFile(fileAddress, fileContent, ()=>{

                });
                return res.json({name, surname, patronymic, subject, mark});
            }else{
                return res.json('Невозможно изменить оценку')                
            }
        }
        let fileContent = 
        `Фамилия: ${surname}
Имя: ${name}
Отчество: ${patronymic}
Предмет: ${subject}
Оценка: ${mark}
        `;
        fs.writeFile(fileAddress, fileContent, ()=>{

        });


        return res.json({name, surname, patronymic, subject, mark});
    }
}

module.exports = new fileController();