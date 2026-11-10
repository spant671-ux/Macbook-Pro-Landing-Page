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
    });

    return (
        <group position={[0, -10, 20]}>
            <primitive object={model.scene} />
        </group>
    );
}

export default MacContainer