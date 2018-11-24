const THREE = require('three')
const SHARED = require('../../shared/shared')

class CubeCamera {

    constructor (scene, params) {
        this.scene = scene;

        var near = this.scene.camera.near;
        var far = this.scene.camera.far;
        var resolution = 256;

        this.cubeCamera = new THREE.CubeCamera( near, far, resolution );
        this.cubeCamera.renderTarget.texture.generateMipmaps = true;
        this.cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
        this.cubeCamera.visible = true;

        SHARED.envMapDynamic = this.cubeCamera.renderTarget.texture;

        // The second scene is the threejs scene.
        this.scene.scene.add( this.cubeCamera );
    }

    togglevisible() {
        this.cubeCamera.visible = !this.cubeCamera.visible;

        if (this.cubeCamera.visible)
        {
            SHARED.envMapDynamic = this.cubeCamera.renderTarget.texture;
        } else {
            SHARED.envMapDynamic = undefined;
        }
    }

    update (params, time, frameDiff, allParams) {
        this.cubeCamera.update(this.scene.renderer,this.scene.scene);
        this.cubeCamera.position.copy( this.scene.camera.position );
    }
}

/** HEDRON TIP **
  Class must be exported as a default.
 **/
module.exports = CubeCamera
