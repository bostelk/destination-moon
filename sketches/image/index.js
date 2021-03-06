const THREE = require('three')

class Image {

  constructor (scene) {
    this.scene = scene;
    this.root = new THREE.Group()
    this.group = new THREE.Group()
    this.root.add(this.group)

    this.texture = new THREE.TextureLoader().load(__dirname+"\\textures\\starmap_g4k.jpg");

    this.basicMat = new THREE.MeshBasicMaterial(
      { map: this.texture }
    )

    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1, 1), this.basicMat);
    this.group.add(this.mesh);

  }

  update (params, time, frameDiff, allParams) {
    this.group.position.set(params.posX,params.posY,params.posZ);
    this.group.rotation.set(params.rotX,params.rotY,params.rotZ);
    this.group.scale.set(params.scaleX, params.scaleY, 1);
  }


}

/** HEDRON TIP **
  Class must be exported as a default.
**/
module.exports = Image
