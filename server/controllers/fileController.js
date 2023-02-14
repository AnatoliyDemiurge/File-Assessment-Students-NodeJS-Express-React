class fileController{
    async createFile(req, res){
       let name = req.body;
       return res.json(name);
    }
}

module.exports = new fileController();