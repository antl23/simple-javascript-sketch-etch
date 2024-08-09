const body = document.querySelector('body');
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const blackButton = document.querySelector('.black');
const eraserButton = document.querySelector('.eraser');
const sizeInput = document.querySelector('.size');
const newButton = document.querySelector('.new');

let isDraw = false;
let currentColor = 'black';
let size = 25;

function createGrid(size){
    container.innerHTML = '';
    container.style.width = size * 16 + 'px';
    container.style.height = size * 16 + 'px';
    container.setAttribute('draggable', 'false');
    for(let i = 0; i < size; i++){
        for(let j = 0; j<size;j++){
            const div = document.createElement('div');
            div.classList.add('square');
            div.setAttribute('draggable', 'false');
            container.appendChild(div);
            console.log('div');
            }
        }




const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    body.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDraw = true;
    console.log('mousedown');
    });
    
    body.addEventListener('mouseup', () => {
        isDraw = false;
        console.log('mouseup');
    });
    square.addEventListener('mouseover', () => {
        if(currentColor === 'black' && isDraw){
            square.style.backgroundColor = 'black';
            console.log('black');
        } else if(currentColor === 'eraser' && isDraw){
            square.style.backgroundColor = 'white';
            console.log('eraser');
        }
    });
    square.addEventListener('click', () => {
        if(currentColor === 'black'){
            square.style.backgroundColor = 'black';
            console.log('black');
        } else if(currentColor === 'eraser'){
            square.style.backgroundColor = 'white';
            console.log('eraser');
        }
    });
    square.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

});
}



createGrid(size);



blackButton.addEventListener('click', () => {
    currentColor = 'black';
    console.log('black');
});

eraserButton.addEventListener('click', () => {
    currentColor = 'eraser';
    console.log('eraser');
});

resetButton.addEventListener('click', () => {
    createGrid(size);
});

newButton.addEventListener('click', () => {
    size = sizeInput.value;
    console.log(size);
    if(size > 100){
        size = 100;
    }

    createGrid(size);

});

