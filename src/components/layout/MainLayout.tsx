
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ApiUrlConfig from "./ApiUrlConfig";
import LiveCameraDialog from "./LiveCameraDialog";
import MobileFooter from "./MobileFooter";
import { useIsMobile } from "@/hooks/use-mobile";

const MainLayout: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {!isMobile && <Sidebar />}
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar />
        <div className="px-4 py-2 flex justify-end gap-2">
          <LiveCameraDialog />
          <ApiUrlConfig />
        </div>
        <main className="flex-1 p-4 md:p-6 overflow-auto pb-20 md:pb-6">
          <Outlet />
        </main>
        <MobileFooter />
      </div>
    </div>
  );
};

export default MainLayout;
