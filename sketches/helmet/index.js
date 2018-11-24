const THREE = require('three')
const OBJLoader = require('../../shared/OBJLoader')
const SHARED = require('../../shared/shared')

class Helmet {

  constructor (scene, params) {
    this.scene = scene;
    this.root = new THREE.Group()
    this.group = new THREE.Group()
    this.root.add(this.group)

    this.map = new THREE.TextureLoader().load(__dirname+"\\textures\\diffuse.png");
    this.map.wrapS = THREE.RepeatWrapping;
    this.map.wrapT = THREE.RepeatWrapping;

    this.alphaMap = new THREE.TextureLoader().load(__dirname+"\\textures\\alpha.png");
    this.alphaMap.wrapS = THREE.RepeatWrapping;
    this.alphaMap.wrapT = THREE.RepeatWrapping;

    var paths = [
      'helmet.obj'
      ];
    this.meshes = [];
    this.basicMat = new THREE.MeshStandardMaterial({
        map: this.map,
        envMap: this.scene.scene.background,
        envMapIntensity: params.envMapIntensity,
        alphaMap: this.alphaMap,
        transparent: true
    });

    var loader = new THREE.OBJLoader();
    for(var i = 0; i< paths.length; i++){
      loader.load((__dirname)+"\\models\\"+paths[i], (o)=>{
        o.material = this.material;
        this.group.remove(this.meshes[0]);
        this.meshes.unshift(new THREE.Mesh(
          o.children[0].geometry,
          this.basicMat
        ));
        this.group.add(this.meshes[0]);
      });
    }
  }

  update (params, time, frameDiff, allParams) {
    this.basicMat.metalness = params.metalness;
    this.basicMat.roughness = params.roughness;
    this.basicMat.displacementScale = params.displacementScale;
    this.basicMat.displacementBias = params.displacementBias;
    this.basicMat.envMapIntensity = params.envMapIntensity;
    this.basicMat.opacity = params.opacity;

    if (SHARED.envMapDynamic) {
          this.basicMat.envMap = SHARED.envMapDynamic;
    } else {
          this.basicMat.envMap = this.scene.scene.background;
    }

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
module.exports = Helmet
