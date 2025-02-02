import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Brain, Code, Database, ChartBar, Network, Server, LineChart } from "lucide-react";

// Course data with images and icons
const courses = [
  {
    title: "Data Science Fundamentals",
    description: "Learn the basics of data science and analytics",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "Statistics"],
    icon: Database,
  },
  {
    title: "Machine Learning Essentials",
    description: "Master machine learning algorithms and applications",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["AI", "Python"],
    icon: Brain,
  },
  {
    title: "Web Development Bootcamp",
    description: "Build modern web applications from scratch",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["JavaScript", "React"],
    icon: Code,
  },
  {
    title: "Business Analytics",
    description: "Learn data-driven decision making for business",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    tags: ["Analytics", "Excel"],
    icon: ChartBar,
  },
  {
    title: "Cloud Computing",
    description: "Master cloud platforms and deployment",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["AWS", "DevOps"],
    icon: Server,
  },
  {
    title: "Data Visualization",
    description: "Create impactful data visualizations",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    tags: ["D3.js", "Tableau"],
    icon: LineChart,
  },
];

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
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-all animate-fade-up group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative aspect-video">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseRecommendations;