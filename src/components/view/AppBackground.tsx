/**
 * Created by ROVENSKIY D.A. on 27.02.2025
 */
import type { PropsWithChildren} from 'react';
import {memo, useEffect, useRef} from 'react';
import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#1b022c');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({color: 0xffffff});

const stars = [];
for (let i = 0; i < 6000; i++) {
    const star = new THREE.Vector3((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, Math.random() * -2000);
    stars.push(star.x, star.y, star.z);
}

const starVertices = new Float32Array(stars);
starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));

const starMesh = new THREE.Points(starGeometry, starMaterial);
scene.add(starMesh);

camera.position.z = 5;

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const material = new THREE.LineBasicMaterial({color: 0x0000ff});

const points = [];
points.push(new THREE.Vector3(-20, 20, 0));
points.push(new THREE.Vector3(0, 60, 0));
points.push(new THREE.Vector3(20, 20, 0));
points.push(new THREE.Vector3(0, -60, 0));
points.push(new THREE.Vector3(-20, 20, 0));
points.push(new THREE.Vector3(0, 20, 20));
points.push(new THREE.Vector3(20, 20, 0));
points.push(new THREE.Vector3(0, 20, -20));
points.push(new THREE.Vector3(-20, 20, 0));
points.push(new THREE.Vector3(0, 60, 0));
points.push(new THREE.Vector3(0, 20, -20));
points.push(new THREE.Vector3(0, -60, 0));
points.push(new THREE.Vector3(0, 20, 20));
points.push(new THREE.Vector3(0, 60, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);

function animate() {
    requestAnimationFrame(animate);
    const positions = starGeometry.attributes.position.array;
    for (let i = 2; i < positions.length; i += 3) {
        positions[i] += 2;
        if (positions[i] > 0) {
            positions[i] = -2000 - Math.random() * 2000;
        }
    }
    starGeometry.attributes.position.needsUpdate = true;

    line.rotation.y += 0.01;

    renderer.render(scene, camera);
}

const AppBackground = memo<PropsWithChildren>(({children}) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        container.current?.appendChild(renderer.domElement);
        animate();

        return () => {
            container.current?.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="fixed -z-10" ref={container}>
            {children}
        </div>
    );
});

export default AppBackground;
