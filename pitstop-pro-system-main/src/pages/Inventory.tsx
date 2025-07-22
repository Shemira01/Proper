import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Plus } from "lucide-react";

const Inventory = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
          <p className="text-muted-foreground">Track spare parts, supplies, and stock levels</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Item
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Stock Overview
            </CardTitle>
            <CardDescription>
              Monitor inventory levels and low stock alerts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Inventory management features coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Inventory;