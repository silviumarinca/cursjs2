import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';

const rows = 20;
const columns = 10;
let tetrisScore = 0;
let intervalId;
let gameStart=false;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape ; 
let nextShape;  
 
//document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
let movement;
const  startGame=document.getElementById('startGame');
function onStartControi(el){
    grid.reset();
    el.classList.add('clicked');
    el.setAttribute('disabled','disabled');
    el.innerHTML = 'Started';
}


function gameOverfunc(el){ 
   ;
    el.classList.remove('clicked');
    el.innerHTML = 'Start Game';
    el.removeAttribute('disabled','disabled');
    tetrisScore=0;
    document.getElementById('score').innerText = 0;

}
function drawNextShape(tmpl,color){
    let items =[...document.querySelectorAll('.next_shape div')];
    items.forEach(item=>{
        item.style.backgroundColor="rgb(186, 202, 166)";
    })
     for(let i = 0;i < tmpl.length; i++){
        for(let j = 0;j < tmpl[0].length; j++){
            if(tmpl[i][j] == 1){
            items[(i*3)+j].style.backgroundColor=color
            }
        }

     }
   
}
document.addEventListener("keydown", event => {
    if(gameStart && movement.canMove)//bug tetris in cazul in care forma ajunge pe alta forma si mutam dreapta sau stanga
    switch (event.key) {
        case 'ArrowUp':
            movement.rotate();
            break;
        case 'ArrowDown':
            movement.down(intervalId,gameOverfunc.bind({},startGame));
            break;
        case 'ArrowLeft':
            movement.left();
            console.log('left');
            break;
        case 'ArrowRight':
            movement.right();
            console.log('right');
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red'];
            console.log(getRandomInt(colors.length - 1));
            shape.color = colors[getRandomInt(colors.length - 1)];
            shape.draw();
            break;
    }
});


const animate = () => {
    if (movement.canMove) {
        movement.down(intervalId,gameOverfunc.bind({},startGame));
        console.log('Moving');
    } else {
        console.log('Stopped');
        clearInterval(intervalId);

        //Score
        let score = grid.score();
        if (score > 0) {
            tetrisScore += score;
            document.getElementById('score').innerText = tetrisScore;
            grid.draw();
        }
        shape = !!nextShape?nextShape: generateNewShape(grid.cells);
        nextShape= generateNewShape(grid.cells);
        drawNextShape(nextShape.template,nextShape.color)
  //      document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
        movement = new Movement(shape, grid.cells);
        intervalId = setInterval(animate, 200);
    }
}


startGame.addEventListener('click', (ev) => {
    gameStart=true;
      shape   = generateNewShape(grid.cells);
      nextShape  = generateNewShape(grid.cells);
      drawNextShape(nextShape.template,nextShape.color)
    onStartControi(ev.target)
    movement= new Movement(shape, grid.cells);
    intervalId = setInterval(animate, 200);
});


// let shapetest=generateNewShape(grid.cells);
// console.log(shapetest);
// drawNextShape(shapetest.template,shapetest.color)