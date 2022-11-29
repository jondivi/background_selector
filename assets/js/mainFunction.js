//Each line tells the javascript to look/listen for something to
//happen in a specific area or ID and then to make some sort of function run
document.getElementById('blue').onclick = bluesClues
document.getElementById('orange').onclick = orangeDrink  
document.getElementById('green').onclick = goNinjaGreen
document.getElementById('yellow').onclick = mellowYellow

//This tells the javascript what will happen.
//In this case we are telling it to search for the 'body' of the document and change 
//the color of the background and the color of the font
function bluesClues() {
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 255)'
  document.querySelector('body').style.color = 'white'
}

function orangeDrink(){
  document.querySelector('body').style.backgroundColor = 'rgb(255, 165, 0)'
  document.querySelector('body').style.color = 'white'
}

function goNinjaGreen(){
  document.querySelector('body').style.backgroundColor = 'rgb(0, 128, 0)'
  document.querySelector('body').style.color = 'white'
}

function mellowYellow(){
  document.querySelector('body').style.background = 'rgb(255, 255, 0)'
  document.querySelector('body').style.color='red'
}