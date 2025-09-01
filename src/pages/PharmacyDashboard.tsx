import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Search, 
  Package, 
  FileText,
  TrendingDown,
  TrendingUp,
  Pill,
  Clock,
  AlertTriangle,
  CheckCircle,
  Truck,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const PharmacyDashboard = () => {
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
                <h1 className="text-xl font-bold text-foreground">Pharmacy Management</h1>
                <p className="text-sm text-muted-foreground">Central Healthcare Pharmacy</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              <CheckCircle className="w-3 h-3 mr-1" />
              Operational
            </Badge>
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
                      <p className="text-2xl font-bold text-foreground">1,247</p>
                      <p className="text-sm text-muted-foreground">Total Stock Items</p>
                    </div>
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">42</p>
                      <p className="text-sm text-muted-foreground">Prescriptions Today</p>
                    </div>
                    <FileText className="w-8 h-8 text-medical-teal" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">23</p>
                      <p className="text-sm text-muted-foreground">Low Stock Items</p>
                    </div>
                    <TrendingDown className="w-8 h-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">₹84,200</p>
                      <p className="text-sm text-muted-foreground">Today's Revenue</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-success" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Prescription Management */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Prescription Management
                    </CardTitle>
                    <CardDescription>Process and track prescription orders</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search prescriptions..." className="pl-9 w-64" />
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary-dark">
                      <Package className="w-4 h-4 mr-2" />
                      New Order
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">RX-2024-001247</p>
                        <p className="text-sm text-muted-foreground">John Doe • Dr. Sarah Johnson</p>
                        <div className="flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1 text-medical-teal" />
                          <span className="text-xs text-medical-teal">Received 10 mins ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Pending</Badge>
                      <Button size="sm" className="bg-medical-teal hover:bg-medical-teal/90">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Process
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <p className="font-medium">RX-2024-001246</p>
                        <p className="text-sm text-muted-foreground">Emily Smith • Dr. Michael Brown</p>
                        <div className="flex items-center mt-1">
                          <Truck className="w-3 h-3 mr-1 text-success" />
                          <span className="text-xs text-success">Out for delivery</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Ready</Badge>
                      <Button variant="outline" size="sm">
                        <Truck className="w-4 h-4 mr-1" />
                        Track
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-warning" />
                      </div>
                      <div>
                        <p className="font-medium">RX-2024-001245</p>
                        <p className="text-sm text-muted-foreground">Robert Johnson • Dr. Anna Wilson</p>
                        <div className="flex items-center mt-1">
                          <AlertTriangle className="w-3 h-3 mr-1 text-warning" />
                          <span className="text-xs text-warning">Stock unavailable</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="destructive">Issues</Badge>
                      <Button variant="outline" size="sm" className="text-warning border-warning hover:bg-warning/10">
                        <Package className="w-4 h-4 mr-1" />
                        Resolve
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inventory Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2 text-success" />
                  Inventory Status
                </CardTitle>
                <CardDescription>Monitor stock levels and manage inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">Paracetamol 500mg</p>
                        <Badge variant="secondary">High Stock</Badge>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Available: 2,500 units</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">Amoxicillin 250mg</p>
                        <Badge variant="outline">Medium Stock</Badge>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Available: 850 units</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-warning/20 bg-warning/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">Insulin Pen</p>
                        <Badge variant="destructive">Low Stock</Badge>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Available: 45 units</span>
                        <span>15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    
                    <div className="p-4 border border-emergency/20 bg-emergency/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">Blood Pressure Monitor</p>
                        <Badge variant="destructive">Out of Stock</Badge>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Available: 0 units</span>
                        <span>0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Daily Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Prescriptions Filled</span>
                  <span className="font-medium">38/42</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Orders Delivered</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="font-medium">₹84,200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Pending Orders</span>
                  <span className="font-medium text-warning">4</span>
                </div>
              </CardContent>
            </Card>

            {/* Low Stock Alerts */}
            <Card className="border-warning/20 bg-warning/5">
              <CardHeader>
                <CardTitle className="text-warning text-lg flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Low Stock Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-background rounded-lg border border-warning/20">
                  <p className="font-medium text-sm">Insulin Pen</p>
                  <p className="text-xs text-muted-foreground">45 units remaining</p>
                </div>
                
                <div className="p-3 bg-background rounded-lg border border-emergency/20">
                  <p className="font-medium text-sm">Blood Pressure Monitor</p>
                  <p className="text-xs text-muted-foreground">Out of stock</p>
                </div>
                
                <div className="p-3 bg-background rounded-lg border border-warning/20">
                  <p className="font-medium text-sm">Thermometer Digital</p>
                  <p className="text-xs text-muted-foreground">12 units remaining</p>
                </div>
                
                <Button variant="outline" className="w-full text-warning border-warning hover:bg-warning/10 mt-4">
                  <Package className="w-4 h-4 mr-2" />
                  Reorder Items
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-primary hover:bg-primary-dark">
                  <FileText className="w-4 h-4 mr-2" />
                  Process Prescription
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Package className="w-4 h-4 mr-2 text-medical-teal" />
                  Update Inventory
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Truck className="w-4 h-4 mr-2 text-success" />
                  Track Deliveries
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2 text-warning" />
                  View Reports
                </Button>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border border-border rounded-lg">
                  <p className="font-medium text-sm">Order #2024-1247</p>
                  <p className="text-xs text-muted-foreground">Paracetamol x50</p>
                  <Badge variant="secondary" className="mt-1">Delivered</Badge>
                </div>
                
                <div className="p-3 border border-border rounded-lg">
                  <p className="font-medium text-sm">Order #2024-1246</p>
                  <p className="text-xs text-muted-foreground">Insulin Pen x2</p>
                  <Badge variant="outline" className="mt-1">Processing</Badge>
                </div>
                
                <div className="p-3 border border-border rounded-lg">
                  <p className="font-medium text-sm">Order #2024-1245</p>
                  <p className="text-xs text-muted-foreground">BP Monitor x1</p>
                  <Badge variant="destructive" className="mt-1">Issues</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;