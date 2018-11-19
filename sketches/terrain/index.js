const THREE = require('three')
const OBJLoader = require('../../shared/OBJLoader')
const glsl = require('glslify')
const vert = glsl.file('./vert.glsl')
const frag = glsl.file('./frag.glsl')

const lerp = (v0, v1, t) => {
    return (1 - t) * v0 + t * v1
}
class Terrain {

  constructor (scene, params) {
    this.scene = scene;
    this.root = new THREE.Group()
    this.group = new THREE.Group()
    this.root.add(this.group)

    this.heightmap = new THREE.TextureLoader().load(__dirname+"\\textures\\height2.png");
    this.heightmap.wrapS = THREE.RepeatWrapping;
    this.heightmap.wrapT = THREE.RepeatWrapping;

    this.basicMat =  new THREE.RawShaderMaterial({
      uniforms: {
        tex: {
          type: "t",
          value: this.heightmap
        },
        phase: {
          type: "f",
          value: 1
        },
        heightBias: {
          type: "f",
          value: 0.05
        },
        water: {
          type: "3f",
          value: new THREE.Vector3( 0/255, 44/255, 235/255 )
        },
        foliage: {
          type: "3f",
          value: new THREE.Vector3( 1,0,0 )
        },
        mountains: {
          type: "3f",
          value: new THREE.Vector3( 1, 232/255, 0 )
        },
      },
        vertexShader: vert,
        fragmentShader: frag,
    });

    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 170, 170), this.basicMat);
    this.group.add(this.mesh);
  }

  update (params, time, frameDiff, allParams) {
    this.group.position.x = params.posX
    this.group.position.y = params.posY
    this.group.position.z = params.posZ
    this.group.rotation.x = params.rotX
    this.group.rotation.y = params.rotY
    this.group.rotation.z = params.rotZ
    this.group.scale.set(params.scale, params.scale, params.scale)

    //this.basicMat.uniforms.water.value = 
    //this.basicMat.uniforms.foliage.value = 
    //this.basicMat.uniforms.mountains.value = 

    this.basicMat.uniforms.heightBias.value = params.heightBias;
    this.basicMat.uniforms.phase.value = params.phase;
  }
}

/** HEDRON TIP **
  Class must be exported as a default.
**/
module.exports = Terrain
