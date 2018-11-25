const THREE = require('three'),
  EffectComposer = require('three-effectcomposer')(THREE)
require('../../shared/shaders/DotScreenShader')(THREE)

class DotScreen {

  constructor(scene, meta, params) {
    this.effect = new EffectComposer.ShaderPass( THREE.DotScreenShader );
    this.effect.uniforms.scale.value = 4.0;

    scene.addPost(this.effect);
    this.scene = scene;
  }

  destructor(scene){
    scene.removePost(this.effect);
  }

  update(params, time, delta, allParams) {
    this.effect.uniforms.scale.value = params.scale;
  }

}

/** HEDRON TIP **
  Class must be exported as a default.
**/
module.exports = DotScreen
