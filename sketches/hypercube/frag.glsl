precision highp float;
precision highp int;

varying vec2 local;
varying vec3 col;

uniform sampler2D tex;
uniform int mirrorX;
uniform int mirrorY;
uniform float scale;
uniform float phase;
uniform float size;

void main()
{
    gl_FragColor = vec4(1.0);
}
