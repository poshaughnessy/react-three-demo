import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class SkinnedModelComponent extends React.Component {

    render() {

        let el = null;

        if( this.geometry ) {

             el = React.createElement( ReactTHREE.SkinnedMesh, {
                geometry: this.geometry,
                material: this.material,
                position: this.props.position,
                quaternion: this.props.quaternion,
                visible: this.props.visible,
                scale: this.props.scale
            });

            if( !this.animation && this.geometry.animation ) {

                console.log(el, el._owner._mountImage instanceof THREE.SkinnedMesh,
                    el._owner._mountImage instanceof ReactTHREE.SkinnedMesh);

                this._ensureLoop( this.geometry.animation );

                this.animation = new THREE.Animation(el._owner._mountImage, this.geometry.animation);
                this.animation.play();
            }


        } else {

            el = React.createElement( ReactTHREE.Object3D, {});

        }

        return el;

    }

    _ensureLoop(animation) {

        for ( var i = 0; i < animation.hierarchy.length; i ++ ) {

            var bone = animation.hierarchy[ i ];

            var first = bone.keys[ 0 ];
            var last = bone.keys[ bone.keys.length - 1 ];

            last.pos = first.pos;
            last.rot = first.rot;
            last.scl = first.scl;

        }

    }

}

SkinnedModelComponent.propTypes = {
    scale: React.PropTypes.number,
    position: React.PropTypes.instanceOf(THREE.Vector3),
    quaternion: React.PropTypes.instanceOf(THREE.Quaternion),
    visible: React.PropTypes.bool
};

export default SkinnedModelComponent;
