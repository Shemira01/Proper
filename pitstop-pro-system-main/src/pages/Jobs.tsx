import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus } from "lucide-react";

const Jobs = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Cards & Work Orders</h1>
          <p className="text-muted-foreground">Track services, repairs, and work orders</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Job Card
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Active Job Cards
            </CardTitle>
            <CardDescription>
              Monitor ongoing work and services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Job card management features coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Jobs;