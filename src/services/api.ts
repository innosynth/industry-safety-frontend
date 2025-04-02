
import { toast } from "sonner";

const API_BASE_URL = "http://localhost:8000"; // Update with your actual API URL

// Interface for API responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// HTTP methods supported by the API
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// Common fetch function
async function fetchApi<T = any>(
  endpoint: string,
  method: HttpMethod = "GET",
  body?: any
): Promise<ApiResponse<T>> {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      if (body instanceof FormData) {
        // Don't set Content-Type for FormData, browser will set it with boundary
        delete headers["Content-Type"];
        options.body = body;
      } else {
        options.body = JSON.stringify(body);
      }
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "An error occurred");
    }

    return { success: true, data };
  } catch (error) {
    console.error("API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
}

// Video API
export const videosApi = {
  uploadVideo: (formData: FormData) => fetchApi<{ id: string }>("/videos", "POST", formData),
  listVideos: () => fetchApi<any[]>("/videos", "GET"),
  getVideo: (id: string) => fetchApi<any>(`/videos/${id}`, "GET"),
  deleteVideo: (id: string) => fetchApi<void>(`/videos/${id}`, "DELETE"),
  updateVideo: (id: string, data: any) => fetchApi<any>(`/videos/${id}`, "PUT", data),
};

// Status API
export const statusApi = {
  getStatus: () => fetchApi<any>("/status", "GET"),
  getStats: () => fetchApi<any>("/stats", "GET"),
  getDbStatus: () => fetchApi<any>("/db-status", "GET"),
};

// Tenant API
export const tenantApi = {
  listTenants: () => fetchApi<any[]>("/tenants", "GET"),
  getTenantConfig: (tenantId: string) => fetchApi<any>(`/tenants/${tenantId}/config`, "GET"),
  addTenantConfig: (tenantId: string, config: any) => 
    fetchApi<any>(`/tenants/${tenantId}/config`, "POST", config),
  updateTenantConfig: (tenantId: string, config: any) => 
    fetchApi<any>(`/tenants/${tenantId}/config/update`, "POST", config),
  removeTenantConfig: (tenantId: string) => 
    fetchApi<void>(`/tenants/${tenantId}/config`, "DELETE"),
  updateTenantStatus: (tenantId: string, status: any) => 
    fetchApi<any>(`/tenants/${tenantId}/status`, "PUT", status),
};

// Face API
export const faceApi = {
  addFace: (tenantId: string, faceData: any) => 
    fetchApi<any>(`/tenants/${tenantId}/faces`, "POST", faceData),
  listFaces: (tenantId: string) => 
    fetchApi<any[]>(`/tenants/${tenantId}/faces`, "GET"),
  updateFace: (tenantId: string, faceId: string, faceData: any) => 
    fetchApi<any>(`/tenants/${tenantId}/faces/${faceId}`, "PUT", faceData),
  removeFace: (tenantId: string, faceId: string) => 
    fetchApi<void>(`/tenants/${tenantId}/faces/${faceId}`, "DELETE"),
};

// Camera API
export const cameraApi = {
  updateLiveUrl: (tenantId: string, cameraId: string, urlData: any) => 
    fetchApi<any>(`/tenants/${tenantId}/cameras/${cameraId}/live-url`, "PUT", urlData),
};

// Event API
export const eventApi = {
  triggerEvent: (eventData: any) => 
    fetchApi<any>("/trigger-event", "POST", eventData),
};

// Process API
export const processApi = {
  processVideo: (tenantId: string, videoData: any) => 
    fetchApi<any>(`/process/${tenantId}`, "POST", videoData),
};

// Mock data for initial development
export const mockData = {
  stats: {
    totalDetections: 1248,
    violations: 187,
    complianceRate: 85,
    recentViolations: [
      { id: 1, type: "No Helmet", location: "Zone A", time: "10 mins ago", severity: "critical" },
      { id: 2, type: "No Vest", location: "Zone B", time: "25 mins ago", severity: "warning" },
      { id: 3, type: "No Mask", location: "Zone C", time: "45 mins ago", severity: "critical" },
      { id: 4, type: "No Helmet", location: "Zone D", time: "1 hour ago", severity: "warning" },
    ],
    detectionsByType: {
      helmet: 450,
      vest: 390,
      mask: 408,
    },
    violationsByZone: {
      "Zone A": 42,
      "Zone B": 38,
      "Zone C": 65,
      "Zone D": 42,
    },
    complianceTrend: [
      { date: "Mon", rate: 82 },
      { date: "Tue", rate: 86 },
      { date: "Wed", rate: 84 },
      { date: "Thu", rate: 87 },
      { date: "Fri", rate: 85 },
      { date: "Sat", rate: 88 },
      { date: "Sun", rate: 90 },
    ],
  },
  tenants: [
    { id: "tenant-1", name: "Factory Alpha", status: "active", cameras: 4 },
    { id: "tenant-2", name: "Warehouse Beta", status: "active", cameras: 6 },
    { id: "tenant-3", name: "Site Gamma", status: "inactive", cameras: 2 },
  ],
  videos: [
    { 
      id: "video-1", 
      name: "Zone A - Morning Shift", 
      date: "2023-06-15", 
      duration: "02:15:30",
      status: "processed",
      violations: 12
    },
    { 
      id: "video-2", 
      name: "Zone B - Afternoon Shift", 
      date: "2023-06-14", 
      duration: "03:45:12",
      status: "processed",
      violations: 8
    },
    { 
      id: "video-3", 
      name: "Zone C - Night Shift", 
      date: "2023-06-13", 
      duration: "04:20:45",
      status: "processing",
      violations: null
    },
  ],
};
