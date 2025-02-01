import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Quizzes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-up">AI-Powered Quizzes</h1>
          <Button className="gap-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Brain className="h-4 w-4" />
            Generate New Quiz
          </Button>
        </div>
        
        {/* Quiz Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {["Python", "Machine Learning", "Data Science"].map((category, index) => (
            <Card 
              key={category}
              className="p-6 hover:shadow-lg transition-all cursor-pointer animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="font-semibold mb-2">{category}</h3>
              <p className="text-sm text-gray-500 mb-4">Test your knowledge in {category}</p>
              <Button variant="outline" className="w-full">Start Quiz</Button>
            </Card>
          ))}
        </div>
        
        {/* Recent Quizzes */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recent Quizzes</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">Python Basics Quiz</h3>
                    <p className="text-sm text-gray-500">10 questions • 15 minutes</p>
                  </div>
                  <Button>Retake Quiz</Button>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-500">Score: 85%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-gray-500">Completed: 2 days ago</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Quizzes;