/**
 * Created by ROVENSKIY D.A. on 27.02.2025
 */
import type {PropsWithChildren} from 'react';
import {memo, useEffect, useRef} from 'react';
import * as THREE from 'three';
import {points} from './backgroundElements';
import {getStars} from './backgroundElements.ts';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#1b022c');
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({color: 0xffffff});

const starVertices = new Float32Array(getStars());
starGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(starVertices, 3),
);

const starMesh = new THREE.Points(starGeometry, starMaterial);
scene.add(starMesh);

camera.position.z = 5;

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const material = new THREE.LineBasicMaterial({color: 0x0000ff});

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);

let isAnimating = false;

function animate() {
    if (!isAnimating) return;
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
    const renderRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        if (renderRef.current || animationRef.current) return;

        renderRef.current = renderer;
        container.current?.appendChild(renderer.domElement);
        animationRef.current = requestAnimationFrame(animate);

        isAnimating = true;
        animate();

        return () => {
            isAnimating = false;
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
            container.current?.removeChild(renderer.domElement);
            renderRef.current?.dispose();
            renderRef.current = null;
        };
    }, []);

    return (
        <div className="fixed -z-10" ref={container}>
            {children}
        </div>
    );
});

export default AppBackground;
