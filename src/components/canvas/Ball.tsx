import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // @ts-ignore
          flatShading
        />
      </mesh>
    </Float>
  );
};

const FallbackBall: React.FC<{ icon: string }> = ({ icon }) => (
  <div className="flex h-full w-full items-center justify-center rounded-full bg-tertiary border border-white/10 shadow-lg p-3">
    <img src={icon} alt="tech icon" className="h-14 w-14 object-contain" />
  </div>
);

class BallErrorBoundary extends React.Component<
  { children: React.ReactNode; icon: string },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; icon: string }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <FallbackBall icon={this.props.icon} />;
    }
    return this.props.children;
  }
}

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <BallErrorBoundary icon={icon}>
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        gl={{ preserveDrawingBuffer: false, alpha: true }}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enablePan={false} enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </BallErrorBoundary>
  );
};

export default BallCanvas;
