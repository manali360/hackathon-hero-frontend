import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Search, 
  Video, 
  Users,
  FileText,
  Calendar,
  Activity,
  Stethoscope,
  Bell,
  MessageSquare,
  TrendingUp,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const DoctorDashboard = () => {
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
                <h1 className="text-xl font-bold text-foreground">Doctor Dashboard</h1>
                <p className="text-sm text-muted-foreground">Dr. Sarah Johnson - Cardiology</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Badge variant="secondary" className="px-3 py-1">
                <Activity className="w-3 h-3 mr-1" />
                Online
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">24</p>
                      <p className="text-sm text-muted-foreground">Patients Today</p>
                    </div>
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">8</p>
                      <p className="text-sm text-muted-foreground">Video Calls</p>
                    </div>
                    <Video className="w-8 h-8 text-medical-teal" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">15</p>
                      <p className="text-sm text-muted-foreground">Prescriptions</p>
                    </div>
                    <FileText className="w-8 h-8 text-success" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">94%</p>
                      <p className="text-sm text-muted-foreground">Satisfaction</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Patient Management */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Patient Management
                    </CardTitle>
                    <CardDescription>Manage your patient consultations and records</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search patients..." className="pl-9 w-64" />
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary-dark">
                      <Video className="w-4 h-4 mr-2" />
                      Start Call
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">Age 45 • Cardiology Checkup</p>
                        <div className="flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1 text-medical-teal" />
                          <span className="text-xs text-medical-teal">10:30 AM - In Progress</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-1" />
                        Records
                      </Button>
                      <Button size="sm" className="bg-medical-teal hover:bg-medical-teal/90">
                        <Video className="w-4 h-4 mr-1" />
                        Join
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <p className="font-medium">Emily Smith</p>
                        <p className="text-sm text-muted-foreground">Age 32 • Follow-up Consultation</p>
                        <div className="flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">11:00 AM - Scheduled</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-1" />
                        Records
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-warning" />
                      </div>
                      <div>
                        <p className="font-medium">Robert Johnson</p>
                        <p className="text-sm text-muted-foreground">Age 58 • Urgent Care</p>
                        <div className="flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1 text-warning" />
                          <span className="text-xs text-warning">ASAP - Priority</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-1" />
                        Records
                      </Button>
                      <Button size="sm" className="bg-warning hover:bg-warning/90 text-white">
                        <Video className="w-4 h-4 mr-1" />
                        Priority Call
                      </Button>
                    </div>
                  </div>
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
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                    <Stethoscope className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Completed consultation with Maria Garcia</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                    <FileText className="w-5 h-5 text-medical-teal" />
                    <div>
                      <p className="text-sm font-medium">Prescription sent to Central Pharmacy</p>
                      <p className="text-xs text-muted-foreground">15 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                    <Calendar className="w-5 h-5 text-success" />
                    <div>
                      <p className="text-sm font-medium">Scheduled follow-up with David Lee</p>
                      <p className="text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                    <p className="font-medium text-sm">John Doe</p>
                    <p className="text-xs text-muted-foreground">10:30 AM - Video Call</p>
                  </div>
                  
                  <div className="p-3 border-l-4 border-medical-teal bg-medical-teal/5 rounded-r-lg">
                    <p className="font-medium text-sm">Emily Smith</p>
                    <p className="text-xs text-muted-foreground">11:00 AM - Consultation</p>
                  </div>
                  
                  <div className="p-3 border-l-4 border-warning bg-warning/5 rounded-r-lg">
                    <p className="font-medium text-sm">Robert Johnson</p>
                    <p className="text-xs text-muted-foreground">ASAP - Priority</p>
                  </div>
                  
                  <div className="p-3 border-l-4 border-success bg-success/5 rounded-r-lg">
                    <p className="font-medium text-sm">Anna Wilson</p>
                    <p className="text-xs text-muted-foreground">2:00 PM - Follow-up</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-primary hover:bg-primary-dark">
                  <Video className="w-4 h-4 mr-2" />
                  Start Video Console
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2 text-medical-teal" />
                  Write Prescription
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2 text-success" />
                  Add New Patient
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2 text-warning" />
                  View Calendar
                </Button>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="border-medical-teal/20 bg-medical-teal/5">
              <CardHeader>
                <CardTitle className="text-medical-teal text-lg flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get AI-powered diagnostic suggestions and treatment recommendations.
                </p>
                <Button variant="outline" className="w-full text-medical-teal border-medical-teal hover:bg-medical-teal/10">
                  Launch AI Console
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;