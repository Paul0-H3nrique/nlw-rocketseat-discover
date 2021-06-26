const Database = require("../db/config");

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let idRoom
        let isRoom = true
        while (isRoom) {

            //Cria um unico identificador para sala;
            for(var i = 0; i < 6; i++){
                i == 0 ? idRoom = Math.floor(Math.random() * 10).toString() : 
                idRoom += Math.floor(Math.random() * 10).toString();
            }
            
            //Verificação se ja existe um identififcador no banco de dados
            const existRoomId = await db.all(`SELECT id FROM rooms`)//SELEÇÃO DO DADO    
            isRoom = existRoomId.some(existRoomId => existRoomId === idRoom)

            //Adiciona ao banco de dados a sala
            if(!isRoom){ //verificando a existencia do mesmo identificador de sala
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(idRoom)},
                    '${pass}'
                )`)
            }
        }

        await db.close()

        res.redirect(`/room/${idRoom}`)
    },
    async open(req, res){
        const db = await Database()

        const roomid = req.params.roomid
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomid} and read = 0`);
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomid} and read = 1`)
        let isNoQuestions

        if(questions.length === 0){
            if(questionsRead.length === 0){
                isNoQuestions = true
            }
        }
        res.render("room", {
            roomid: roomid,
            questions: questions,
            questionsRead: questionsRead,
            isNoQuestions: isNoQuestions
        });
    },
    enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}