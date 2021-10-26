const playerJerseyImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv15yWPTBlh19o8oYoEvHKv3tXVa9m30DIDg&usqp=CAU"
const goalkeeperImg = "https://shop.inkholic.in/wp-content/uploads/2019/10/navy-blue-back-side.jpg";
 //elements:
 const img = document.getElementById('playerJersey');
 const playerName = document.getElementById('playerName');
 const playerNumber = document.getElementById('playerNumber');
 const ControlSect = document.getElementById('ControlSect');
 const createPlayerSection = document.getElementById('createPlayerSection');
 const createGoalkeeperSect = document.getElementById('createGoalkeeperSect');
 const SearchPlayerSect = document.getElementById('SearchPlayerSect');
 const createPlayerSecBtn = document.getElementById('createPlayerSecBtn');
 const createGoalkeeperSecBtn = document.getElementById('createGoalkeeperSecBtn');
 const GetPlayerDetBtn = document.getElementById('GetPlayerDetBtn');
 const SetPlayerDetBtn = document.getElementById('SetPlayerDetBtn');
 //Event Listeners
 createPlayerSecBtn.addEventListener('click', ()=>{
    ControlSect.style.visibility = 'hidden';
    createPlayerSection.style.visibility = 'visible';
    const backBtn = document.createElement('button');
    backBtn.classList.add('returnBtn');
    backBtn.innerHTML = '&#8592';
    createPlayerSection.append(backBtn);
    backBtn.addEventListener('click', ()=>{
        ControlSect.style.visibility = 'visible';
        createPlayerSection.style.visibility = 'hidden';
        backBtn.remove()
    })
 })
 createGoalkeeperSecBtn.addEventListener('click', ()=>{
    ControlSect.style.visibility = 'hidden';
    createGoalkeeperSect.style.visibility = 'visible';
    const backBtn = document.createElement('button');
    backBtn.classList.add('returnBtn');
    backBtn.innerHTML = '&#8592';
    createGoalkeeperSect.append(backBtn);
    backBtn.addEventListener('click', ()=>{
        ControlSect.style.visibility = 'visible';
        createGoalkeeperSect.style.visibility = 'hidden';
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
})