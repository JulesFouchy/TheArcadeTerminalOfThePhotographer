let bP5TakeAPicture = false
let bP5DownloadMyImage = false

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
  myShader.setUniform('u_saturation', SLIDERS.saturation)
  myShader.setUniform('u_contrast', SLIDERS.contrast)
  myShader.setUniform('u_luminosity', SLIDERS.luminosity)
  pg.rect(0,0,width, height)
  //imageMode(CENTER)
  image(pg, 0, 0, 320, 240)
  image(img, 0, 240, 320, 240)
  if (bP5DownloadMyImage){
  	console.log("Downloading. . . ")
  	pg.save("Hello.jpg")
  	bP5DownloadMyImage = false
  	console.log("Downloaded !")
  }
  if (bP5TakeAPicture) {
	  img = cam.get(0, 0, cam.width, cam.height)
	  img.resize(W, H)
	  bP5TakeAPicture = false
	}
}