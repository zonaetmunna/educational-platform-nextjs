import { ImageIcon, Save, Upload, Video, X, Play, Volume2, SkipBack, SkipForward, Maximize, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

export default function CreateVideoPage() {
  return (
    <div className="container py-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create Video Tutorial</h1>
            <p className="text-muted-foreground mt-1">Upload and publish your video tutorial</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Publish Video
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Video Upload</CardTitle>
                <CardDescription>Upload your video file or provide a video URL</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/50">
                  <div className="mb-4 rounded-md overflow-hidden bg-background">
                    <Video className="h-20 w-20 text-muted-foreground m-8" />
                  </div>
                  <div className="flex flex-col items-center gap-1 mb-4">
                    <p className="text-sm font-medium">Drag and drop your video file here</p>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: MP4, MOV, AVI, WebM (Max size: 2GB)
                    </p>
                  </div>
                  <Button size="sm" className="gap-1">
                    <Upload className="h-4 w-4" />
                    Upload Video
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video-url">Or enter a video URL</Label>
                  <Input id="video-url" placeholder="https://example.com/video.mp4" />
                  <p className="text-sm text-muted-foreground">
                    Enter a direct link to your video file or YouTube/Vimeo URL
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="aspect-video bg-black rounded-md relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-16 w-16 rounded-full bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
                      >
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm">0:00</span>
                          <span className="text-sm">10:30</span>
                        </div>
                        <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                              <SkipBack className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                              <Play className="h-4 w-4" fill="white" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                              <SkipForward className="h-4 w-4" />
                            </Button>
                            <div className="flex items-center gap-1 ml-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                                <Volume2 className="h-4 w-4" />
                              </Button>
                              <Slider defaultValue={[80]} max={100} step={1} className="w-20" />
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                            <Maximize className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Video Information</CardTitle>
                <CardDescription>Provide details about your video tutorial</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Video Title</Label>
                  <Input id="title" placeholder="Enter video title" />
                  <p className="text-sm text-muted-foreground">A clear, descriptive title for your video</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Video Description</Label>
                  <Textarea id="description" placeholder="Describe your video content" className="min-h-[150px]" />
                  <p className="text-sm text-muted-foreground">
                    Provide a detailed description of what viewers will learn
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                        <SelectItem value="mobile-development">Mobile Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="programming">Programming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Level</Label>
                    <Select>
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="all-levels">All Levels</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2 border rounded-md p-3">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                      Tutorial
                      <button className="ml-2">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                      Video
                      <button className="ml-2">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                    <Input
                      placeholder="Add a tag"
                      className="w-24 h-7 border-none text-sm p-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Add relevant tags to help users find your video</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="thumbnail">Video Thumbnail</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/50">
                    <div className="mb-4 rounded-md overflow-hidden bg-background">
                      <ImageIcon className="h-16 w-16 text-muted-foreground m-6" />
                    </div>
                    <div className="flex flex-col items-center gap-1 mb-4">
                      <p className="text-sm font-medium">Drag and drop your thumbnail image here</p>
                      <p className="text-xs text-muted-foreground">Recommended size: 1280x720px (16:9 ratio)</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="gap-1">
                        <Upload className="h-4 w-4" />
                        Upload Image
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        Generate from Video
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-80 space-y-6">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Video Status</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Draft</span>
                  <Badge
                    variant="outline"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500"
                  >
                    Not Published
                  </Badge>
                </div>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="text-sm">Video Upload</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Incomplete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="text-sm">Basic Info</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Incomplete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="text-sm">Thumbnail</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Incomplete</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Publishing Options</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="publish-date">Publish Date</Label>
                  <Input id="publish-date" type="datetime-local" />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="featured" />
                  <Label htmlFor="featured">Feature this video</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="comments" defaultChecked />
                  <Label htmlFor="comments">Allow comments</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="visibility">Visibility</Label>
                  <Select defaultValue="public">
                    <SelectTrigger id="visibility">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="unlisted">Unlisted</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="p-4 flex flex-col gap-2">
                <Button className="w-full gap-1">
                  <Save className="h-4 w-4" />
                  Publish
                </Button>
                <Button variant="outline" className="w-full">
                  Save as Draft
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Video Settings</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm">Auto-play</Label>
                    <p className="text-xs text-muted-foreground">Automatically play video when page loads</p>
                  </div>
                  <Switch id="autoplay" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm">Download</Label>
                    <p className="text-xs text-muted-foreground">Allow users to download this video</p>
                  </div>
                  <Switch id="download" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm">Captions</Label>
                    <p className="text-xs text-muted-foreground">Enable captions for this video</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Upload Captions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Preview</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Button variant="outline" className="w-full gap-1">
                  <Eye className="h-4 w-4" />
                  Preview Video
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

