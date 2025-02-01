import { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Brain, Lightbulb, Moon, Sun, Target, BarChart3, Award } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const techInterests = [
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Development" },
    { id: "data", label: "Data Science" },
    { id: "ai", label: "AI/ML" },
    { id: "cloud", label: "Cloud Computing" },
    { id: "devops", label: "DevOps" },
    { id: "security", label: "Cybersecurity" },
    { id: "blockchain", label: "Blockchain" },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized recommendations based on your progress",
    },
    {
      icon: Target,
      title: "Dynamic Paths",
      description: "Adaptive learning paths that evolve with you",
    },
    {
      icon: BarChart3,
      title: "Smart Quizzes",
      description: "AI-generated assessments for optimal learning",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Earn recognized credentials as you learn",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isSignUp ? "Account created successfully!" : "Welcome back!");
    navigate("/dashboard");
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // 3D Animation Component with Error Boundary and Suspense
  const AnimatedSphere = () => {
    return (
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />}>
        <Canvas
          camera={{ position: [0, 0, 5] }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
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
        </Canvas>
      </Suspense>
    );
  };

  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Left Section - Login/Signup Form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4"
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {isSignUp
                ? "Sign up to start your learning journey"
                : "Sign in to continue learning"}
            </p>
          </div>

          <div className="glass-morphism p-8 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                placeholder="Email"
                className="neo-blur"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                className="neo-blur"
                required
              />

              {isSignUp && (
                <div className="space-y-4">
                  <h3 className="font-medium text-sm dark:text-white">Technology Interests</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {techInterests.map((interest) => (
                      <div
                        key={interest.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={interest.id} />
                        <label
                          htmlFor={interest.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                        >
                          {interest.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full">
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </form>
          </div>

          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-primary hover:underline dark:text-white"
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>

      {/* Right Section - Features & Demo */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-primary/5 to-accent/5 p-8">
        {/* 3D Animation */}
        <div className="h-48 mb-8">
          <AnimatedSphere />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flip-card"
            >
              <div className="flip-card-inner">
                <div className="flip-card-front glass-morphism p-6 rounded-xl">
                  <feature.icon className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2 dark:text-white">{feature.title}</h3>
                </div>
                <div className="flip-card-back glass-morphism p-6 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;