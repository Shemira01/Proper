import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Configure system preferences and user settings</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5" />
              System Configuration
            </CardTitle>
            <CardDescription>
              Manage user roles, preferences, and system settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Settings features coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;