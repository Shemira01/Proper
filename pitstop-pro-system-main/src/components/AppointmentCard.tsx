import { Clock, User, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AppointmentCardProps {
  time: string;
  customer: string;
  vehicle: string;
  service: string;
  status: "upcoming" | "in-progress" | "completed";
  mechanic?: string;
}

export function AppointmentCard({ 
  time, 
  customer, 
  vehicle, 
  service, 
  status,
  mechanic 
}: AppointmentCardProps) {
  const statusColors = {
    upcoming: "bg-info text-info-foreground",
    "in-progress": "bg-warning text-warning-foreground",
    completed: "bg-success text-success-foreground"
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <Badge className={statusColors[status]}>
            {status.replace("-", " ")}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-foreground">{customer}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Car className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{vehicle}</span>
          </div>
          
          <div className="mt-2">
            <p className="text-sm text-foreground font-medium">{service}</p>
            {mechanic && (
              <p className="text-xs text-muted-foreground mt-1">
                Assigned to: {mechanic}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}