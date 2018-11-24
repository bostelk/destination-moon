const THREE = require('three')

class ReflectiveBall {

  constructor (scene, params) {
    this.scene = scene;

    this.root = new THREE.Group()
    this.group = new THREE.Group()
    this.root.add(this.group)

    this.material = new THREE.MeshBasicMaterial({
        envMap: scene.scene.background
    });

    this.mesh = new THREE.Mesh(new THREE.SphereGeometry( 1, 32, 32 ), this.material);
    this.group.add(this.mesh);
  }

  update (params, time, frameDiff, allParams) {
    // threejs scene...
    this.material.envMap = this.scene.scene.background;

    this.group.position.x = params.posX
    this.group.position.y = params.posY
    this.group.position.z = params.posZ
    this.group.rotation.x = params.rotX
    this.group.rotation.y = params.rotY
    this.group.rotation.z = params.rotZ
    this.group.scale.set(params.scale, params.scale, params.scale)
  }
}

/** HEDRON TIP **
  Class must be exported as a default.
**/
module.exports = ReflectiveBall
