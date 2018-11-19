const THREE = require('three')
const OBJLoader = require('../../shared/OBJLoader')
const glsl = require('glslify')
const vert = glsl.file('./vert.glsl')
const frag = glsl.file('./frag.glsl')

const lerp = (v0, v1, t) => {
    return (1 - t) * v0 + t * v1
}
class Road {

  constructor (scene, params) {
    this.scene = scene;
    this.root = new THREE.Group()
    this.group = new THREE.Group()
    this.root.add(this.group)

    this.diffuse = new THREE.TextureLoader().load(__dirname+"\\textures\\diffuse.png");
    this.diffuse.wrapS = THREE.RepeatWrapping;
    this.diffuse.wrapT = THREE.RepeatWrapping;

    var paths = [
      'road.obj'
      ]
    this.meshes = [];
    this.basicMat =  new THREE.RawShaderMaterial( {
      uniforms: {
        tex: {
          type: "t",
          value: this.diffuse
        },
        phase: {
          type: "f",
          value: 1
        },
      },
        vertexShader: vert,
        fragmentShader: frag,
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
    this.group.position.x = params.posX
    this.group.position.y = params.posY
    this.group.position.z = params.posZ
    this.group.rotation.x = params.rotX
    this.group.rotation.y = params.rotY
    this.group.rotation.z = params.rotZ
    this.group.scale.set(params.scale, params.scale, params.scale)

    this.basicMat.uniforms.phase.value = params.phase;
  }
}

/** HEDRON TIP **
  Class must be exported as a default.
**/
module.exports = Road
