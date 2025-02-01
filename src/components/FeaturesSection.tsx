import { Brain, Target, BarChart3, Award } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "AI-Powered Recommendations",
    description: "Get personalized course suggestions based on your learning style and goals using advanced AI algorithms.",
    icon: Brain,
  },
  {
    title: "Dynamic Learning Paths",
    description: "Follow customized learning paths that adapt to your progress and pace, ensuring optimal skill development.",
    icon: Target,
  },
  {
    title: "Adaptive Quizzes",
    description: "Challenge yourself with AI-generated quizzes that adjust in real-time based on your performance level.",
    icon: BarChart3,
  },
  {
    title: "Earn Certifications",
    description: "Showcase your expertise with industry-recognized certifications upon successful course completion.",
    icon: Award,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white animate-fade-up">
          Why Choose SmartPath AI?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-fade-up">
          Experience the future of learning with our cutting-edge AI technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="animate-fade-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;