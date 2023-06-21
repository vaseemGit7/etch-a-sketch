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


function updateGrid(userInput) {
  for(let i =0;i<userInput * userInput;i++){
    const div = document.createElement('div');
    div.classList.add('grid');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    sketchPad.appendChild(div);
    sketchPad.style.gridTemplateColumns = `repeat(${userInput}, 2fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${userInput}, 2fr)`; 
  }
}

updateGrid(userInput);