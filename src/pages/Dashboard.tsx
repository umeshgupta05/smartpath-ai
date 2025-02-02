import { Card } from "@/components/ui/card";
import { Brain, Book, Trophy, ChartBar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-up">Dashboard</h1>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full hover:bg-primary/10 hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-all animate-fade-up">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Course</p>
                <h3 className="font-semibold">Machine Learning Basics</h3>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Book className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Courses Completed</p>
                <h3 className="font-semibold">12 Courses</h3>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Certifications</p>
                <h3 className="font-semibold">3 Earned</h3>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <ChartBar className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Overall Progress</p>
                <h3 className="font-semibold">78%</h3>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Recommended Courses */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <h3 className="font-semibold mb-2">Advanced Python Programming</h3>
                <p className="text-sm text-gray-500 mb-4">Master Python with real-world projects</p>
                <Button className="w-full">Start Learning</Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;