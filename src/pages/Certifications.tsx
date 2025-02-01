import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Search } from "lucide-react";

const Certifications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-up">Certifications</h1>
        
        {/* Search and Filters */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search certifications..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        
        {/* Available Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Python Developer</h3>
                  <p className="text-sm text-gray-500">Professional Certificate</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Master Python programming and earn a recognized certification
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  Intermediate
                </span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                  3 Months
                </span>
              </div>
              <Button className="w-full">Start Certification</Button>
            </Card>
          ))}
        </div>
        
        {/* Earned Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2].map((_, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Data Science Fundamentals</h3>
                    <p className="text-sm text-gray-500">Completed • Grade: A</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Certificate</Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;