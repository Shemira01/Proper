import { Calendar, Users, Car, DollarSign, Wrench, Clock, TrendingUp } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { AppointmentCard } from "@/components/AppointmentCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  // Mock data - in real app this would come from API
  const todayAppointments = [
    {
      time: "09:00 AM",
      customer: "John Smith",
      vehicle: "Honda Civic 2020",
      service: "Oil Change & Filter",
      status: "completed" as const,
      mechanic: "Mike Johnson"
    },
    {
      time: "10:30 AM", 
      customer: "Sarah Wilson",
      vehicle: "Toyota Camry 2019",
      service: "Brake Inspection",
      status: "in-progress" as const,
      mechanic: "Tom Anderson"
    },
    {
      time: "02:00 PM",
      customer: "David Brown",
      vehicle: "Ford F-150 2021", 
      service: "Engine Diagnostic",
      status: "upcoming" as const,
      mechanic: "Mike Johnson"
    },
    {
      time: "03:30 PM",
      customer: "Lisa Garcia",
      vehicle: "BMW X3 2018",
      service: "Tire Rotation",
      status: "upcoming" as const
    }
  ];

  const quickActions = [
    { title: "New Customer", action: "Add Customer", variant: "default" as const },
    { title: "Schedule Appointment", action: "Book Now", variant: "default" as const },
    { title: "Create Job Card", action: "New Job", variant: "accent" as const },
    { title: "Check Inventory", action: "View Stock", variant: "secondary" as const }
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening at your garage today.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Today</p>
          <p className="text-lg font-semibold text-foreground">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Today's Appointments"
          value={4}
          icon={Calendar}
          change="+2 from yesterday"
          changeType="positive"
        />
        <DashboardCard
          title="Active Jobs"
          value={7}
          icon={Wrench}
          change="3 in progress"
          changeType="neutral"
        />
        <DashboardCard
          title="Total Customers"
          value={156}
          icon={Users}
          change="+5 this week"
          changeType="positive"
        />
        <DashboardCard
          title="Today's Revenue"
          value="$2,450"
          icon={DollarSign}
          change="+12% from yesterday"
          changeType="positive"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAppointments.map((appointment, index) => (
              <AppointmentCard key={index} {...appointment} />
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions & Stats */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant}
                  className="h-20 flex-col space-y-2"
                >
                  <span className="font-medium">{action.title}</span>
                  <span className="text-xs opacity-90">{action.action}</span>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-muted-foreground">Job #1234 completed</span>
                <span className="text-xs text-muted-foreground ml-auto">10 min ago</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-info rounded-full"></div>
                <span className="text-muted-foreground">New appointment scheduled</span>
                <span className="text-xs text-muted-foreground ml-auto">25 min ago</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-muted-foreground">Low stock alert: Oil filters</span>
                <span className="text-xs text-muted-foreground ml-auto">1 hr ago</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-muted-foreground">Payment received: $350</span>
                <span className="text-xs text-muted-foreground ml-auto">2 hrs ago</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}