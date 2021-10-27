const playerJerseyImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv15yWPTBlh19o8oYoEvHKv3tXVa9m30DIDg&usqp=CAU"
const goalkeeperImg = "https://shop.inkholic.in/wp-content/uploads/2019/10/navy-blue-back-side.jpg";
 //elements:
 const img = document.getElementById('playerJersey');
 const playerName = document.getElementById('playerName');
 const playerNumber = document.getElementById('playerNumber');
 const jerseySect = document.getElementById('jerseySect');
 const ControlSect = document.getElementById('ControlSect');
 //create Player
 const createPlayerSecBtn = document.getElementById('createPlayerSecBtn');
 const createPlayerSection = document.getElementById('createPlayerSection');
 const createPlayerBtn = document.getElementById('createPlayerBtn');
 const lastNameInputPlayer = document.getElementById('lastNameInputPlayer');
 const idInputPlayer = document.getElementById('idInputPlayer');
 //create goalkeeper
 const createGoalkeeperSecBtn = document.getElementById('createGoalkeeperSecBtn');
 const createGoalkeeperSect = document.getElementById('createGoalkeeperSect');
 const createGoalKepperBtn = document.getElementById('createGoalKepperBtn');
 const goaleeLastNameInput = document.getElementById('goaleeLastNameInput');
 const goaleeIdInput = document.getElementById('goaleeIdInput');
 //searchPlayer
 const searchPlayerDetBtn= document.getElementById('searchPlayerDetBtn');
 const SearchPlayerSect = document.getElementById('SearchPlayerSect');
 const searchInput = document.getElementById('searchInput');
 //getPlayerInfo
 const GetPlayerDetBtn = document.getElementById('GetPlayerDetBtn');
 const getPlayerInfoSect = document.getElementById('getPlayerInfoSect');
 const infoLabels = document.getElementsByClassName('playerInfo');
 const playerInfoSect = document.getElementById('playerInfoSect') //show additional data;
 const goalkeeperInfoSect = document.getElementById('goalkeeperInfoSect') //show additional data;
 const playerlabels= document.getElementsByClassName('isplayerInfo')
 const goalkeeperlabels= document.getElementsByClassName('isgoalkeeperInfo')
 //setPlayerInfo
 const setPlayerInfoSect = document.getElementById('setPlayerInfoSect');
 const SetPlayerDetBtn = document.getElementById('SetPlayerDetBtn');
 const setInfoBtn = document.getElementById('setInfoBtn');
 const playerSet = document.getElementById('playerSet');
 const goalKeeperSet = document.getElementById('goalKeeperSet');
 const setInfo= document.getElementsByClassName('setInfo')
 const isGoalsetInfo= document.getElementsByClassName('isGoalsetInfo')
 const isPlayersetInfo= document.getElementsByClassName('isPlayersetInfo')
 
 //Event Listeners
 createPlayerSecBtn.addEventListener('click', ()=>{
    ControlSect.style.visibility = 'hidden';
    createPlayerSection.style.visibility = 'visible';
    img.src=playerJerseyImg;
    idInputPlayer.addEventListener('keyup', ()=>{showJerseyCool(idInputPlayer.value,undefined)})
    lastNameInputPlayer.addEventListener('keyup', ()=>{showJerseyCool(undefined,lastNameInputPlayer.value)})
    jerseySect.style.visibility = 'visible';
    const backBtn = document.createElement('button');
    backBtn.classList.add('returnBtn');
    backBtn.innerHTML = '&#8592';
    createPlayerSection.append(backBtn);
    backBtn.addEventListener('click', ()=>{
        ControlSect.style.visibility = 'visible';
        createPlayerSection.style.visibility = 'hidden';
        jerseySect.style.visibility = 'hidden';
        hideJersey();
        backBtn.remove()
    })
 })
 createGoalkeeperSecBtn.addEventListener('click', ()=>{
    ControlSect.style.visibility = 'hidden';
    createGoalkeeperSect.style.visibility = 'visible';
    img.src=goalkeeperImg;
    goaleeIdInput.addEventListener('keyup', ()=>{showJerseyCool(goaleeIdInput.value,undefined)})
    goaleeLastNameInput.addEventListener('keyup', ()=>{showJerseyCool(undefined,goaleeLastNameInput.value)})
    jerseySect.style.visibility = 'visible';
    const backBtn = document.createElement('button');
    backBtn.classList.add('returnBtn');
    backBtn.innerHTML = '&#8592';
    createGoalkeeperSect.append(backBtn);
    backBtn.addEventListener('click', ()=>{
        ControlSect.style.visibility = 'visible';
        createGoalkeeperSect.style.visibility = 'hidden';
        jerseySect.style.visibility = 'hidden';
        hideJersey();
        backBtn.remove()
    })
 })
 GetPlayerDetBtn.addEventListener('click', ()=>{
    ControlSect.style.visibility = 'hidden';
    SearchPlayerSect.style.visibility = 'visible';
    const backBtn = document.createElement('button');
    backBtn.classList.add('returnBtn');
    backBtn.innerHTML = '&#8592';
    SearchPlayerSect.append(backBtn);
    backBtn.addEventListener('click', ()=>{
        ControlSect.style.visibility = 'visible';
        SearchPlayerSect.style.visibility = 'hidden';
        backBtn.remove()
    })
    searchPlayerDetBtn.addEventListener('click', searchBtnCap)
 })
 SetPlayerDetBtn.addEventListener('click', ()=>{
    ControlSect.style.visibility = 'hidden';
    SearchPlayerSect.style.visibility = 'visible';
    const backBtn = document.createElement('button');
    backBtn.classList.add('returnBtn');
    backBtn.innerHTML = '&#8592';
    SearchPlayerSect.append(backBtn);
    backBtn.addEventListener('click', ()=>{
        ControlSect.style.visibility = 'visible';
        SearchPlayerSect.style.visibility = 'hidden';
        backBtn.remove()
    })
    searchPlayerDetBtn.addEventListener('click',searchBtnCap2)
})
createPlayerBtn.addEventListener('click', createPlayerFunc)
createGoalKepperBtn.addEventListener('click', createGoalkeeperFunc)
//helping functions
async function searchBtnCap(){
    SearchPlayerSect.style.visibility = 'hidden';
    getPlayerInfoSect.style.visibility = 'visible';
    await getplayerDetFunc(searchInput.value);
    searchInput.value= ""; //reset value after press
    const backBtn = document.createElement('button');
    backBtn.classList.add('returnBtn');
    backBtn.innerHTML = '&#8592';
    getPlayerInfoSect.append(backBtn);
    backBtn.addEventListener('click', ()=>{
        ControlSect.style.visibility = 'visible';
        getPlayerInfoSect.style.visibility = 'hidden';
        resetPlayerDetails();
        hideJersey();
        backBtn.remove()})
        searchPlayerDetBtn.removeEventListener('click', searchBtnCap)
}
function searchBtnCap2(){
    SearchPlayerSect.style.visibility = 'hidden';
    setPlayerInfoSect.style.visibility = 'visible';
    const playerId = searchInput.value;
    whatDetCanChange(playerId)
    setInfoBtn.addEventListener('click', ()=>{putChanges(playerId)})
    searchInput.value= ""; //reset value after press
    const backBtn = document.createElement('button');
    backBtn.classList.add('returnBtn');
    backBtn.innerHTML = '&#8592';
    setPlayerInfoSect.append(backBtn);
    backBtn.addEventListener('click', ()=>{
        ControlSect.style.visibility = 'visible';
        setPlayerInfoSect.style.visibility = 'hidden';
        removeExtDet()
        hideJersey();
        backBtn.remove()})
        searchPlayerDetBtn.removeEventListener('click', searchBtnCap2)
}
async function createPlayerFunc(e){
    try{
        e.preventDefault();
        const toSend ={};
        const allInputData = document.getElementsByClassName('PlayerInput')
        let i =0;
        for(let val of allInputData){
        toSend[i] = val.value;
        if(i <6){
            val.value="";
        }
        i++;
        }
        await axios.post('http://localhost:8080/player/create',{
            headers:{},
            body:{
                info : toSend
            }
        })
        alert('player was successfully created')
    }catch(error){
        alert(`there was an error ${error}`)
    }
}
async function createGoalkeeperFunc(e){
    try{
        e.preventDefault();
        const toSend ={};
        const allInputData = document.getElementsByClassName('GoalKeeperInput')
        let i =0;
        for(let val of allInputData){
        toSend[i] = val.value;
        if(i !==5){
            val.value="";
        }
        i++;
        }
        await axios.post('http://localhost:8080/goalkeeper/create',{
            headers:{},
            body:{
                info : toSend
            }
        })
        alert('player was successfully created')
    }catch(error){
        alert(`there was an error ${error}`)
    }
}
async function getplayerDetFunc(playerId){
    try {    
        const response = await axios.get('http://localhost:8080/player/get', {headers:{id:playerId}});
        const data = response.data;
        showJersey(data) //displays jersey
        if(data.hasOwnProperty('position')){
            playerInfoSect.style.visibility = 'visible'
            for(let i=0; i< infoLabels.length ; i++){
                infoLabels[i].textContent += data[i];
            }
            for (i=0; i<playerlabels.length ; i++)
            {
                playerlabels[i].textContent += data[i+5]
            }
        }
        else{
            goalkeeperInfoSect.style.visibility = 'visible'
            for(let i=0; i< infoLabels.length ; i++){
                infoLabels[i].textContent += data[i];
            }
            for (i=0; i<goalkeeperlabels.length ; i++)
            {
                goalkeeperlabels[i].textContent += data[i+5]
            }
        }
    } catch (error) {
        alert(`cant get player ${error}`) 
    }
}
function resetPlayerDetails(){
    playerInfoSect.style.visibility = 'hidden'
    goalkeeperInfoSect.style.visibility = 'hidden'
    infoLabels[0].textContent = 'First Name: '
    infoLabels[1].textContent = 'Last Name: '
    infoLabels[2].textContent = 'Salary: '
    infoLabels[3].textContent = 'Age: '
    infoLabels[4].textContent = 'Id: '
    playerlabels[0].textContent = 'Position: '
    playerlabels[1].textContent = 'Strong Leg: '
    playerlabels[2].textContent = 'Celebration Sentence: '
    goalkeeperlabels[0].textContent = 'Is Left Handed: '
    goalkeeperlabels[1].textContent = 'Last Goal Conceeded: '
}
async function whatDetCanChange(playerId){
    try {    
        const response = await axios.get('http://localhost:8080/player/get', {headers:{id:playerId}});
        const data = response.data;
        showJersey(data);
        if(data.hasOwnProperty('position')){
            playerSet.style.visibility = 'visible'
            return true
        }
        else{
            goalKeeperSet.style.visibility = 'visible'
            return false;
           
        }
    } catch (error) {
        alert(`cant get player ${error}`) 
    }
}
function removeExtDet(){
    playerSet.style.visibility = 'hidden'
    goalKeeperSet.style.visibility = 'hidden'

}
async function putChanges(playerId){
    try {
        const x = await whatDetCanChange(playerId);
        const sendData = {};
        let i = 0;
        for(let info of setInfo){
            sendData[i] = info.value;
            i++;
        }
        if(x){
            for(let info of isPlayersetInfo){
                sendData[i] = info.value;
                i++;
            }
        }else{
            for(let info of isGoalsetInfo){
                sendData[i] = info.value;
                i++;
            }
        }
        await axios.put('http://localhost:8080/player/set', {
            headers:{id: playerId} ,
            body:{
                info:sendData
            }
        })
        alert('changes were made')
    } catch (error) {
          alert('wasnt able to make changes')  
    }
}
function showJersey(data){
    if(data.hasOwnProperty('position')){
        img.src = playerJerseyImg;
    }
    else{
        img.src = goalkeeperImg;
    }
    playerName.textContent = data.surName;
    playerNumber.textContent = data[4];
    jerseySect.style.visibility = 'visible';
}
function hideJersey(){
    jerseySect.style.visibility = 'hidden';
    playerNumber.textContent = '';
    playerName.textContent = '';
}
function showJerseyCool(id,lastName){
    if(lastName) {playerName.textContent = lastName;}
    if(id){playerNumber.textContent = id}
    jerseySect.style.visibility = 'visible';
}
