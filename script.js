let DEFAULT_COLOR = '#000000';
let DEFAULT_SIZE = 16;
let DEFAULT_MODE = 'color';

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;


function setCurrentColor(newColor){
  currentColor = newColor;
}

function setCurrentSize(newSize){
  currentSize = newSize;
}

function setCurrentMode(newMode){
  activateButton(newMode);
  currentMode = newMode ;
}

const colorModeBtn = document.getElementById('colorMode');
const randomModeBtn = document.getElementById('randomMode');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
const colorPicker = document.getElementById('colorPicker');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
const gridToggle = document.getElementById('gridToggle');
const sketchPad = document.getElementById('sketchPad');

colorModeBtn.onclick = ()=> setCurrentMode('color');
randomModeBtn.onclick = () => setCurrentMode('random');
eraserBtn.onclick = () => setCurrentMode('eraser'); 
clearBtn.onclick = () => reload();
colorPicker.oninput =(e)=>setCurrentColor(e.target.value);
slider.onmousemove =(e) =>updateSizeValue(e.target.value);
slider.onchange = (e)=> updateSize(e.target.value);


function updateSizeValue(value){
  sliderValue.innerHTML = `${value}`;
}

function updateSize(value){
  setCurrentSize(value);
  updateSizeValue(value)
  reload();
}

function reload(){
  clear();
  setupGrid(currentSize);
}

function clear(){
  sketchPad.innerHTML='';
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown=false);

function setupGrid(size) {
  sketchPad.style.gridTemplateColumns = `repeat(${size},1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${size},1fr)`; 

  for(let i =0;i<size*size;i++){
    const div = document.createElement('div');
    div.classList.add('grid-border');
    div.addEventListener('mousedown',changeColor);
    div.addEventListener('mouseover', changeColor);
    sketchPad.appendChild(div);
  }
}

function changeColor(e){
  if(e.type ==='mouseover' & !mouseDown) return;
  if(currentMode ==='color'){
    e.target.style.backgroundColor = currentColor;
  }
  else if(currentMode === 'random'){
    const randomRed = Math.floor(Math.random()*256);
    const randomGreen = Math.floor(Math.random()*256);
    const randomBlue = Math.floor(Math.random()*256);
    
    e.target.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
  }
  else if(currentMode === 'eraser'){
    e.target.style.backgroundColor = 'white';
  }
}

function activateButton(newMode){
  if(currentMode==='random'){
    randomModeBtn.classList.remove('active');
  }else if(currentMode==='color'){
    colorModeBtn.classList.remove('active');
  }else if(currentMode==='eraser'){
    eraserBtn.classList.remove('active');
  }

  if(newMode === 'random'){
    randomModeBtn.classList.add('active');
  }else if(newMode === 'color'){
    colorModeBtn.classList.add('active');
  }else if(newMode === 'eraser'){
    eraserBtn.classList.add('active');
  }
}


window.onload=()=>{
  setupGrid(DEFAULT_SIZE);
  activateButton(DEFAULT_MODE);
}