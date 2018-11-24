const THREE = require('three')

class EnvironmentMap {

    constructor (scene, params) {
        this.scene = scene;
        // threejs scene...

        this.loadMap('textures/pisa', 'png');

        this.cubeCamera = new THREE.CubeCamera( 1, 1000, 256 );
        this.cubeCamera.renderTarget.texture.generateMipmaps = true;
        this.cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
        this.cubeCamera.visible = false;
        // threejs scene...
        this.scene.scene.add( this.cubeCamera );
    }

    capture() {
        this.cubeCamera.visible = !this.cubeCamera.visible;
        this.scene.scene.background = this.cubeCamera.renderTarget.texture;
    }

    exportMap() {
        console.log(this.cubeCamera.renderTarget);
    }

    pisaMap() {
        this.loadMap('/textures/pisa/', 'png');
    }

    skyMap() {
        this.loadMap('/textures/skybox/', 'jpg');
    }

    loadMap(dirmap, ext) {
        this.scene.scene.background = new THREE.CubeTextureLoader()
            .setPath( (__dirname) + '/' + dirmap + '/')
            .load( [ 'px.' + ext, 'nx.' + ext, 'py.' + ext, 'ny.' + ext, 'pz.' + ext, 'nz.' + ext ] );
    }

    update (params, time, frameDiff, allParams) {
        this.cubeCamera.update(this.scene.renderer,this.scene.scene);
        this.cubeCamera.position.copy( this.scene.camera.position );
    }
}

/** HEDRON TIP **
  Class must be exported as a default.
 **/
module.exports = EnvironmentMap
