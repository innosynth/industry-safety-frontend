
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, AlertTriangle, Calendar, User, MapPin, Camera } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

// Static mock data for violations
const allViolations = [
  { 
    id: "v1", 
    type: "No Helmet", 
    location: "Zone A - Assembly Line", 
    time: "2023-06-15 09:25:12", 
    severity: "critical",
    worker: "Worker ID-1281",
    camera: "Camera 2A"
  },
  { 
    id: "v2", 
    type: "No Safety Vest", 
    location: "Zone B - Packaging", 
    time: "2023-06-15 10:14:52", 
    severity: "warning",
    worker: "Worker ID-3492",
    camera: "Camera 3B"
  },
  { 
    id: "v3", 
    type: "No Mask", 
    location: "Zone C - Chemical Storage", 
    time: "2023-06-15 10:52:07", 
    severity: "critical",
    worker: "Worker ID-2045",
    camera: "Camera 1C"
  },
  { 
    id: "v4", 
    type: "No Safety Glasses", 
    location: "Zone A - Welding Area", 
    time: "2023-06-15 11:30:21", 
    severity: "warning",
    worker: "Worker ID-3872",
    camera: "Camera 4A"
  },
  { 
    id: "v5", 
    type: "No Helmet", 
    location: "Zone D - Loading Bay", 
    time: "2023-06-15 13:12:45", 
    severity: "critical",
    worker: "Worker ID-1472",
    camera: "Camera 2D"
  },
  { 
    id: "v6", 
    type: "No Gloves", 
    location: "Zone B - Packaging", 
    time: "2023-06-15 14:20:19", 
    severity: "warning",
    worker: "Worker ID-2834",
    camera: "Camera 1B"
  },
  { 
    id: "v7", 
    type: "No Safety Harness", 
    location: "Zone E - Scaffolding", 
    time: "2023-06-15 15:05:32", 
    severity: "critical",
    worker: "Worker ID-4291",
    camera: "Camera 3E"
  },
  { 
    id: "v8", 
    type: "No Ear Protection", 
    location: "Zone F - Machine Shop", 
    time: "2023-06-15 16:42:11", 
    severity: "warning",
    worker: "Worker ID-1953",
    camera: "Camera 2F"
  },
];

const Violations: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [violations, setViolations] = useState(allViolations);

  const applyFilters = () => {
    let filtered = allViolations;
    
    if (searchQuery) {
      filtered = filtered.filter(
        v => 
          v.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.worker.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.camera.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (severityFilter !== "all") {
      filtered = filtered.filter(v => v.severity === severityFilter);
    }
    
    if (typeFilter !== "all") {
      filtered = filtered.filter(v => v.type === typeFilter);
    }
    
    setViolations(filtered);
  };

  React.useEffect(() => {
    applyFilters();
  }, [searchQuery, severityFilter, typeFilter]);

  const violationTypes = [...new Set(allViolations.map(v => v.type))];

  const getSeverityBadge = (severity: string) => {
    if (severity === "critical") {
      return <Badge variant="destructive">Critical</Badge>;
    } else {
      return <Badge variant="outline" className="bg-amber-100 text-amber-700 hover:bg-amber-100">Warning</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Safety Violations</h1>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="cards">Card View</TabsTrigger>
        </TabsList>
        
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Input
              placeholder="Search by location, worker ID, or camera..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Filter className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Select
              value={severityFilter}
              onValueChange={setSeverityFilter}
            >
              <SelectTrigger className="w-36">
                <SelectValue placeholder="All Severities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
            >
              <SelectTrigger className="w-36">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {violationTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <TabsContent value="list" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Worker</TableHead>
                    <TableHead>Camera</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {violations.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No violations found matching your filters
                      </TableCell>
                    </TableRow>
                  ) : (
                    violations.map((violation) => (
                      <TableRow key={violation.id}>
                        <TableCell className="font-medium">{violation.type}</TableCell>
                        <TableCell>{getSeverityBadge(violation.severity)}</TableCell>
                        <TableCell>{violation.location}</TableCell>
                        <TableCell>{violation.time}</TableCell>
                        <TableCell>{violation.worker}</TableCell>
                        <TableCell>{violation.camera}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="cards" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {violations.length === 0 ? (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                No violations found matching your filters
              </div>
            ) : (
              violations.map((violation) => (
                <Card 
                  key={violation.id} 
                  className={`violation-card ${violation.severity} hover:shadow-md transition-shadow`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-base flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2 text-safety-red" />
                          {violation.type}
                        </CardTitle>
                        <CardDescription>
                          {getSeverityBadge(violation.severity)}
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <span className="sr-only">Details</span>
                        <AlertTriangle className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{violation.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{violation.time}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{violation.worker}</span>
                    </div>
                    <div className="flex items-center">
                      <Camera className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{violation.camera}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Violations;
