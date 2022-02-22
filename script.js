/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1'); 
const c = canvas.getContext('2d'); 
canvas.width = 500; 
canvas.height = 700; 
const explosions = []; 
let canvasPosition = canvas.getBoundingClientRect(); 

class Explosion {
    constructor(x, y){
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth * 0.7; 
        this.height = this.spriteHeight * 0.7; 
        this.x = x - this.width / 2;
        this.y = y - this.height / 2; 
        this.image = new Image(); 
        this.image.src = "/assets/boom.png";
        this.frame = 0; 
        this.timer = 0; 
        this.sound = new Audio(); 
        this.sound.src = "/assets/explosion.wav";
    }
    //controls the rate the frame is updated 
    update(){
        if (this.frame == 0) this.sound.play(); 
        this.timer++;
        if (this.timer % 10 === 0) {
            this.frame++; 
        }
    }
    draw(){
        c.drawImage(this.image, this.spriteWidth * this.frame , 0 , this.spriteWidth, 
        this.spriteHeight , this.x, this.y , this.width, this.height); 
    }

};

window.addEventListener('click', function(e){
    createAnimation(e); 
});

function createAnimation(e){
    let positionX = e.x - canvasPosition.left - 25;
    let positionY = e.y - canvasPosition.top - 25;
    explosions.push(new Explosion(positionX, positionY));
}

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < explosions.length; i++){
        explosions[i].update();
        explosions[i].draw(); 
        //removes objects from array after done animating
        if (explosions[i].frame > 5){
            explosions.splice(i, 1); 
            i--; 
        }
    }
    requestAnimationFrame(animate); 
}
animate();