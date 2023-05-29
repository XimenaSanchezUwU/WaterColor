
let img;
function preload() {
  img = loadImage('Images/Modi.png');
}

//Hacer la imagen menor a 1000 pixeles


function setup() {
  createCanvas(511,784);
}

function draw() {
  background(220);
  image(img, 0, 0, 511, 784);
  text('¿Hacia donde voy con todo esto?', 33, 411);
  textFont('Bradley Hand ITC');
  textSize(30);
  fill(random(122), 132, 123);
  text('¿Hacia donde voy con todo esto?', random(100), 111);
  textFont('Bradley Hand ITC');
  textSize(random(40));
  fill(11, 32, 123);
  text('¿Hacia donde voy con todo esto?', 20, random(631));
  textFont('Bradley Hand ITC');
  textSize(35);
  fill(222,1,12);
}