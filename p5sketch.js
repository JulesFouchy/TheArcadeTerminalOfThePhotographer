let myShader
let cam
let img
let pg

const W = 640
const H = 480

function preload(){
  myShader = loadShader('myShader.vert', 'myShader.frag')
}

function setup() {
  createCanvas(320, 480)
  img = createImage(W, H)
  pg = createGraphics(W, H, WEBGL)

  cam = createCapture(VIDEO)
  cam.hide()
}

function draw() {
  background(100)
  pg.shader(myShader)
  myShader.setUniform('tex0', img)
  pg.rect(0,0,width, height)
  //imageMode(CENTER)
  image(pg, 0, 0, 320, 240)
  image(img, 0, 240, 320, 240)
}

function mousePressed(){
  img = cam.get(0, 0, cam.width, cam.height)
  img.resize(W, H)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}