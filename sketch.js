
var umbrella, drops

function preload(){

}

function setup(){
var canvas = createCanvas(windowWidth,windowHeight)
engine = Engine.create()
world = engine.world;

umbrella = new Umbrella(windowWidth,windowHeight);

}

function draw(){
    










    if(this.drops.position.y>height){
        Matter.Body.setPosition(this.rain,{x:RandomSource(0,400),y:RandomSource(0,400)})
    }
}   

