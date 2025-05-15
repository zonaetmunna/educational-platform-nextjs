import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { FileText, Filter, Plus, Search, Video } from "lucide-react"
import Image from "next/image"

export default function AdminContentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Content Management</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Content
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tutorials</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">+8 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Videos</CardTitle>
              <Video className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-muted-foreground">+12 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Code Samples</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">56</div>
              <p className="text-xs text-muted-foreground">+4 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-quaternary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Roadmaps</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="tutorials" className="space-y-4">
          <TabsList>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="code">Code Samples</TabsTrigger>
            <TabsTrigger value="roadmaps">Roadmaps</TabsTrigger>
          </TabsList>
          <TabsContent value="tutorials" className="space-y-4">
            <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>Tutorial Management</CardTitle>
                <CardDescription>Manage all platform tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search tutorials..." className="pl-8 w-full" />
                    </div>
                    <div className="flex space-x-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <Filter className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Filter by category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="web-dev">Web Development</SelectItem>
                          <SelectItem value="data-science">Data Science</SelectItem>
                          <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        New Tutorial
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Card key={i} className="overflow-hidden card-hover-effect animate-fade-in">
                        <div className="relative aspect-video">
                          <Image
                            src={`/placeholder.svg?height=200&width=350&text=Tutorial+${i + 1}`}
                            alt={`Tutorial ${i + 1}`}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge
                              className={i % 3 === 0 ? "bg-green-500" : i % 3 === 1 ? "bg-yellow-500" : "bg-blue-500"}
                            >
                              {i % 3 === 0 ? "Published" : i % 3 === 1 ? "Draft" : "Featured"}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Tutorial Title {i + 1}</CardTitle>
                          <CardDescription>
                            <div className="flex items-center justify-between">
                              <span>Author Name</span>
                              <span className="text-sm font-medium">{(i + 1) * 1250} views</span>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex items-center justify-between text-sm">
                            <div>
                              <span className="text-muted-foreground">Category: </span>
                              <span>
                                {i % 4 === 0
                                  ? "Web Development"
                                  : i % 4 === 1
                                    ? "Data Science"
                                    : i % 4 === 2
                                      ? "Mobile Development"
                                      : "Design"}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Date: </span>
                              <span>{new Date(2023, i % 12, (i % 28) + 1).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                Preview
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900"
                            >
                              Delete
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing <strong>1-6</strong> of <strong>124</strong> tutorials
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                        1
                      </Button>
                      <Button variant="outline" size="sm">
                        2
                      </Button>
                      <Button variant="outline" size="sm">
                        3
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="videos" className="space-y-4">
            {/* Videos tab content would go here */}
          </TabsContent>
          <TabsContent value="code" className="space-y-4">
            {/* Code samples tab content would go here */}
          </TabsContent>
          <TabsContent value="roadmaps" className="space-y-4">
            {/* Roadmaps tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

