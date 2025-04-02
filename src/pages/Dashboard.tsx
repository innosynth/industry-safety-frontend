
import React from "react";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, AlertTriangle, CheckCircle, ArrowUpRight } from "lucide-react";
import { mockData } from "@/services/api";

const Dashboard: React.FC = () => {
  const [stats, setStats] = React.useState(mockData.stats);

  React.useEffect(() => {
    // In a real app, you'd fetch this data from your API
    // const fetchStats = async () => {
    //   const response = await statusApi.getStats();
    //   if (response.success) {
    //     setStats(response.data);
    //   }
    // };
    // fetchStats();
    
    // Using mock data for now
    setStats(mockData.stats);
  }, []);

  // Format detection data for pie chart
  const detectionData = Object.entries(stats.detectionsByType).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value: Number(value),
  }));

  // Format zone data for bar chart
  const zoneData = Object.entries(stats.violationsByZone).map(([zone, count]) => ({
    zone,
    count: Number(count),
  }));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Safety Monitoring Dashboard</h1>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Detections</CardTitle>
            <Shield className="h-4 w-4 text-safety-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalDetections.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              PPE items detected in monitored areas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Safety Violations</CardTitle>
            <AlertTriangle className="h-4 w-4 text-safety-red" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.violations.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              PPE violations detected in monitored areas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-safety-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.complianceRate}%</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>3% from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Detections by PPE Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={detectionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#3B82F6"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Violations by Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={zoneData}>
                  <XAxis dataKey="zone" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#DC2626" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Trend (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.complianceTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="#059669" 
                  strokeWidth={2} 
                  dot={{ r: 4 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Violations */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Violations</h2>
        <div className="space-y-4">
          {stats.recentViolations.map((violation) => (
            <Alert 
              key={violation.id} 
              className={`violation-card ${violation.severity}`}
            >
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>{violation.type}</AlertTitle>
              <AlertDescription>
                <div className="text-sm text-muted-foreground">
                  {violation.location} • {violation.time}
                </div>
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
