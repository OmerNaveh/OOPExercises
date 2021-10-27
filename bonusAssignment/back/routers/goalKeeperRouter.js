const Classes = require('../FootballClass');
const express = require('express');
const router = express.Router();
router.use(express.json())
const fs= require('fs')

// create goalKeeper == axios.post('http://localhost:8080/goalkeeper/create'
router.post('/create',  function(req,res){
    try {
        const playerInfo = req.body.body.info;
        const newPlayer =  new Classes.GoalKeeper(playerInfo[0],playerInfo[1],playerInfo[2],playerInfo[3],playerInfo[4],playerInfo[5],playerInfo[6])
        buildFileForPlayer(playerInfo[4], newPlayer);
        res.send('user created')
    } catch (error) {
           console.log(error) 
    }
})


function buildFileForPlayer(playerName,data){
    if(fs.existsSync(`./playersDataBase/${playerName}.json`)){
        return
    }
    else{
        const stringData = JSON.stringify(data)
        fs.writeFileSync(`./playersDataBase/${playerName}.json`, stringData)
    }
}
module.exports = router;
