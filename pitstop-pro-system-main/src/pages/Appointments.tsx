import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus } from "lucide-react";

const Appointments = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointment Scheduling</h1>
          <p className="text-muted-foreground">Manage appointments and time slots</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Appointment
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Appointment Calendar
            </CardTitle>
            <CardDescription>
              Schedule and manage customer appointments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Appointment scheduling features coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Appointments;