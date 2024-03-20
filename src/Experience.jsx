import {
  Environment,
  PresentationControls,
  useGLTF,
  Float,
  ContactShadows,
  Html,
  Text,
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
          <rectAreaLight
            width={25}
            height={1.65}
            intensity={65}
            color="#ff6900"
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive position-y={-1.2} object={laptop.scene}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://bruno-simon.com/html/" />
            </Html>
          </primitive>
        </Float>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          position={[2, 0.75, 0.75]}
          rotation-y={-1.25}
          maxWidth={2}
          textAlign="center"
        >
          DOUGLAS CRAWFORD
        </Text>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
