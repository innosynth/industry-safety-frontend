
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Upload, 
  Play, 
  AlertTriangle, 
  Trash, 
  Edit, 
  Filter, 
  Check,
  Loader2,
  Clock
} from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { mockData } from "@/services/api";

const Videos: React.FC = () => {
  const [videos, setVideos] = useState(mockData.videos);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast.error("Please select a file to upload");
      return;
    }

    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      const newVideo = {
        id: `video-${videos.length + 1}`,
        name: selectedFile.name.replace(/\.[^/.]+$/, ""),
        date: new Date().toISOString().split("T")[0],
        duration: "00:00:00", // This would be determined after processing
        status: "uploading",
        violations: null
      };

      setVideos([newVideo, ...videos]);
      setSelectedFile(null);
      setIsUploading(false);
      
      // Simulate status change after upload
      setTimeout(() => {
        setVideos((prevVideos) => 
          prevVideos.map(v => 
            v.id === newVideo.id ? { ...v, status: "processing" } : v
          )
        );
        
        // Simulate processing completion
        setTimeout(() => {
          setVideos((prevVideos) => 
            prevVideos.map(v => 
              v.id === newVideo.id ? { 
                ...v, 
                status: "processed",
                violations: Math.floor(Math.random() * 15), 
                duration: `0${Math.floor(Math.random() * 4)}:${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60)}`
              } : v
            )
          );
          toast.success("Video processed successfully");
        }, 5000);
      }, 2000);
      
      toast.success("Video uploaded successfully");
    }, 1500);
  };

  const handleDeleteVideo = (id: string) => {
    setVideos(videos.filter(video => video.id !== id));
    toast.success("Video deleted successfully");
  };

  const filteredVideos = videos.filter(video => 
    video.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Video Monitoring</h1>
      </div>

      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="videos">Video Library</TabsTrigger>
          <TabsTrigger value="upload">Upload Video</TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Input
                placeholder="Search videos..."
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
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Violations</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVideos.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No videos found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredVideos.map((video) => (
                      <TableRow key={video.id}>
                        <TableCell className="font-medium">{video.name}</TableCell>
                        <TableCell>{video.date}</TableCell>
                        <TableCell>{video.duration}</TableCell>
                        <TableCell>
                          {video.status === "processed" ? (
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-1" />
                              <span>Processed</span>
                            </div>
                          ) : video.status === "processing" ? (
                            <div className="flex items-center">
                              <Loader2 className="h-4 w-4 text-blue-500 mr-1 animate-spin" />
                              <span>Processing</span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-amber-500 mr-1" />
                              <span>Uploading</span>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          {video.violations !== null ? (
                            <div className="flex items-center">
                              {video.violations > 0 ? (
                                <>
                                  <AlertTriangle className="h-4 w-4 text-red-500 mr-1" />
                                  <span>{video.violations}</span>
                                </>
                              ) : (
                                <>
                                  <Check className="h-4 w-4 text-green-500 mr-1" />
                                  <span>None</span>
                                </>
                              )}
                            </div>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="icon">
                                  <Play className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-3xl">
                                <DialogHeader>
                                  <DialogTitle>{video.name}</DialogTitle>
                                </DialogHeader>
                                <div className="aspect-video bg-muted flex items-center justify-center">
                                  <div className="text-muted-foreground">
                                    Video player would be shown here
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              onClick={() => handleDeleteVideo(video.id)}
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
        </TabsContent>
        
        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="video-upload">Upload Video File</Label>
                  <div className="border-2 border-dashed rounded-lg p-10 text-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <p className="text-lg font-medium">
                        {selectedFile ? selectedFile.name : "Drag & drop or click to upload"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Support for MP4, AVI, MOV up to 1GB
                      </p>
                      <Input
                        id="video-upload"
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <Button 
                        variant="outline" 
                        onClick={() => document.getElementById("video-upload")?.click()}
                      >
                        Select File
                      </Button>
                    </div>
                  </div>
                </div>

                {selectedFile && (
                  <div className="flex items-center justify-between p-2 border rounded-lg">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">{selectedFile.name}</div>
                      <div className="text-xs text-muted-foreground ml-2">
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </div>
                    </div>
                    <Button
                      onClick={() => setSelectedFile(null)}
                      variant="ghost"
                      size="icon"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button 
                    onClick={handleUpload} 
                    disabled={!selectedFile || isUploading}
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      "Upload & Process"
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Videos;
