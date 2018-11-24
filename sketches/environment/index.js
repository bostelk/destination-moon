const THREE = require('three')

class EnvironmentMap {

    constructor (scene, params) {
        this.scene = scene;
        this.loadMap('textures/skybox', 'jpg');
    }

    pisaMap() {
        this.loadMap('/textures/pisa/', 'png');
    }

    skyMap() {
        this.loadMap('/textures/skybox/', 'jpg');
    }

    loadMap(dirmap, ext) {
        // The second scene is the threejs scene.
        this.scene.scene.background = new THREE.CubeTextureLoader()
            .setPath( (__dirname) + '/' + dirmap + '/')
            .load( [ 'px.' + ext, 'nx.' + ext, 'py.' + ext, 'ny.' + ext, 'pz.' + ext, 'nz.' + ext ] );
    }

    update (params, time, frameDiff, allParams) {
    }
}

/** HEDRON TIP **
  Class must be exported as a default.
 **/
module.exports = EnvironmentMap
