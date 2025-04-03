
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Videos from "./pages/Videos";
import Violations from "./pages/Violations";
import Stats from "./pages/Stats";
import Tenants from "./pages/Tenants";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import DataRights from "./pages/DataRights";
import Documentation from "./pages/Documentation";
import HelpSupport from "./pages/HelpSupport";
import NotFound from "./pages/NotFound";

// Initialize API base URL from localStorage or default
if (typeof window !== 'undefined') {
  // This check is for SSR compatibility
  const storedApiUrl = localStorage.getItem('apiBaseUrl');
  if (storedApiUrl) {
    // @ts-ignore - Add to window for global access
    window.process = window.process || {};
    // @ts-ignore
    window.process.env = window.process.env || {};
    // @ts-ignore
    window.process.env.API_BASE_URL = storedApiUrl;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/violations" element={<Violations />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/data-rights" element={<DataRights />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/help-support" element={<HelpSupport />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
