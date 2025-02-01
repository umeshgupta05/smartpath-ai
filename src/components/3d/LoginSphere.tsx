import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";

const Scene = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <>
    <OrbitControls enableZoom={false} enablePan={false} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial
        color={isDarkMode ? "#4C1D95" : "#6D28D9"}
        wireframe
        transparent
        opacity={0.8}
      />
    </Sphere>
  </>
);

const Fallback = () => (
  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg animate-pulse" />
);

export const LoginSphere = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="h-full w-full">
      <ErrorBoundary fallback={<Fallback />}>
        <Suspense fallback={<Fallback />}>
          <Canvas
            camera={{ position: [0, 0, 5] }}
            style={{ background: 'transparent' }}
            gl={{ 
              alpha: true, 
              antialias: true,
              preserveDrawingBuffer: true
            }}
          >
            <Scene isDarkMode={isDarkMode} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};