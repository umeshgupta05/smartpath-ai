import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Brain } from "lucide-react";

const CourseRecommendations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-up">Course Recommendations</h1>
          <Button className="gap-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Brain className="h-4 w-4" />
            AI Suggest Courses
          </Button>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-video bg-gray-100"></div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Data Science Fundamentals</h3>
                <p className="text-sm text-gray-500 mb-4">Learn the basics of data science and analytics</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Python</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Statistics</span>
                </div>
                <Button className="w-full">Enroll Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseRecommendations;