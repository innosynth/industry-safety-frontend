
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import the refactored components
import GeneralSettings from "@/components/settings/GeneralSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import ApiAdvancedSettings from "@/components/settings/ApiAdvancedSettings";
import DatabaseConfigDialog from "@/components/settings/DatabaseConfigDialog";
import ProcessingResourcesDialog from "@/components/settings/ProcessingResourcesDialog";
import NetworkSettingsDialog from "@/components/settings/NetworkSettingsDialog";

const Settings: React.FC = () => {
  // General settings state
  const [detectionSensitivity, setDetectionSensitivity] = useState([75]);
  const [modelVersion, setModelVersion] = useState("v2");
  
  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [appNotifications, setAppNotifications] = useState(true);
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [confidenceThreshold, setConfidenceThreshold] = useState([80]);
  
  // API settings state
  const [apiKey, setApiKey] = useState("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
  const [apiEndpoint, setApiEndpoint] = useState("https://api.safetyvision.example.com");
  
  // Dialog states
  const [dbConfigOpen, setDbConfigOpen] = useState(false);
  const [processingResourcesOpen, setProcessingResourcesOpen] = useState(false);
  const [networkSettingsOpen, setNetworkSettingsOpen] = useState(false);

  // Processing Resources values
  const [cpuUtilization, setCpuUtilization] = useState(75);
  const [memoryAllocation, setMemoryAllocation] = useState(60);

  const handleResetApiKey = () => {
    setApiKey("sk_" + Math.random().toString(36).substring(2, 15));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API & Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4 mt-4">
          <GeneralSettings 
            detectionSensitivity={detectionSensitivity}
            setDetectionSensitivity={setDetectionSensitivity}
            modelVersion={modelVersion}
            setModelVersion={setModelVersion}
          />
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4 mt-4">
          <NotificationSettings 
            emailNotifications={emailNotifications}
            setEmailNotifications={setEmailNotifications}
            smsNotifications={smsNotifications}
            setSmsNotifications={setSmsNotifications}
            appNotifications={appNotifications}
            setAppNotifications={setAppNotifications}
            criticalAlerts={criticalAlerts}
            setCriticalAlerts={setCriticalAlerts}
            confidenceThreshold={confidenceThreshold}
            setConfidenceThreshold={setConfidenceThreshold}
          />
        </TabsContent>
        
        <TabsContent value="api" className="space-y-4 mt-4">
          <ApiAdvancedSettings 
            apiKey={apiKey}
            setApiKey={setApiKey}
            apiEndpoint={apiEndpoint}
            setApiEndpoint={setApiEndpoint}
            handleResetApiKey={handleResetApiKey}
            setDbConfigOpen={setDbConfigOpen}
            setProcessingResourcesOpen={setProcessingResourcesOpen}
            setNetworkSettingsOpen={setNetworkSettingsOpen}
          />
        </TabsContent>
      </Tabs>

      {/* Dialog components */}
      <DatabaseConfigDialog 
        open={dbConfigOpen} 
        onOpenChange={setDbConfigOpen} 
      />
      
      <ProcessingResourcesDialog 
        open={processingResourcesOpen} 
        onOpenChange={setProcessingResourcesOpen}
        cpuUtilization={cpuUtilization}
        setCpuUtilization={setCpuUtilization}
        memoryAllocation={memoryAllocation}
        setMemoryAllocation={setMemoryAllocation}
      />
      
      <NetworkSettingsDialog 
        open={networkSettingsOpen} 
        onOpenChange={setNetworkSettingsOpen} 
      />
    </div>
  );
};

export default Settings;
