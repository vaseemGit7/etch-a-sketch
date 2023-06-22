let DEFAULT_COLOR = '#000000';
let DEFAULT_SIZE = 16;
let DEFAULT_MODE = 'color';

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;

const colorModeBtn = document.getElementById('colorMode');
const randomModeBtn = document.getElementById('randomMode');
const eraserBtn = document.getElementById('eraser');
const clear = document.getElementById('clear');
const colorPicker = document.getElementById('colorPicker');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
const gridToggle = document.getElementById('gridToggle');
const sketchPad = document.getElementById('sketchPad');

colorModeBtn.onclick = ()=> setCurrentMode('color');
randomModeBtn.onclick = () => setCurrentMode('random');
eraserBtn.onclick = () => setCurrentMode('eraser'); 
colorPicker.oninput =(e)=>setCurrentColor(e.target.value);
slider.onmousemove =(e) =>updateSizeValue(e.target.value);
slider.onchange = (e)=> updateSize(e.target.value);

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
  sketchPad.innerHTML='';
  setupGrid(currentSize);
}

function changeColor(){

}

function setupGrid(size) {
  sketchPad.style.gridTemplateColumns = `repeat(${size},1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${size},1fr)`; 
  for(let i =0;i<size*size;i++){
    const div = document.createElement('div');
    gridToggle.addEventListener('click',function(){
      div.classList.toggle('grid-border');
    })
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = currentColor;
    })
    sketchPad.appendChild(div);
  }
}

window.onload=()=>{
  setupGrid(DEFAULT_SIZE);
}