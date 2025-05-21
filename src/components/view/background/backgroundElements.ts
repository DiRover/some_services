import * as THREE from 'three';

export const points = [
    new THREE.Vector3(-20, 20, 0),
    new THREE.Vector3(0, 60, 0),
    new THREE.Vector3(20, 20, 0),
    new THREE.Vector3(0, -60, 0),
    new THREE.Vector3(-20, 20, 0),
    new THREE.Vector3(0, 20, 20),
    new THREE.Vector3(0, 20, 20),
    new THREE.Vector3(20, 20, 0),
    new THREE.Vector3(0, 20, -20),
    new THREE.Vector3(-20, 20, 0),
    new THREE.Vector3(0, 60, 0),
    new THREE.Vector3(0, 20, -20),
    new THREE.Vector3(0, -60, 0),
    new THREE.Vector3(0, 20, 20),
    new THREE.Vector3(0, 60, 0),
];

export function getStars() {
    const stars = [];

    for (let i = 0; i < 6000; i++) {
        const star = new THREE.Vector3(
            (Math.random() - 0.5) * 2000,
            (Math.random() - 0.5) * 2000,
            Math.random() * -2000,
        );
        stars.push(star.x, star.y, star.z);
    }

    return stars;
}
