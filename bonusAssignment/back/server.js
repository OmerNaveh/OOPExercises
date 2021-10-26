const Classes = require('./FootballClass');
const express = require('express');
const cors = require('cors');
const app = express();
const playerRouter = require('./routers/playerRouter')
const goalKepperRouter = require('./routers/goalKeeperRouter')

app.listen(8080, ()=>{
    console.log('Server Running')
})
app.use(cors());
app.use('/player', playerRouter)
app.use('/goalkeeper', goalKepperRouter)