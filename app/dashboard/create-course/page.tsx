import {
  CheckCircle,
  Clock,
  FileText,
  ImageIcon,
  Info,
  Layers,
  List,
  Plus,
  Save,
  Settings,
  Upload,
  Video,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CreateCoursePage() {
  return (
    <div className="container py-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create New Course</h1>
            <p className="text-muted-foreground mt-1">Create and publish your course content</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Publish Course
            </Button>
          </div>
        </div>

        <Tabs defaultValue="basic" className="w-full">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-64 space-y-4">
              <TabsList className="flex flex-col h-auto p-0 bg-transparent space-y-1">
                <TabsTrigger
                  value="basic"
                  className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-muted"
                >
                  <Info className="h-4 w-4 mr-2" />
                  Basic Information
                </TabsTrigger>
                <TabsTrigger
                  value="content"
                  className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-muted"
                >
                  <Layers className="h-4 w-4 mr-2" />
                  Course Content
                </TabsTrigger>
                <TabsTrigger
                  value="media"
                  className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-muted"
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Media & Attachments
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-muted"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Pricing & Settings
                </TabsTrigger>
              </TabsList>

              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Course Status</CardTitle>
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
                        <span className="text-sm">Basic Info</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Incomplete</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm">Course Content</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Incomplete</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm">Media</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Incomplete</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm">Pricing & Settings</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Incomplete</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Preview</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button variant="outline" className="w-full">
                    Preview Course
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1">
              <TabsContent value="basic" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Provide the essential details about your course</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Course Title</Label>
                      <Input id="title" placeholder="Enter course title" />
                      <p className="text-sm text-muted-foreground">
                        A clear, specific title that describes what you'll teach
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subtitle">Course Subtitle</Label>
                      <Input id="subtitle" placeholder="Enter course subtitle" />
                      <p className="text-sm text-muted-foreground">A brief, compelling subtitle to attract students</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Course Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your course in detail"
                        className="min-h-[200px]"
                      />
                      <p className="text-sm text-muted-foreground">
                        Provide a comprehensive description of what students will learn
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
                            <SelectItem value="business">Business</SelectItem>
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
                          JavaScript
                          <button className="ml-2">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                          React
                          <button className="ml-2">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                        <Input
                          placeholder="Add a tag"
                          className="w-24 h-7 border-none text-sm p-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Add relevant tags to help students find your course
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>What students will learn</Label>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Input placeholder="Enter a learning objective" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input placeholder="Enter a learning objective" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Plus className="h-4 w-4" />
                          Add Learning Objective
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Prerequisites</Label>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Input placeholder="Enter a prerequisite" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Plus className="h-4 w-4" />
                          Add Prerequisite
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save & Continue</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="content" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                    <CardDescription>Organize your course into sections and lectures</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-medium">Course Structure</h3>
                        <p className="text-sm text-muted-foreground">Drag and drop to reorder sections and lectures</p>
                      </div>
                      <Button className="gap-1">
                        <Plus className="h-4 w-4" />
                        Add Section
                      </Button>
                    </div>

                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="section-1" className="border bg-muted/40 rounded-lg mb-4">
                        <div className="flex items-center px-4 py-2">
                          <AccordionTrigger className="hover:no-underline py-0 [&[data-state=open]>svg]:rotate-180">
                            <div className="flex items-center gap-2">
                              <List className="h-4 w-4" />
                              <span>Section 1: Introduction</span>
                            </div>
                          </AccordionTrigger>
                          <div className="ml-auto flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Plus className="h-4 w-4 mr-1" />
                              Lecture
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <AccordionContent className="pt-0">
                          <div className="px-4 pb-3 space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-background rounded-md border">
                              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                                <Video className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">Welcome to the Course</div>
                                <div className="text-xs text-muted-foreground flex items-center gap-2">
                                  <span className="flex items-center gap-1">
                                    <Video className="h-3 w-3" />
                                    Video
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    5:30
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon">
                                  <Settings className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-background rounded-md border">
                              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                                <FileText className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">Course Resources</div>
                                <div className="text-xs text-muted-foreground flex items-center gap-2">
                                  <span className="flex items-center gap-1">
                                    <FileText className="h-3 w-3" />
                                    Article
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon">
                                  <Settings className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <Button variant="outline" size="sm" className="gap-1 w-full">
                              <Plus className="h-4 w-4" />
                              Add Lecture
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="section-2" className="border bg-muted/40 rounded-lg mb-4">
                        <div className="flex items-center px-4 py-2">
                          <AccordionTrigger className="hover:no-underline py-0 [&[data-state=open]>svg]:rotate-180">
                            <div className="flex items-center gap-2">
                              <List className="h-4 w-4" />
                              <span>Section 2: Getting Started</span>
                            </div>
                          </AccordionTrigger>
                          <div className="ml-auto flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Plus className="h-4 w-4 mr-1" />
                              Lecture
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <AccordionContent className="pt-0">
                          <div className="px-4 pb-3">
                            <Button variant="outline" size="sm" className="gap-1 w-full">
                              <Plus className="h-4 w-4" />
                              Add Lecture
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Button className="gap-1 w-full">
                      <Plus className="h-4 w-4" />
                      Add New Section
                    </Button>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <Button>Save & Continue</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="media" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Media & Attachments</CardTitle>
                    <CardDescription>Upload course thumbnail, preview video, and additional resources</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Course Thumbnail</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/50">
                        <div className="mb-4 rounded-md overflow-hidden bg-background">
                          <ImageIcon className="h-20 w-20 text-muted-foreground m-8" />
                        </div>
                        <div className="flex flex-col items-center gap-1 mb-4">
                          <p className="text-sm font-medium">Drag and drop your image here</p>
                          <p className="text-xs text-muted-foreground">Recommended size: 1280x720px (16:9 ratio)</p>
                        </div>
                        <Button size="sm" className="gap-1">
                          <Upload className="h-4 w-4" />
                          Upload Image
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Preview Video</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/50">
                        <div className="mb-4 rounded-md overflow-hidden bg-background">
                          <Video className="h-20 w-20 text-muted-foreground m-8" />
                        </div>
                        <div className="flex flex-col items-center gap-1 mb-4">
                          <p className="text-sm font-medium">Drag and drop your video here</p>
                          <p className="text-xs text-muted-foreground">
                            Max file size: 500MB. Supported formats: MP4, MOV
                          </p>
                        </div>
                        <Button size="sm" className="gap-1">
                          <Upload className="h-4 w-4" />
                          Upload Video
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Additional Resources</Label>
                      <div className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">course_materials.pdf</div>
                            <div className="text-xs text-muted-foreground">2.4 MB</div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button variant="outline" size="sm" className="gap-1 w-full">
                          <Plus className="h-4 w-4" />
                          Add Resource
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <Button>Save & Continue</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="pricing" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Pricing & Settings</CardTitle>
                    <CardDescription>Set your course price and configure additional settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Pricing</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="price">Price ($)</Label>
                          <Input id="price" type="number" placeholder="49.99" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sale-price">Sale Price ($)</Label>
                          <Input id="sale-price" type="number" placeholder="39.99" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Switch id="free-course" />
                        <Label htmlFor="free-course">Make this course free</Label>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Course Settings</Label>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Course Visibility</Label>
                            <p className="text-sm text-muted-foreground">Control who can see your course</p>
                          </div>
                          <Select defaultValue="public">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select visibility" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Public</SelectItem>
                              <SelectItem value="private">Private</SelectItem>
                              <SelectItem value="password">Password Protected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Certificate</Label>
                            <p className="text-sm text-muted-foreground">Issue certificates upon course completion</p>
                          </div>
                          <Switch id="certificate" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Course Forum</Label>
                            <p className="text-sm text-muted-foreground">Enable discussion forum for this course</p>
                          </div>
                          <Switch id="forum" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Featured Course</Label>
                            <p className="text-sm text-muted-foreground">Display this course on the homepage</p>
                          </div>
                          <Switch id="featured" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Course Deadline</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="enrollment-deadline">Enrollment Deadline</Label>
                          <Input id="enrollment-deadline" type="date" />
                          <p className="text-xs text-muted-foreground">Leave blank for no deadline</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="completion-deadline">Completion Deadline</Label>
                          <Input id="completion-deadline" type="date" />
                          <p className="text-xs text-muted-foreground">Leave blank for no deadline</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <div className="flex gap-2">
                      <Button variant="outline">Save as Draft</Button>
                      <Button className="gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Publish Course
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

