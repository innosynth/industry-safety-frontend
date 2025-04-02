
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { 
  Filter, 
  Plus, 
  Edit, 
  Trash, 
  Settings, 
  Camera, 
  User, 
  Users, 
  Building, 
  Copy 
} from "lucide-react";
import { mockData } from "@/services/api";
import { toast } from "sonner";

const Tenants: React.FC = () => {
  const [tenants, setTenants] = useState(mockData.tenants);
  const [searchQuery, setSearchQuery] = useState("");
  const [newTenantName, setNewTenantName] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [tenantToDelete, setTenantToDelete] = useState<string | null>(null);

  const handleAddTenant = () => {
    if (!newTenantName.trim()) {
      toast.error("Please enter a tenant name");
      return;
    }

    const newTenant = {
      id: `tenant-${tenants.length + 1}`,
      name: newTenantName,
      status: "active",
      cameras: 0
    };

    setTenants([...tenants, newTenant]);
    setNewTenantName("");
    toast.success("Tenant added successfully");
  };

  const handleDeleteTenant = (id: string) => {
    setTenantToDelete(id);
    setShowDeleteDialog(true);
  };

  const confirmDeleteTenant = () => {
    if (tenantToDelete) {
      setTenants(tenants.filter(tenant => tenant.id !== tenantToDelete));
      setShowDeleteDialog(false);
      setTenantToDelete(null);
      toast.success("Tenant deleted successfully");
    }
  };

  const toggleTenantStatus = (id: string) => {
    setTenants(
      tenants.map(tenant => 
        tenant.id === id 
          ? { ...tenant, status: tenant.status === "active" ? "inactive" : "active" }
          : tenant
      )
    );
    
    const tenant = tenants.find(t => t.id === id);
    const newStatus = tenant?.status === "active" ? "inactive" : "active";
    toast.success(`Tenant ${tenant?.name} is now ${newStatus}`);
  };

  const filteredTenants = tenants.filter(tenant => 
    tenant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tenant Management</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Tenant
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Tenant</DialogTitle>
              <DialogDescription>
                Create a new tenant for safety monitoring.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="tenant-name">Tenant Name</Label>
                <Input 
                  id="tenant-name" 
                  placeholder="Enter tenant name" 
                  value={newTenantName}
                  onChange={(e) => setNewTenantName(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setNewTenantName("")}>
                Cancel
              </Button>
              <Button onClick={handleAddTenant}>
                Create Tenant
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Input
            placeholder="Search tenants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Filter className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tenant Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Cameras</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTenants.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                    No tenants found
                  </TableCell>
                </TableRow>
              ) : (
                filteredTenants.map((tenant) => (
                  <TableRow key={tenant.id}>
                    <TableCell className="font-medium">{tenant.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Badge 
                          variant={tenant.status === "active" ? "default" : "outline"}
                          className={tenant.status === "active" ? "bg-green-500" : ""}
                        >
                          {tenant.status === "active" ? "Active" : "Inactive"}
                        </Badge>
                        <Switch 
                          className="ml-2"
                          checked={tenant.status === "active"}
                          onCheckedChange={() => toggleTenantStatus(tenant.id)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>{tenant.cameras}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Tenant Settings</SheetTitle>
                              <SheetDescription>
                                Configure settings for {tenant.name}
                              </SheetDescription>
                            </SheetHeader>
                            <div className="py-4 space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Building className="h-4 w-4" />
                                  <div>
                                    <p className="text-sm font-medium">Tenant ID</p>
                                    <p className="text-xs text-muted-foreground">{tenant.id}</p>
                                  </div>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`tenant-name-${tenant.id}`}>Tenant Name</Label>
                                <Input id={`tenant-name-${tenant.id}`} defaultValue={tenant.name} />
                              </div>
                              
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="camera-management">Camera Management</Label>
                                  <Button variant="outline" size="sm">
                                    <Camera className="h-4 w-4 mr-2" />
                                    Manage
                                  </Button>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="users-management">Users Management</Label>
                                  <Button variant="outline" size="sm">
                                    <Users className="h-4 w-4 mr-2" />
                                    Manage
                                  </Button>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="config-management">Configuration</Label>
                                  <Button variant="outline" size="sm">
                                    <Settings className="h-4 w-4 mr-2" />
                                    Edit
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button className="w-full">Save Changes</Button>
                              </div>
                            </div>
                          </SheetContent>
                        </Sheet>
                        
                        <Button variant="outline" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleDeleteTenant(tenant.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Delete confirmation dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this tenant? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteTenant}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tenants;
