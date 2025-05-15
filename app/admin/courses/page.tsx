import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, Download, Filter, Plus, Search, XCircle } from "lucide-react"

export default function AdminCoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Course Management</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Course
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248</div>
              <p className="text-xs text-muted-foreground">+18 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">215</div>
              <p className="text-xs text-muted-foreground">87% of total courses</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <XCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-quaternary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Submissions</CardTitle>
              <Plus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all-courses" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all-courses">All Courses</TabsTrigger>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
          </TabsList>
          <TabsContent value="all-courses" className="space-y-4">
            <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Manage all platform courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search courses..." className="pl-8 w-full" />
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
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <Card key={i} className="overflow-hidden card-hover-effect animate-fade-in">
                        <div className="relative aspect-video">
                          <Image
                            src={`/placeholder.svg?height=200&width=350&text=Course+${i + 1}`}
                            alt={`Course ${i + 1}`}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge
                              className={i % 3 === 0 ? "bg-green-500" : i % 3 === 1 ? "bg-yellow-500" : "bg-blue-500"}
                            >
                              {i % 3 === 0 ? "Published" : i % 3 === 1 ? "Pending" : "Featured"}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Course Title {i + 1}</CardTitle>
                          <CardDescription>
                            <div className="flex items-center justify-between">
                              <span>Instructor Name</span>
                              <span className="text-sm font-medium">${(49.99 + i * 10).toFixed(2)}</span>
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
                              <span className="text-muted-foreground">Level: </span>
                              <span>{i % 3 === 0 ? "Beginner" : i % 3 === 1 ? "Intermediate" : "Advanced"}</span>
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
                      Showing <strong>1-9</strong> of <strong>248</strong> courses
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
          <TabsContent value="pending" className="space-y-4">
            {/* Pending courses tab content would go here */}
          </TabsContent>
          <TabsContent value="published" className="space-y-4">
            {/* Published courses tab content would go here */}
          </TabsContent>
          <TabsContent value="featured" className="space-y-4">
            {/* Featured courses tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

