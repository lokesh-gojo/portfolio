import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.7} groundColor="#232631" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} position={[0, 2, 2]} />
      <directionalLight position={[5, 10, 8]} intensity={1.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.76}
        position={isMobile ? [0, -2.7, -1.8] : [0, -3.1, -1.4]}
        rotation={[-0.01, -0.04, 0]}
      />
    </mesh>
  );
};

// Fallback card when WebGL context fails or on small mobile screens
const FallbackHeroCard = () => (
  <div className="absolute inset-0 flex items-center justify-center pt-64 px-6 pointer-events-none">
    <div className="w-full max-w-sm rounded-2xl p-6 glass-morphism border border-[#915EFF]/30 text-center shadow-2xl backdrop-blur-md">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-[24px]">💻</span>
        <p className="text-[15px] font-bold text-white">Full Stack &amp; AI Engineer</p>
      </div>
      <p className="text-[13px] text-secondary">
        Python · Gemini API · Strict RAG · React &amp; Three.js
      </p>
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="text-[11px] bg-tertiary px-3 py-1 rounded-md text-emerald-400 font-semibold border border-emerald-500/30">
          ● 2x Hackathon 1st
        </span>
        <span className="text-[11px] bg-tertiary px-3 py-1 rounded-md text-purple-300 font-semibold border border-purple-500/30">
          LMS &amp; RAG
        </span>
      </div>
    </div>
  </div>
);

class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.warn("WebGL Canvas failed gracefully:", error);
  }
  render() {
    if (this.state.hasError) {
      return <FallbackHeroCard />;
    }
    return this.props.children;
  }
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <FallbackHeroCard />
      ) : (
        <CanvasErrorBoundary>
          <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{
              preserveDrawingBuffer: false,
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "transparent",
            }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0); // Guarantee transparent background
            }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
          </Canvas>
        </CanvasErrorBoundary>
      )}
    </>
  );
};

export default ComputersCanvas;
