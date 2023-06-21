let DEFAULT_COLOR = '#00000';
let DEFAULT_SIZE = 16;
let DEFAULT_MODE = 'color';

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;

const colorMode = document.getElementById('colorMode');
const randomMode = document.getElementById('randomMode');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const colorPicker = document.getElementById('colorPicker');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
const gridToggle = document.getElementById('gridToggle');
const sketchPad = document.getElementById('sketchPad');

slider.onmousemove =(e) =>updateSizeValue(e.target.value);
slider.onchange = (e)=> updateSize(e.target.value)

function setCurrentSize(newSize){
  currentSize = newSize;
}

function updateSize(value){
  setCurrentSize(value);
  reload();
}

function updateSizeValue(value){
  sliderValue.innerHTML = `${value}`;
}

function reload(){
  sketchPad.innerHTML='';
  setupGrid(currentSize);
}


function setupGrid(size) {
  sketchPad.style.gridTemplateColumns = `repeat(${size},1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${size},1fr)`; 
  for(let i =0;i<size*size;i++){
    const div = document.createElement('div');
    div.classList.add('grid');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = "black";
    })
    sketchPad.appendChild(div);
  }
}

window.onload=()=>{
  setupGrid(DEFAULT_SIZE);
}