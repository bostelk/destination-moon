const THREE = require('three'),
  EffectComposer = require('three-effectcomposer')(THREE)
require('../../shared/shaders/RGBShiftShader')(THREE)

class RGBShift {

  constructor(scene, meta, params) {
    this.effect = new EffectComposer.ShaderPass( THREE.RGBShiftShader );
    this.effect.uniforms.amount.value = 0.0015;

    scene.addPost(this.effect);
    this.scene = scene;
  }

  destructor(scene){
    scene.removePost(this.effect);
  }

  update(params, time, delta, allParams) {
    this.effect.uniforms.amount.value = params.amount;
  }

}

/** HEDRON TIP **
  Class must be exported as a default.
**/
module.exports = RGBShift
