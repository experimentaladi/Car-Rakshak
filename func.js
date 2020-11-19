const gameArea = document.querySelector(".gameArea");
const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
document.addEventListener("keydown", keyDown);
document.addEventListener('keyup', keyUp); 

startScreen.addEventListener("clicked", start);

let keys={ ArrowUp: false, ArrowDown:false, ArrowRight:false, ArrowLeft:false};

function keyDown(e){
    e.preventDefault();
    keys[e.key] = true;
    console.log(e.key);
    console.log(keys);
}
function keyUp(e){
    e.preventDefault();
    keys[e.key] = false;

    console.log(e.key);
}
function gamePlay(){
    console.log("hey i am clicked");
}
function start(){
    window.requestAnimationFrame(gamePlay);
}






