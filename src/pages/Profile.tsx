import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Settings } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-up">Profile Settings</h1>
        
        {/* Profile Info */}
        <Card className="p-6 mb-8 animate-fade-up">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-12 w-12 text-gray-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-gray-500">Student</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                defaultValue="John Doe"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                defaultValue="john@example.com"
              />
            </div>
          </div>
        </Card>
        
        {/* Preferences */}
        <Card className="p-6 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-xl font-semibold mb-4">Learning Preferences</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Learning Pace</label>
              <select className="mt-1 w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Fast</option>
                <option>Moderate</option>
                <option>Slow</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700">Content Format</label>
              <select className="mt-1 w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Video</option>
                <option>Text</option>
                <option>Interactive</option>
              </select>
            </div>
          </div>
        </Card>
        
        {/* Notification Settings */}
        <Card className="p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Course Updates</h3>
                <p className="text-sm text-gray-500">Get notified about new course content</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Quiz Reminders</h3>
                <p className="text-sm text-gray-500">Receive reminders for upcoming quizzes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </Card>
        
        <div className="mt-8 flex justify-end space-x-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;