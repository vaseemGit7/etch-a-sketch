let DEFAULT_COLOR = '#000000';
let DEFAULT_SIZE = 16;
let DEFAULT_MODE = 'color';

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;

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

gridToggle.addEventListener('click',function(){
  gridToggle.classList.toggle('toggled'); 
})

function setCurrentColor(newColor){
  currentColor = newColor;
}

function setCurrentSize(newSize){
  currentSize = newSize;
}

function setCurrentMode(mode){
  currentMode = mode ;
  console.log(currentMode);
}

function updateSize(value){
  setCurrentSize(value);
  updateSizeValue(value)
  reload();
}

function updateSizeValue(value){
  sliderValue.innerHTML = `${value}`;
}

function reload(){
  clear();
  setupGrid(currentSize);
}

function clear(){
  sketchPad.innerHTML='';
}

function changeColor(e){
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

function setupGrid(size) {
  sketchPad.style.gridTemplateColumns = `repeat(${size},1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${size},1fr)`; 
  for(let i =0;i<size*size;i++){
    const div = document.createElement('div');
    div.classList.add('grid-border');
    gridToggle.addEventListener('click',function(){
      div.classList.toggle('grid-border');
    })
    div.addEventListener('mouseover', changeColor);
    sketchPad.appendChild(div);
  }
}

window.onload=()=>{
  setupGrid(DEFAULT_SIZE);
  
}