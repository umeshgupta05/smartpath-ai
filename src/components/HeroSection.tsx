import { Button } from "@/components/ui/button";
import { Brain, Play } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Suspense } from "react";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#4C1D95"
        wireframe
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTJoLTJ2LTJoMnYyem0tMi0yaC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10 animate-[pulse_4s_ease-in-out_infinite]" />
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-8 animate-fade-up">
            <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
            Your Personalized{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D6BCFA] to-[#E5DEFF]">
              AI Tutor
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up">
            Experience personalized learning powered by artificial intelligence. Master new skills at your own pace with adaptive courses and real-time feedback.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all gap-2">
              Get Started
              <Brain className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 gap-2">
              Try AI Demo
              <Play className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:block h-[400px] relative">
          <Suspense fallback={<div className="w-full h-full bg-white/10 rounded-lg animate-pulse" />}>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <AnimatedSphere />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;