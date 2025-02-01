import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Brain, BookOpen, Award, Target } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Scene = () => {
  useEffect(() => {
    return () => {
      // Cleanup Three.js resources on unmount
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const gl = canvas.getContext('webgl');
        if (gl) {
          gl.getExtension('WEBGL_lose_context')?.loseContext();
        }
      }
    };
  }, []);

  return (
    <group>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="#4C1D95" wireframe />
      </Sphere>
    </group>
  );
};

const LoadingFallback = () => (
  <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-primary/10 rounded-lg">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const ErrorFallback = () => (
  <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-destructive/10 rounded-lg">
    <p className="text-destructive">Something went wrong with the 3D visualization</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card className="p-6 h-full backdrop-blur-lg bg-background/50 border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

const LearningPath = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 p-6">
      <ThemeToggle />
      
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            Your Learning Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Personalized learning paths powered by AI to help you achieve your goals
          </motion.p>
        </div>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="h-[300px] relative rounded-lg overflow-hidden">
            <Suspense fallback={<LoadingFallback />}>
              <Canvas camera={{ position: [0, 0, 5] }}>
                <Scene />
              </Canvas>
            </Suspense>
          </div>
        </ErrorBoundary>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Brain}
            title="AI-Powered Learning"
            description="Personalized recommendations based on your learning style and goals"
          />
          <FeatureCard 
            icon={Target}
            title="Dynamic Paths"
            description="Adaptive learning paths that evolve with your progress"
          />
          <FeatureCard 
            icon={BookOpen}
            title="Adaptive Quizzes"
            description="Interactive assessments that adjust to your knowledge level"
          />
          <FeatureCard 
            icon={Award}
            title="Certifications"
            description="Earn recognized certificates as you complete your journey"
          />
        </div>
      </div>
    </div>
  );
};

export default LearningPath;