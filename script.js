const canvas = document.getElementById('canvas1'); 
const c = canvas.getContext('2d'); 
canvas.width = 500; 
canvas.height = 700; 
const explosins = []; 

class Explosion {
    constructor(x, y){
        this.x = x;
        this.y = y; 
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth * 0.5; 
        this.height = this.spriteHeight * 0.5; 
        this.image = new Image(); 
        this.image.src = "/assets/boom.png";
        this.frame = 0; 
    }
    update(){
        this.frame++; 
    }
    draw(){
        c.drawImage(this.image, this.spriteWidth * this.frame , 0 , this.spriteWidth, this.spriteHeight , this.x, this.y , this.width, this.height); 
    }
};