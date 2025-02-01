import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, BookOpen, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const PathNode = ({ title, description, status, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative pl-8 pb-8"
    >
      <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/20 dark:bg-primary-light/20"></div>
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-light"></div>
      
      <Card className="p-6 backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${
              status === 'completed' ? 'bg-green-500' :
              status === 'in-progress' ? 'bg-yellow-500' :
              'bg-gray-500'
            }`}></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {status === 'completed' ? 'Completed' :
               status === 'in-progress' ? 'In Progress' :
               'Not Started'}
            </span>
          </div>
          <Button variant="outline" className="gap-2">
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const Scene = () => {
  const { theme } = useTheme();
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color={theme === 'dark' ? '#6D28D9' : '#4C1D95'}
          wireframe
          transparent
          opacity={0.8}
        />
      </Sphere>
    </>
  );
};

const LearningPath = () => {
  const pathData = [
    {
      title: "Python Programming Basics",
      description: "Master the fundamentals of Python programming language",
      status: "completed",
      icon: BookOpen
    },
    {
      title: "Data Structures & Algorithms",
      description: "Learn essential data structures and algorithmic concepts",
      status: "in-progress",
      icon: Brain
    },
    {
      title: "Advanced Python Concepts",
      description: "Explore advanced Python features and best practices",
      status: "not-started",
      icon: Target
    },
    {
      title: "Project Implementation",
      description: "Build real-world projects using Python",
      status: "not-started",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Learning Path
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button className="gap-2">
              <Brain className="h-4 w-4" />
              Optimize Path
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 3D Visualization */}
          <div className="lg:col-span-1">
            <Card className="h-[300px] overflow-hidden backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <Scene />
              </Canvas>
            </Card>
          </div>

          {/* Path Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {pathData.map((item, index) => (
                <PathNode
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;