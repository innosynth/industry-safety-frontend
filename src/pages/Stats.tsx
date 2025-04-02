
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { Shield, TrendingUp, ChevronUp, ChevronDown } from "lucide-react";

// Mock data for different visualization types
const dailyData = [
  { day: "Mon", helmet: 42, vest: 38, mask: 35, gloves: 30 },
  { day: "Tue", helmet: 45, vest: 40, mask: 38, gloves: 28 },
  { day: "Wed", helmet: 40, vest: 37, mask: 33, gloves: 32 },
  { day: "Thu", helmet: 48, vest: 42, mask: 40, gloves: 35 },
  { day: "Fri", helmet: 46, vest: 39, mask: 36, gloves: 33 },
  { day: "Sat", helmet: 32, vest: 28, mask: 26, gloves: 25 },
  { day: "Sun", helmet: 30, vest: 25, mask: 22, gloves: 20 },
];

const violationsByType = [
  { name: "No Helmet", value: 65, color: "#3B82F6" },
  { name: "No Vest", value: 45, color: "#10B981" },
  { name: "No Mask", value: 38, color: "#F59E0B" },
  { name: "No Gloves", value: 27, color: "#EF4444" },
  { name: "No Harness", value: 12, color: "#8B5CF6" },
];

const complianceByZone = [
  { name: "Zone A", value: 88 },
  { name: "Zone B", value: 92 },
  { name: "Zone C", value: 82 },
  { name: "Zone D", value: 75 },
  { name: "Zone E", value: 90 },
];

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

interface StatCardProps {
  title: string;
  value: number;
  delta: number;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, delta, description }) => {
  const isPositive = delta >= 0;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Shield className="h-4 w-4 text-safety-blue" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`flex items-center text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
          <span>{Math.abs(delta)}% from last period</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Safety Statistics</h1>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard 
          title="Compliance Rate" 
          value={85} 
          delta={3} 
          description="Overall PPE compliance rate" 
        />
        <StatCard 
          title="Detection Count" 
          value={1248} 
          delta={12} 
          description="Total PPE items detected" 
        />
        <StatCard 
          title="Violation Count" 
          value={187} 
          delta={-15} 
          description="Total safety violations" 
        />
        <StatCard 
          title="Hazard Index" 
          value={42} 
          delta={-8} 
          description="Weighted safety risk score" 
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
                Daily PPE Detection Trend
              </CardTitle>
              <CardDescription>Number of each PPE type detected per day</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="helmet" name="Helmet" fill="#3B82F6" />
                  <Bar dataKey="vest" name="Vest" fill="#10B981" />
                  <Bar dataKey="mask" name="Mask" fill="#F59E0B" />
                  <Bar dataKey="gloves" name="Gloves" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance by Zone</CardTitle>
            <CardDescription>PPE compliance percentage by work zone</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Stats;
