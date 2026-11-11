import { useGLTF, useScroll, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const MacContainer = () => {
    let model = useGLTF("./mac.glb")
    let tex = useTexture('./red.jpg')
    let meshes = {};
    model.scene.traverse((e) => {
        meshes[e.name] = e;
    });

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
    
    let data = useScroll();

    useFrame((state, delta) => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);

        // Keep main title intact, but fade out secondary text & buttons as the screen rises
        const detailsEl = document.getElementById('hero-details');
        if (detailsEl) {
            const progress = Math.min(1, Math.max(0, data.offset * 3));
            detailsEl.style.opacity = (1 - progress).toString();
            detailsEl.style.transform = `translateY(-${progress * 24}px)`;
            detailsEl.style.pointerEvents = progress > 0.4 ? 'none' : 'auto';
        }

        // Fade out bottom scroll prompt as soon as user begins scrolling
        const scrollHint = document.getElementById('scroll-hint');
        if (scrollHint) {
            const hintProgress = Math.min(1, Math.max(0, data.offset * 5));
            scrollHint.style.opacity = (1 - hintProgress).toString();
        }

        // Cubic ease-out helper for natural physical deceleration
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        // Minimal Apple Floating Specs - Left Flank (Apple Silicon & Memory)
        const specLeft = document.getElementById('spec-left');
        if (specLeft) {
            const pLeft = Math.min(1, Math.max(0, (data.offset - 0.18) / 0.42));
            const easeL = easeOutCubic(pLeft);
            specLeft.style.opacity = easeL.toString();
            specLeft.style.transform = `translate(${(1 - easeL) * -24}px, -50%)`;
            specLeft.style.pointerEvents = pLeft > 0.8 ? 'auto' : 'none';
        }

        // Minimal Apple Floating Specs - Right Flank (Display & Battery)
        const specRight = document.getElementById('spec-right');
        if (specRight) {
            const pRight = Math.min(1, Math.max(0, (data.offset - 0.22) / 0.42));
            const easeR = easeOutCubic(pRight);
            specRight.style.opacity = easeR.toString();
            specRight.style.transform = `translate(${(1 - easeR) * 24}px, -50%)`;
            specRight.style.pointerEvents = pRight > 0.8 ? 'auto' : 'none';
        }

        // Minimal Apple Floating Specs - Bottom Dock (Sound, Camera, Ports)
        const specBottom = document.getElementById('spec-bottom');
        if (specBottom) {
            const pBottom = Math.min(1, Math.max(0, (data.offset - 0.26) / 0.42));
            const easeB = easeOutCubic(pBottom);
            specBottom.style.opacity = easeB.toString();
            specBottom.style.transform = `translate(-50%, ${(1 - easeB) * 20}px)`;
            specBottom.style.pointerEvents = pBottom > 0.8 ? 'auto' : 'none';
        }
    });

    return (
        <group position={[0, -10, 20]}>
            <primitive object={model.scene} />
        </group>
    );
}

export default MacContainer