import { useGLTF } from "@react-three/drei"


const MacContainer = () => {
    let model = useGLTF("./mac.glb")
    return (
        <group position={[0, -10, 20]}>
            <primitive object={model.scene} />
        </group>
    ) ;
}

export default MacContainer