
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { Shield, TrendingUp, ChevronUp, ChevronDown, Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { statusApi, mockData } from "@/services/api";
import { toast } from "sonner";
import { ApiResponse } from "@/services/api";

// Default colors for charts
const CHART_COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

interface StatCardProps {
  title: string;
  value: number | string;
  delta?: number;
  description: string;
  isLoading?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, delta = 0, description, isLoading = false }) => {
  const isPositive = delta >= 0;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Shield className="h-4 w-4 text-safety-blue" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center h-12">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <>
            <div className="text-2xl font-bold">{value}</div>
            {delta !== null && (
              <div className={`flex items-center text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
                <span>{Math.abs(delta)}% from last period</span>
              </div>
            )}
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </>
        )}
      </CardContent>
    </Card>
  );
};

interface StatsData {
  totalDetections: number;
  violations: number;
  complianceRate: number;
  recentViolations: {
    id: number;
    type: string;
    location: string;
    time: string;
    severity: string;
  }[];
  detectionsByType: {
    [key: string]: number;
  };
  violationsByZone: {
    [key: string]: number;
  };
  complianceTrend: {
    date: string;
    rate: number;
  }[];
}

const Stats: React.FC = () => {
  const [selectedTenant, setSelectedTenant] = useState<string>("");
  const [tenants, setTenants] = useState<{id: string, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statsData, setStatsData] = useState<StatsData | null>(null);

  // Fetch tenants on component mount
  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const response = await fetch(`${process.env.API_BASE_URL || "http://localhost:8000"}/tenants`);
        if (!response.ok) {
          throw new Error("Failed to fetch tenants");
        }
        const data = await response.json();
        setTenants(data);
        if (data.length > 0) {
          setSelectedTenant(data[0].id);
        }
      } catch (error) {
        console.error("Error fetching tenants:", error);
        // Fallback to mock data if API fails
        setTenants(mockData.tenants.map(t => ({ id: t.id, name: t.name })));
        if (mockData.tenants.length > 0) {
          setSelectedTenant(mockData.tenants[0].id);
        }
        toast.error("Failed to fetch tenants. Using mock data.");
      }
    };
    
    fetchTenants();
  }, []);

  // Fetch stats when tenant changes
  useEffect(() => {
    if (!selectedTenant) return;

    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.API_BASE_URL || "http://localhost:8000"}/stats?tenant_id=${selectedTenant}`);
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data = await response.json();
        setStatsData(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
        // Fallback to mock data if API fails
        setStatsData(mockData.stats);
        toast.error("Failed to fetch stats. Using mock data.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStats();
  }, [selectedTenant]);

  // Format data for charts from the API response or fallback to mock data
  const dailyData = statsData?.complianceTrend || [];
  
  const formatViolationsByType = () => {
    if (!statsData) return [];
    return Object.entries(statsData.detectionsByType).map(([name, value], index) => ({
      name,
      value,
      color: CHART_COLORS[index % CHART_COLORS.length]
    }));
  };
  
  const formatComplianceByZone = () => {
    if (!statsData) return [];
    return Object.entries(statsData.violationsByZone).map(([name, value]) => ({
      name,
      value: 100 - (value / (statsData.totalDetections || 1) * 100) // Convert violations to compliance %
    }));
  };

  const hourlyViolations = [
    { hour: "06:00", violations: 8 },
    { hour: "07:00", violations: 12 },
    { hour: "08:00", violations: 18 },
    { hour: "09:00", violations: 22 },
    { hour: "10:00", violations: 15 },
    { hour: "11:00", violations: 10 },
    { hour: "12:00", violations: 8 },
    { hour: "13:00", violations: 14 },
    { hour: "14:00", violations: 20 },
    { hour: "15:00", violations: 18 },
    { hour: "16:00", violations: 12 },
    { hour: "17:00", violations: 7 },
  ];

  const weeklyComparisonData = [
    { name: "Week 1", previous: 65, current: 75 },
    { name: "Week 2", previous: 68, current: 78 },
    { name: "Week 3", previous: 72, current: 82 },
    { name: "Week 4", previous: 70, current: 80 },
  ];

  const violationsByType = formatViolationsByType();
  const complianceByZone = formatComplianceByZone();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Safety Statistics</h1>
        <div className="w-full max-w-xs">
          <Select
            value={selectedTenant}
            onValueChange={setSelectedTenant}
            disabled={isLoading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select tenant" />
            </SelectTrigger>
            <SelectContent>
              {tenants.map((tenant) => (
                <SelectItem key={tenant.id} value={tenant.id}>
                  {tenant.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard 
          title="Compliance Rate" 
          value={isLoading ? "—" : `${statsData?.complianceRate || 0}%`}
          delta={3} 
          description="Overall PPE compliance rate" 
          isLoading={isLoading}
        />
        <StatCard 
          title="Detection Count" 
          value={isLoading ? "—" : statsData?.totalDetections || 0} 
          delta={12} 
          description="Total PPE items detected" 
          isLoading={isLoading}
        />
        <StatCard 
          title="Violation Count" 
          value={isLoading ? "—" : statsData?.violations || 0} 
          delta={-15} 
          description="Total safety violations" 
          isLoading={isLoading}
        />
        <StatCard 
          title="Hazard Index" 
          value={isLoading ? "—" : statsData?.violations ? Math.round((statsData.violations / statsData.totalDetections) * 100) : 0} 
          delta={-8} 
          description="Weighted safety risk score" 
          isLoading={isLoading}
        />
      </div>

      {/* Time-based Analytics */}
      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="hourly">Hourly</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Daily Compliance Trend
              </CardTitle>
              <CardDescription>Compliance rate over time</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      name="Compliance Rate %" 
                      stroke="#3B82F6" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Weekly Comparison
              </CardTitle>
              <CardDescription>This period vs previous period</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="previous" 
                      name="Previous Period" 
                      stroke="#94a3b8" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="current" 
                      name="Current Period" 
                      stroke="#3B82F6" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hourly" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Hourly Violation Distribution
              </CardTitle>
              <CardDescription>Number of violations by hour of day</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hourlyViolations}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="violations" name="Violations" fill="#DC2626" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Distribution Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Violations by PPE Type</CardTitle>
            <CardDescription>Distribution of safety violations by missing PPE</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={violationsByType}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {violationsByType.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance by Zone</CardTitle>
            <CardDescription>PPE compliance percentage by work zone</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={complianceByZone} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Compliance %" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Stats;
