precision mediump float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;


void main() {

  vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv.y = 1.0 - uv.y;

  // get the webcam as a vec4 using texture2D
  vec4 tex = texture2D(tex0, uv);

  float gray = (tex.r+tex.g+tex.b)/3.;
  tex.rgb = vec3(gray);

  gl_FragColor = tex;
  
}