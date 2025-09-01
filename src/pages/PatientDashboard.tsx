import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Calendar, 
  FileText, 
  Video, 
  Pill,
  Activity,
  Heart,
  User,
  Clock,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Patient Portal</h1>
                <p className="text-sm text-muted-foreground">Welcome back, John Doe</p>
              </div>
            </div>
            <Badge variant="outline" className="px-3 py-1">
              <Activity className="w-3 h-3 mr-1" />
              Healthy
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Quick Actions
                </CardTitle>
                <CardDescription>Manage your healthcare needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="h-auto p-6 flex-col space-y-2 bg-primary hover:bg-primary-dark">
                    <Video className="w-6 h-6" />
                    <span>Start Video Call</span>
                    <span className="text-xs opacity-80">Connect with your doctor</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-6 flex-col space-y-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    <span>Book Appointment</span>
                    <span className="text-xs text-muted-foreground">Schedule consultation</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-6 flex-col space-y-2">
                    <FileText className="w-6 h-6 text-medical-teal" />
                    <span>View Reports</span>
                    <span className="text-xs text-muted-foreground">Medical history</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-6 flex-col space-y-2">
                    <Pill className="w-6 h-6 text-success" />
                    <span>Prescriptions</span>
                    <span className="text-xs text-muted-foreground">Manage medications</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-medical-teal" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Video className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Video consultation with Dr. Smith</p>
                        <p className="text-sm text-muted-foreground">Yesterday, 2:30 PM</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-medical-teal/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-medical-teal" />
                      </div>
                      <div>
                        <p className="font-medium">Lab results uploaded</p>
                        <p className="text-sm text-muted-foreground">Dec 15, 2024</p>
                      </div>
                    </div>
                    <Badge variant="outline">New</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                        <Pill className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <p className="font-medium">Prescription refilled</p>
                        <p className="text-sm text-muted-foreground">Dec 14, 2024</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Delivered</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Health Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-emergency" />
                  Health Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Blood Pressure</span>
                    <span className="text-sm font-medium">120/80</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Heart Rate</span>
                    <span className="text-sm font-medium">72 bpm</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Weight</span>
                    <span className="text-sm font-medium">70 kg</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">Dr. Sarah Johnson</p>
                      <Badge variant="outline" className="mt-1">Tomorrow</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Cardiology Checkup</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      10:30 AM
                      <Phone className="w-3 h-3 ml-3 mr-1" />
                      Video Call
                    </div>
                  </div>
                  
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">Dr. Michael Brown</p>
                      <Badge variant="secondary" className="mt-1">Dec 20</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Annual Physical</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      2:00 PM
                      <User className="w-3 h-3 ml-3 mr-1" />
                      In-person
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-emergency/20 bg-emergency/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-emergency text-sm flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-emergency border-emergency hover:bg-emergency/10">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 911
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;