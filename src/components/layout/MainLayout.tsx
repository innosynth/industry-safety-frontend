
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ApiUrlConfig from "./ApiUrlConfig";
import LiveCameraDialog from "./LiveCameraDialog";
import MobileFooter from "./MobileFooter";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLoading } from "@/components/shared/LoadingProvider";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const MainLayout: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { setLoading } = useLoading();
  const [localLoading, setLocalLoading] = React.useState(true);
  
  // Show loading indicator on page navigation
  useEffect(() => {
    setLocalLoading(true);
    const timer = setTimeout(() => {
      setLocalLoading(false);
    }, 800); // Simulate loading time
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
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
          {localLoading ? (
            <div className="w-full h-[60vh] flex items-center justify-center">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <Outlet />
          )}
        </main>
        <MobileFooter />
      </div>
    </div>
  );
};

export default MainLayout;
