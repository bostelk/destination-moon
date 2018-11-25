const THREE = require('three')
const glsl = require('glslify')
const vert = glsl.file('./vert.glsl')
const frag = glsl.file('./frag.glsl')

class HyperCube {

  constructor (scene, params) {
    this.scene = scene;
    this.root = new THREE.Group()
    this.group = new THREE.Group()
    this.root.add(this.group)

    this.material =  new THREE.RawShaderMaterial({
      uniforms: {
        phase: {
          type: "f",
          value: 1
        },
        resolution: {
          type: "2f",
          value: new THREE.Vector2(0,0)
        },
        rotation: {
          type: "3f",
          value: new THREE.Vector3(0.7853982,0.7853982,0.7853982)
        },
        scale: {
          type: "f",
          value: 1
        },
      },
        vertexShader: vert,
        fragmentShader: frag,
    });

    var vertices = [];
    for ( var n = 0; n < 64; n++ ) {
        vertices.push(n,n,n);
    }

    var geometry = new THREE.BufferGeometry();
    geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

    this.mesh = new THREE.LineSegments(geometry, this.material);
    this.group.add(this.mesh);
  }

  update (params, time, frameDiff, allParams) {
    let size = this.scene.renderer.getSize();
    this.material.uniforms.resolution.value.width = size.width;
    this.material.uniforms.resolution.value.height = size.height;
    this.material.uniforms.phase.value = params.phase;
    this.material.uniforms.rotation.value.x = params.rotX;
    this.material.uniforms.rotation.value.y = params.rotY;
    this.material.uniforms.rotation.value.z = params.rotZ;
    this.material.uniforms.scale.value = params.scale;
  }
}

/** HEDRON TIP **
  Class must be exported as a default.
**/
module.exports = HyperCube
