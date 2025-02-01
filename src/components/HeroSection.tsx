import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTJoLTJ2LTJoMnYyem0tMi0yaC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
            Your Personalized AI Tutor
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Experience personalized learning powered by artificial intelligence. Master new skills at your own pace with adaptive courses and real-time feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Try AI Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;