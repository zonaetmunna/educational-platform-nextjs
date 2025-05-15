import {
  BookOpen,
  CheckCircle,
  FileText,
  ImageIcon,
  Info,
  Layers,
  Plus,
  Save,
  Settings,
  Upload,
  X,
  GraduationCap,
  DotIcon as DragHandleDots2Icon,
  Lock,
  Unlock,
  MoreHorizontal,
  Code,
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function CreateRoadmapPage() {
  return (
    <div className="container py-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create Learning Roadmap</h1>
            <p className="text-muted-foreground mt-1">Create a structured learning path for students</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Publish Roadmap
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
                  value="steps"
                  className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-muted"
                >
                  <Layers className="h-4 w-4 mr-2" />
                  Roadmap Steps
                </TabsTrigger>
                <TabsTrigger
                  value="media"
                  className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-muted"
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Media & Appearance
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-muted"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Roadmap Status</CardTitle>
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
                        <span className="text-sm">Roadmap Steps</span>
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
                        <span className="text-sm">Settings</span>
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
                    Preview Roadmap
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1">
              <TabsContent value="basic" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Provide the essential details about your learning roadmap</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Roadmap Title</Label>
                      <Input id="title" placeholder="Enter roadmap title" />
                      <p className="text-sm text-muted-foreground">
                        A clear, specific title that describes the learning path
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Roadmap Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your roadmap in detail"
                        className="min-h-[150px]"
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Estimated Duration</Label>
                        <div className="flex gap-2">
                          <Input id="duration" type="number" placeholder="6" />
                          <Select defaultValue="months">
                            <SelectTrigger>
                              <SelectValue placeholder="Unit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="weeks">Weeks</SelectItem>
                              <SelectItem value="months">Months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="effort">Weekly Effort</Label>
                        <div className="flex gap-2">
                          <Input id="effort" type="number" placeholder="10" />
                          <Select defaultValue="hours">
                            <SelectTrigger>
                              <SelectValue placeholder="Unit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hours">Hours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Tags</Label>
                      <div className="flex flex-wrap gap-2 border rounded-md p-3">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                          Learning Path
                          <button className="ml-2">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                          Web Development
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
                        Add relevant tags to help students find your roadmap
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Learning Outcomes</Label>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Input placeholder="Enter a learning outcome" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input placeholder="Enter a learning outcome" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Plus className="h-4 w-4" />
                          Add Learning Outcome
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

              <TabsContent value="steps" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Roadmap Steps</CardTitle>
                    <CardDescription>Create the steps and milestones for your learning roadmap</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-medium">Roadmap Structure</h3>
                        <p className="text-sm text-muted-foreground">Drag and drop to reorder steps</p>
                      </div>
                      <Button className="gap-1">
                        <Plus className="h-4 w-4" />
                        Add Step
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {/* Step 1 */}
                      <div className="border rounded-lg bg-muted/40 overflow-hidden">
                        <div className="flex items-center p-4 border-b bg-muted/60">
                          <div className="flex items-center gap-2">
                            <DragHandleDots2Icon className="h-5 w-5 text-muted-foreground cursor-move" />
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                              1
                            </div>
                            <Input
                              defaultValue="Getting Started with Web Development"
                              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0 text-base font-medium w-auto"
                            />
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                              <Unlock className="h-3.5 w-3.5" />
                              Unlocked
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        <div className="p-4 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="step-1-description">Description</Label>
                            <Textarea
                              id="step-1-description"
                              placeholder="Describe this step"
                              defaultValue="Learn the fundamentals of HTML, CSS, and basic JavaScript"
                              className="min-h-[100px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label>Courses</Label>
                              <Button variant="outline" size="sm" className="gap-1">
                                <Plus className="h-3.5 w-3.5" />
                                Add Course
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-3 p-3 bg-background rounded-md border">
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                                  <BookOpen className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">HTML & CSS Fundamentals</div>
                                  <div className="text-xs text-muted-foreground">4 weeks • Beginner</div>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-background rounded-md border">
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                                  <BookOpen className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">JavaScript Basics</div>
                                  <div className="text-xs text-muted-foreground">6 weeks • Beginner</div>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label>Resources</Label>
                              <Button variant="outline" size="sm" className="gap-1">
                                <Plus className="h-3.5 w-3.5" />
                                Add Resource
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-3 p-3 bg-background rounded-md border">
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                                  <FileText className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">Web Development Cheatsheet</div>
                                  <div className="text-xs text-muted-foreground">PDF • 2.4 MB</div>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="step-1-duration">Duration</Label>
                              <div className="flex gap-2">
                                <Input id="step-1-duration" type="number" defaultValue="4" />
                                <Select defaultValue="weeks">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Unit" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="days">Days</SelectItem>
                                    <SelectItem value="weeks">Weeks</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="step-1-order">Order</Label>
                              <Input id="step-1-order" type="number" defaultValue="1" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="border rounded-lg bg-muted/40 overflow-hidden">
                        <div className="flex items-center p-4 border-b bg-muted/60">
                          <div className="flex items-center gap-2">
                            <DragHandleDots2Icon className="h-5 w-5 text-muted-foreground cursor-move" />
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                              2
                            </div>
                            <Input
                              defaultValue="Frontend Frameworks"
                              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0 text-base font-medium w-auto"
                            />
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                              <Lock className="h-3.5 w-3.5" />
                              Locked
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        <div className="p-4 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="step-2-description">Description</Label>
                            <Textarea
                              id="step-2-description"
                              placeholder="Describe this step"
                              defaultValue="Learn modern frontend frameworks like React, Vue, or Angular"
                              className="min-h-[100px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label>Courses</Label>
                              <Button variant="outline" size="sm" className="gap-1">
                                <Plus className="h-3.5 w-3.5" />
                                Add Course
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-3 p-3 bg-background rounded-md border">
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                                  <BookOpen className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">React Fundamentals</div>
                                  <div className="text-xs text-muted-foreground">8 weeks • Intermediate</div>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="step-2-duration">Duration</Label>
                              <div className="flex gap-2">
                                <Input id="step-2-duration" type="number" defaultValue="8" />
                                <Select defaultValue="weeks">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Unit" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="days">Days</SelectItem>
                                    <SelectItem value="weeks">Weeks</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="step-2-order">Order</Label>
                              <Input id="step-2-order" type="number" defaultValue="2" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button className="gap-1 w-full">
                        <Plus className="h-4 w-4" />
                        Add New Step
                      </Button>
                    </div>
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
                    <CardTitle>Media & Appearance</CardTitle>
                    <CardDescription>Upload roadmap thumbnail and customize appearance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Roadmap Thumbnail</Label>
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
                      <Label>Color Theme</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="border rounded-md p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="w-full h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md"></div>
                          <span className="text-sm font-medium">Purple Gradient</span>
                        </div>
                        <div className="border rounded-md p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="w-full h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-md"></div>
                          <span className="text-sm font-medium">Green Gradient</span>
                        </div>
                        <div className="border rounded-md p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="w-full h-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-md"></div>
                          <span className="text-sm font-medium">Orange Gradient</span>
                        </div>
                        <div className="border rounded-md p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="w-full h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-md"></div>
                          <span className="text-sm font-medium">Blue Gradient</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Icon Set</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="border rounded-md p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="w-full h-20 flex items-center justify-center">
                            <GraduationCap className="h-12 w-12 text-primary" />
                          </div>
                          <span className="text-sm font-medium">Education</span>
                        </div>
                        <div className="border rounded-md p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="w-full h-20 flex items-center justify-center">
                            <Code className="h-12 w-12 text-primary" />
                          </div>
                          <span className="text-sm font-medium">Development</span>
                        </div>
                        <div className="border rounded-md p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="w-full h-20 flex items-center justify-center">
                            <Settings className="h-12 w-12 text-primary" />
                          </div>
                          <span className="text-sm font-medium">Technical</span>
                        </div>
                        <div className="border rounded-md p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="w-full h-20 flex items-center justify-center">
                            <BookOpen className="h-12 w-12 text-primary" />
                          </div>
                          <span className="text-sm font-medium">Learning</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <Button>Save & Continue</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>Configure additional settings for your roadmap</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Visibility & Access</Label>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Roadmap Visibility</Label>
                            <p className="text-sm text-muted-foreground">Control who can see your roadmap</p>
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
                            <p className="text-sm text-muted-foreground">Issue certificates upon roadmap completion</p>
                          </div>
                          <Switch id="certificate" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Progress Tracking</Label>
                            <p className="text-sm text-muted-foreground">Allow students to track their progress</p>
                          </div>
                          <Switch id="progress" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Featured Roadmap</Label>
                            <p className="text-sm text-muted-foreground">Display this roadmap on the homepage</p>
                          </div>
                          <Switch id="featured" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Step Progression</Label>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Sequential Progression</Label>
                            <p className="text-sm text-muted-foreground">Students must complete steps in order</p>
                          </div>
                          <Switch id="sequential" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Automatic Step Unlocking</Label>
                            <p className="text-sm text-muted-foreground">
                              Automatically unlock next step when previous is completed
                            </p>
                          </div>
                          <Switch id="auto-unlock" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Completion Requirements</Label>
                            <p className="text-sm text-muted-foreground">What students need to do to complete a step</p>
                          </div>
                          <Select defaultValue="all-courses">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select requirement" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all-courses">Complete All Courses</SelectItem>
                              <SelectItem value="any-course">Complete Any Course</SelectItem>
                              <SelectItem value="manual">Manual Completion</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Deadlines & Reminders</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="start-date">Start Date</Label>
                          <Input id="start-date" type="date" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="end-date">End Date</Label>
                          <Input id="end-date" type="date" />
                          <p className="text-xs text-muted-foreground">Leave blank for no end date</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mt-2">
                        <Switch id="reminders" />
                        <Label htmlFor="reminders">Send progress reminders to students</Label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <div className="flex gap-2">
                      <Button variant="outline">Save as Draft</Button>
                      <Button className="gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Publish Roadmap
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

