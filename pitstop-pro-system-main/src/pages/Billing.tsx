import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Receipt, Plus } from "lucide-react";

const Billing = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Billing & Invoicing</h1>
          <p className="text-muted-foreground">Generate invoices and manage payments</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Invoice Management
            </CardTitle>
            <CardDescription>
              Track invoices, payments, and outstanding balances
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Billing and invoicing features coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;