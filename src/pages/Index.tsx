import { Brain, Target, BarChart3, Award } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    title: "AI-Powered Recommendations",
    description: "Get personalized course suggestions based on your learning style and goals.",
    icon: Brain,
  },
  {
    title: "Dynamic Learning Paths",
    description: "Follow customized learning paths that adapt to your progress and pace.",
    icon: Target,
  },
  {
    title: "Adaptive Quizzes",
    description: "Test your knowledge with AI-generated quizzes that adjust to your skill level.",
    icon: BarChart3,
  },
  {
    title: "Earn Certifications",
    description: "Showcase your skills with recognized certifications upon course completion.",
    icon: Award,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose SmartPath AI?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Experience the future of learning with our cutting-edge AI technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;