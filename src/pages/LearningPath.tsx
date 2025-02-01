import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight } from "lucide-react";

const LearningPath = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-up">Learning Path</h1>
          <Button className="gap-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Brain className="h-4 w-4" />
            Optimize Path
          </Button>
        </div>
        
        {/* Path Timeline */}
        <div className="relative">
          {[1, 2, 3, 4].map((_, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-8 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/20"></div>
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold mb-2">Python Programming Basics</h3>
                <p className="text-sm text-gray-500 mb-4">Master the fundamentals of Python programming</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-500">In Progress</span>
                  </div>
                  <Button variant="outline" className="gap-2">
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;