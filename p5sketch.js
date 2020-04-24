let myShader
let shaderColorGlitch
let cam
let img
let pg
let pg2

const W = 640
const H = 480

function preload(){
  myShader = loadShader('myShader.vert', 'myShader.frag')
  shaderColorGlitch = loadShader('myShader.vert', 'colorGlitch.frag')
}

function setup() {
  createCanvas(320, 480)
  img = createImage(W, H)
  pg = createGraphics(W, H, WEBGL)
  pg2 = createGraphics(W, H, WEBGL)

  cam = createCapture(VIDEO)
  cam.hide()
}

function draw() {
  background(100)
  pg.shader(myShader)
  // First pass
  myShader.setUniform('tex0', img)
  myShader.setUniform('u_saturation', SLIDERS.saturation)
  myShader.setUniform('u_contrast', SLIDERS.contrast)
  myShader.setUniform('u_luminosity', SLIDERS.luminosity)
  pg.rect(0,0,width, height)
  // Second pass with color glitch
  pg2.shader(shaderColorGlitch)
  shaderColorGlitch.setUniform('tex0', pg)
  shaderColorGlitch.setUniform('u_offsetX', SLIDERS.colorGlitchX)
  shaderColorGlitch.setUniform('u_offsetY', SLIDERS.colorGlitchY)
  pg2.rect(0,0,width, height)
  //imageMode(CENTER)
  image(pg2, 0, 0, 320, 240)
  image(img, 0, 240, 320, 240)
}

takeAPicture = () => {
    img = cam.get(0, 0, cam.width, cam.height)
    img.resize(W, H)
}

downloadImage = () => {
    console.log("Downloading. . . ")
    pg2.save("Hello.jpg")
    console.log("Downloaded !")
}