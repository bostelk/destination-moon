precision highp float;
precision highp int;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

varying vec2 local;
varying vec3 col;

uniform sampler2D tex;
uniform float phase;
uniform float heightBias;
uniform vec3 water;
uniform vec3 foliage;
uniform vec3 mountains;

float centerFalloff(float v, float center)
{
  float vv = max(0.0, 1.0-abs(v-center));
  return vv*vv;
}

void main(){
    local = uv;

    float height = texture2D(tex, position.xy + vec2(0., phase)).x;
    vec3 displacedPosition = vec3(position.x, position.y, heightBias * height);

    // Compute a color that simulates the coloration of terrain:
    // lowest terrain is blue as if water,
    // middle terrain is green as if folage,
    // highest terrain is white as if snow capped.
    col = centerFalloff(height, 0.1) * water + centerFalloff(height, 0.5) * foliage + centerFalloff(height, 0.9) * mountains;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition,1.0);
}
