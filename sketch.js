function setup() 
{
createCanvas(outerWidth, outerHeight);
    background(100);
}

function draw() //loops everytime
{
  noStroke();
    fill(250,250,200,50);
  ellipse(mouseX, mouseY, 50, 50);
}
function mousePressed()
{
    background(100);
}
