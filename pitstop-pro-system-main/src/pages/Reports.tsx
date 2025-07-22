import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const Reports = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Business insights and performance analytics</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Business Analytics
            </CardTitle>
            <CardDescription>
              Revenue, customer trends, and operational insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Reports and analytics features coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;