console.log("javascript here!")


let theCanvas;

function setup(){
    console.log("p5 here yo!");
    theCanvas = createCanvas(windowWidth, windowHeight)
    background(0,255,0)

}

function draw(){
   noFill()
    ellipse(mouseX,mouseY, 100, 100)
}