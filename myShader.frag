precision mediump float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform float u_saturation;


void main() {
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  vec3 texCol = texture2D(tex0, uv).rgb;
  vec3 col;

  float gray = 0.299*texCol.r + 0.587*texCol.g + 0.114*texCol.b;
  col = u_saturation*texCol + (1.-u_saturation) * vec3(gray);

  gl_FragColor = vec4(col, 1.0);
}