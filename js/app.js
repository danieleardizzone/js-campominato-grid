const btnDOMElement = document.getElementById('btn-start');

const gridDOMElement = document.querySelector('.grid');

let difficulty = 'facile';


btnDOMElement.addEventListener('click', function(){

    gridDOMElement.innerHTML = '';

    difficultyFunc(100);

    cellDOMElement = document.querySelectorAll('.cell');
    console.log(cellDOMElement);
})

function difficultyFunc(cellNumber) {
    for (i = 0; i < cellNumber; i++){
        // console.log(i + 1);
    
        cellString = `<div class="cell">${i + 1}</div>`;
        // console.log(cellString)
    
        gridDOMElement.innerHTML += cellString;
    }
}

