precision highp float;
precision highp int;

varying vec2 local;

uniform sampler2D tex;
uniform int mirrorX;
uniform int mirrorY;
uniform float scale;
uniform float phase;
uniform float size;

void main()
{
    vec2 uv = local;
    uv.x += phase;
    vec3 col = texture2D(tex, uv).rgb;

    col *= local.x;

    gl_FragColor = vec4(col, 1.0);
}
