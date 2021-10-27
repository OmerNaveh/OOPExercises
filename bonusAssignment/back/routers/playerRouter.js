const Classes = require('../FootballClass');
const express = require('express');
const fs = require('fs');
const router = express.Router();
router.use(express.json())


router.post('/create',  function(req,res){
    try {
        const playerInfo = req.body.body.info;
        const newPlayer =  new Classes.Player(playerInfo[0],playerInfo[1],playerInfo[2],playerInfo[3],playerInfo[4],playerInfo[5],playerInfo[6],playerInfo[7])
        buildFileForPlayer(playerInfo[4], newPlayer);
        res.send('user created')
    } catch (error) {
           console.log(error) 
    }
})

router.get('/get', function(req, res){
try {
    const playerId = req.headers.id;
    const content = fs.readFileSync(`./playersDataBase/${playerId}.json`)
    const jsContent = JSON.parse(content);
    jsContent[0] = jsContent.firstName
    jsContent[1] = jsContent.surName
    jsContent[2]= jsContent.salary;
    jsContent[3]= jsContent.age;
    jsContent[4] = playerId;
    if(jsContent.hasOwnProperty('position')){
        jsContent[5]= jsContent.position;
        jsContent[6]= jsContent.strongLeg;
        jsContent[7]= jsContent.celebrationSentnce;
    }
    else{
        jsContent[5]= jsContent.isLeftHanded;
        jsContent[6]= jsContent.lastGoalConceeded;
    }
    res.send(jsContent)

} catch (error) {
    res.status(404).send(error)
}
})

router.put('/set', (req,res)=>{
    const playerId = req.body.headers.id;
    const body = req.body.body.info
    const content = fs.readFileSync(`./playersDataBase/${playerId}.json`)
    const jsContent = JSON.parse(content);
    jsContent.salary = body[0];
    jsContent.age = body[1];
    if(jsContent.hasOwnProperty('position')){
        jsContent.position = body[2] ;
        jsContent.celebrationSentnce = body[3] ;
    }else{
        jsContent.lastGoalConceeded = body[2];
    }
    const stringified = JSON.stringify(jsContent)
    fs.writeFileSync(`./playersDataBase/${playerId}.json`, stringified)
    res.send('changed successfully')
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