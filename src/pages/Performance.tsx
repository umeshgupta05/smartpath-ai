import { Card } from "@/components/ui/card";
import { Brain, Target, Award } from "lucide-react";

const Performance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-up">Performance Analytics</h1>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-all animate-fade-up">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Learning Hours</p>
                <h3 className="font-semibold">48 Hours</h3>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Average Score</p>
                <h3 className="font-semibold">85%</h3>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Skills Mastered</p>
                <h3 className="font-semibold">12 Skills</h3>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Performance Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <h4 className="font-medium">Completed Python Basics Quiz</h4>
                    <p className="text-sm text-gray-500">Score: 92%</p>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-xl font-semibold mb-4">Skill Progress</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Python</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Performance;