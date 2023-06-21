let userInput = prompt("Enter the grid size");

const sketchPad = document.getElementById('sketchPad');

/*function setupGrid() {
  
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    sketchPad.appendChild(div); 
}
    console.log("working");
}    

setupGrid();*/

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