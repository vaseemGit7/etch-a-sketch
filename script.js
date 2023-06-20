const sketchPad = document.getElementById('sketchPad');

function setupGrid() {
  
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

setupGrid();


