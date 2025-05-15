"use client"
import { Plus, Save, X, Copy, Download, Eye, FileCode, Folder, FolderPlus, GitBranch, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function CreateCodePage() {
  return (
    <div className="container py-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create Code Sample</h1>
            <p className="text-muted-foreground mt-1">Share your code samples and projects with the community</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Publish Code
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Code Information</CardTitle>
                <CardDescription>Provide details about your code sample or project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter a title for your code sample" />
                  <p className="text-sm text-muted-foreground">A clear, descriptive title for your code</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your code sample or project"
                    className="min-h-[150px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    Provide a detailed description of what your code does and how to use it
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">Primary Language</Label>
                    <Select>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                        <SelectItem value="typescript">TypeScript</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                        <SelectItem value="csharp">C#</SelectItem>
                        <SelectItem value="php">PHP</SelectItem>
                        <SelectItem value="go">Go</SelectItem>
                        <SelectItem value="ruby">Ruby</SelectItem>
                        <SelectItem value="swift">Swift</SelectItem>
                        <SelectItem value="kotlin">Kotlin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

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
                        <SelectItem value="game-development">Game Development</SelectItem>
                        <SelectItem value="desktop-application">Desktop Application</SelectItem>
                        <SelectItem value="algorithm">Algorithm</SelectItem>
                        <SelectItem value="library">Library/Framework</SelectItem>
                        <SelectItem value="utility">Utility</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2 border rounded-md p-3">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                      React
                      <button className="ml-2">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                      Frontend
                      <button className="ml-2">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                    <Input
                      placeholder="Add a tag"
                      className="w-24 h-7 border-none text-sm p-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Add relevant tags to help users find your code</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Files</CardTitle>
                <CardDescription>Add your code files or import from GitHub</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Add Code Files</h3>
                    <p className="text-sm text-muted-foreground">Upload files or create them directly</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="gap-1">
                      <Github className="h-4 w-4" />
                      Import from GitHub
                    </Button>
                    <Button className="gap-1">
                      <Plus className="h-4 w-4" />
                      Add File
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between p-3 bg-muted/50 border-b">
                    <div className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Project Files</span>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1 h-8">
                      <FolderPlus className="h-4 w-4" />
                      New Folder
                    </Button>
                  </div>
                  <div className="p-0">
                    <div className="flex items-center justify-between p-3 hover:bg-muted/30 transition-colors border-b">
                      <div className="flex items-center gap-2">
                        <FileCode className="h-4 w-4 text-blue-500" />
                        <span>index.js</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-muted/30 transition-colors border-b">
                      <div className="flex items-center gap-2">
                        <FileCode className="h-4 w-4 text-blue-500" />
                        <span>app.js</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-2">
                        <FileCode className="h-4 w-4 text-purple-500" />
                        <span>styles.css</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="flex items-center p-2 bg-muted/50 border-b">
                    <div className="flex items-center gap-2">
                      <Tabs defaultValue="code" className="w-full">
                        <TabsList className="bg-transparent h-8 p-0">
                          <TabsTrigger value="code" className="h-8 px-3 data-[state=active]:bg-background rounded-none">
                            index.js
                          </TabsTrigger>
                          <TabsTrigger
                            value="preview"
                            className="h-8 px-3 data-[state=active]:bg-background rounded-none"
                          >
                            Preview
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-0">
                    <Textarea
                      className="min-h-[300px] font-mono text-sm border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="// Write your code here"
                      defaultValue={`// Sample React component
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Provide instructions and documentation for your code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="installation">Installation Instructions</Label>
                  <Textarea
                    id="installation"
                    placeholder="Explain how to install and set up your code"
                    className="min-h-[100px]"
                    defaultValue="```bash
npm install my-awesome-package
# or
yarn add my-awesome-package
```"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="usage">Usage Examples</Label>
                  <Textarea
                    id="usage"
                    placeholder="Provide examples of how to use your code"
                    className="min-h-[150px]"
                    defaultValue="```jsx
import { Counter } from 'my-awesome-package';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Counter initialValue={5} />
    </div>
  );
}
```"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="api">API Documentation</Label>
                  <Textarea
                    id="api"
                    placeholder="Document the API, props, methods, etc."
                    className="min-h-[150px]"
                    defaultValue="## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| initialValue | number | 0 | Initial counter value |
| step | number | 1 | Increment/decrement step |
| min | number | null | Minimum allowed value |
| max | number | null | Maximum allowed value |"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-80 space-y-6">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Code Status</CardTitle>
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
                      <span className="text-sm">Code Files</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Incomplete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="text-sm">Documentation</span>
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
                  <Label htmlFor="version">Version</Label>
                  <Input id="version" placeholder="1.0.0" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="license">License</Label>
                  <Select defaultValue="mit">
                    <SelectTrigger id="license">
                      <SelectValue placeholder="Select license" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mit">MIT</SelectItem>
                      <SelectItem value="apache-2.0">Apache 2.0</SelectItem>
                      <SelectItem value="gpl-3.0">GPL 3.0</SelectItem>
                      <SelectItem value="bsd-3-clause">BSD 3-Clause</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="featured" />
                  <Label htmlFor="featured">Feature this code sample</Label>
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
                <CardTitle className="text-base">Repository</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="repo-url">Repository URL</Label>
                  <Input id="repo-url" placeholder="https://github.com/username/repo" />
                  <p className="text-xs text-muted-foreground">Link to the GitHub, GitLab, or Bitbucket repository</p>
                </div>

                <div className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-muted-foreground" />
                  <Select defaultValue="main">
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">main</SelectItem>
                      <SelectItem value="master">master</SelectItem>
                      <SelectItem value="develop">develop</SelectItem>
                    </SelectContent>
                  </Select>
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
                  Preview Code Sample
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

