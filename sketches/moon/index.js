const THREE = require('three')
const OBJLoader = require('../../shared/OBJLoader')

const lerp = (v0, v1, t) => {
    return (1 - t) * v0 + t * v1
}
class Moon {

  constructor (scene, params) {
    this.scene = scene;
    this.root = new THREE.Group()
    this.group = new THREE.Group()
    this.root.add(this.group)
    this.diffuse = new THREE.TextureLoader().load(__dirname+"\\textures\\diffuse.jpg");
    this.diffuse.wrapS = THREE.RepeatWrapping;
    this.diffuse.wrapT = THREE.RepeatWrapping;

    this.displacement = new THREE.TextureLoader().load(__dirname+"\\textures\\displacement.png");
    this.displacement.wrapS = THREE.RepeatWrapping;
    this.displacement.wrapT = THREE.RepeatWrapping;

    this.normal = new THREE.TextureLoader().load(__dirname+"\\textures\\normal.png");
    this.normal.wrapS = THREE.RepeatWrapping;
    this.normal.wrapT = THREE.RepeatWrapping;

    var paths = [
      'sphere.obj'
      ]
    this.meshes = [];
    this.basicMat = new THREE.MeshStandardMaterial({
        map: this.diffuse,
        displacementMap : this.displacement,
        normalMap : this.normal,
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
module.exports = Moon
