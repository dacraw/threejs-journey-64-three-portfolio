import {
  Environment,
  PresentationControls,
  useGLTF,
  Float,
  ContactShadows,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />
      <color args={["#241a1a"]} attach="background" />
      <Perf />

      <PresentationControls
        global
        makeDefault
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{
          mass: 2,
          tension: 400,
        }}
        snap={{
          mass: 4,
          tension: 400,
        }}
      >
        <Float rotationIntensity={0.4}>
          <primitive position-y={-1.2} object={laptop.scene} />
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
