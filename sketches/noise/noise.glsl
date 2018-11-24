varying vec2 local;
uniform sampler2D iChannel0;
uniform float intensity;
uniform float iTime;
uniform vec2 iResolution;

// src: https://www.shadertoy.com/view/4d3GW7
highp float random_2281831123(vec2 co)
{
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}

void main()
{
    float noise = clamp((random_2281831123(local + sin(iTime * 0.1)) * 0.5 + 0.5),0.90,1.);
    gl_FragColor = noise * texture2D(iChannel0, local);
}

