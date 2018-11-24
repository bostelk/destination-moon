const THREE = require('three'),
  EffectComposer = require('three-effectcomposer')(THREE)
const glsl = require('glslify')
const frag = glsl.file('./bloom.glsl')

class Bloom {

  constructor(scene, meta, params) {
    var vert = "varying vec2 local;\n" +
      "void main(){\n" +
      "	local = uv;\n" +
      "	gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n" +
      "}";

    this.bloom = new EffectComposer.ShaderPass({
      uniforms: {
        iChannel0: {
          type: "t",
          value: null
        },
        intensity: {
          type: "f",
          value: 1
        },
        iTime: {
          type: "f",
          value: 1
        },
        iResolution: {
          type: "2f",
          value: new THREE.Vector2(0,0)
        }
      },
      vertexShader: vert,
      fragmentShader: frag

    }, "iChannel0");

    scene.addPost(this.bloom);
    this.scene = scene;

  }

  destructor(scene){
    scene.removePost(this.bloom);
  }

  update(params, time, delta, allParams) {
    this.bloom.uniforms.intensity.value = params.intensity;
    this.bloom.uniforms.iTime.value = params.phase;
    this.bloom.uniforms.iResolution = this.scene.renderer.getSize();
  }

}

/** HEDRON TIP **
  Class must be exported as a default.
**/
module.exports = Bloom
