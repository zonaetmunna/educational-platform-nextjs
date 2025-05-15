import {
  ImageIcon,
  Plus,
  Save,
  Upload,
  X,
  Bold,
  Italic,
  LinkIcon,
  ListIcon,
  ListOrdered,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Eye,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function CreateTutorialPage() {
  return (
    <div className="container py-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create New Tutorial</h1>
            <p className="text-muted-foreground mt-1">Create and publish your tutorial content</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Publish Tutorial
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tutorial Information</CardTitle>
                <CardDescription>Provide the essential details about your tutorial</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Tutorial Title</Label>
                  <Input id="title" placeholder="Enter tutorial title" />
                  <p className="text-sm text-muted-foreground">
                    A clear, specific title that describes what you'll teach
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Tutorial Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Write a brief summary of your tutorial"
                    className="min-h-[100px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    A short summary that will appear in tutorial listings (150-200 characters)
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
                    <Label htmlFor="read-time">Estimated Read Time (minutes)</Label>
                    <Input id="read-time" type="number" placeholder="15" />
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
                      Tutorial
                      <button className="ml-2">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                    <Input
                      placeholder="Add a tag"
                      className="w-24 h-7 border-none text-sm p-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Add relevant tags to help users find your tutorial</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="featured-image">Featured Image</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/50">
                    <div className="mb-4 rounded-md overflow-hidden bg-background">
                      <ImageIcon className="h-16 w-16 text-muted-foreground m-6" />
                    </div>
                    <div className="flex flex-col items-center gap-1 mb-4">
                      <p className="text-sm font-medium">Drag and drop your image here</p>
                      <p className="text-xs text-muted-foreground">Recommended size: 1200x630px</p>
                    </div>
                    <Button size="sm" className="gap-1">
                      <Upload className="h-4 w-4" />
                      Upload Image
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tutorial Content</CardTitle>
                <CardDescription>Write and format your tutorial content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-md">
                  <div className="flex items-center gap-1 p-2 border-b bg-muted/50">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Heading1 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Heading2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Heading3 className="h-4 w-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ListIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Code className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Quote className="h-4 w-4" />
                    </Button>
                    <div className="ml-auto">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Eye className="h-4 w-4" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Write your tutorial content here..."
                    className="min-h-[400px] border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Code Snippets</Label>
                  <div className="space-y-3">
                    <div className="border rounded-md p-3 bg-muted/30">
                      <div className="flex items-center justify-between mb-2">
                        <Select defaultValue="javascript">
                          <SelectTrigger className="w-[180px] h-8">
                            <SelectValue placeholder="Language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="typescript">TypeScript</SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="html">HTML</SelectItem>
                            <SelectItem value="css">CSS</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <Textarea placeholder="// Your code here" className="font-mono text-sm min-h-[150px]" />
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Plus className="h-4 w-4" />
                      Add Code Snippet
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-80 space-y-6">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Tutorial Status</CardTitle>
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
                      <span className="text-sm">Content</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Incomplete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="text-sm">Featured Image</span>
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
                  <Label htmlFor="featured">Feature this tutorial</Label>
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
                      <SelectItem value="password">Password Protected</SelectItem>
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
                <CardTitle className="text-base">Preview</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Button variant="outline" className="w-full gap-1">
                  <Eye className="h-4 w-4" />
                  Preview Tutorial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

