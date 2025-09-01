import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Stethoscope, 
  Pill, 
  Shield, 
  Clock, 
  Globe,
  Video,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-medical-teal flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">HealthCare Pro</h1>
                <p className="text-sm text-muted-foreground">Integrated Medical Platform</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              <Clock className="w-3 h-3 mr-1" />
              24/7 Available
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Comprehensive Healthcare
              <span className="block bg-gradient-to-r from-primary to-medical-teal bg-clip-text text-transparent">
                Management System
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Seamlessly connecting patients, doctors, and pharmacies with intelligent healthcare solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="outline" className="px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                Multi-Language
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Secure & HIPAA Compliant
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Video className="w-4 h-4 mr-2" />
                Telemedicine Ready
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* User Portals */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Access Your Portal</h2>
            <p className="text-muted-foreground text-lg">Choose your role to access the dedicated interface</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Patient Portal */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-medical-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Patient Portal</CardTitle>
                <CardDescription>
                  Access your health records, book appointments, and consult with doctors
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-medical-teal" />
                    24/7 Health Records Access
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Video className="w-4 h-4 mr-2 text-medical-teal" />
                    Video Consultations
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Globe className="w-4 h-4 mr-2 text-medical-teal" />
                    Multi-language Support
                  </div>
                </div>
                <Link to="/patient" className="block">
                  <Button className="w-full bg-primary hover:bg-primary-dark">
                    Enter Patient Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Doctor Portal */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-medical-teal/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-8 h-8 text-medical-teal" />
                </div>
                <CardTitle className="text-xl">Doctor Dashboard</CardTitle>
                <CardDescription>
                  Manage patients, conduct consultations, and access medical tools
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    Patient Management
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Video className="w-4 h-4 mr-2 text-primary" />
                    Video Console
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Activity className="w-4 h-4 mr-2 text-primary" />
                    AI-Powered Diagnostics
                  </div>
                </div>
                <Link to="/doctor" className="block">
                  <Button className="w-full bg-medical-teal hover:bg-medical-teal/90">
                    Enter Doctor Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pharmacy Portal */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-success/10 to-medical-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Pill className="w-8 h-8 text-success" />
                </div>
                <CardTitle className="text-xl">Pharmacy Management</CardTitle>
                <CardDescription>
                  Manage inventory, process prescriptions, and track orders
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Activity className="w-4 h-4 mr-2 text-success" />
                    Stock Management
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 mr-2 text-success" />
                    Prescription Tracking
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-success" />
                    Real-time Updates
                  </div>
                </div>
                <Link to="/pharmacy" className="block">
                  <Button className="w-full bg-success hover:bg-success/90">
                    Enter Pharmacy Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 HealthCare Pro. Secure, Professional, Reliable.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;