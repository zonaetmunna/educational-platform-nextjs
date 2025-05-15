import Image from "next/image"
import { BarChart, BookOpen, DollarSign, FileText, Plus, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Settings className="mr-2 h-4 w-4" />
              Platform Settings
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,243</div>
              <p className="text-xs text-muted-foreground">+856 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$142,456.78</div>
              <p className="text-xs text-muted-foreground">+$12,245.56 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248</div>
              <p className="text-xs text-muted-foreground">+18 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-quaternary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Instructors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">56</div>
              <p className="text-xs text-muted-foreground">+3 from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 bg-gradient-primary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Platform Growth</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Chart"
                    width={600}
                    height={300}
                    className="rounded-md"
                  />
                </CardContent>
              </Card>
              <Card className="col-span-3 bg-gradient-secondary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>User Distribution</CardTitle>
                  <CardDescription>Breakdown by role and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=250&width=350"
                    alt="Pie Chart"
                    width={350}
                    height={250}
                    className="rounded-md"
                  />
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Students (85%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Instructors (12%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Admins (3%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Top Performing Courses</CardTitle>
                  <CardDescription>Based on enrollment and revenue</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="font-bold text-lg">{i}.</div>
                        <div className="flex-1">
                          <div className="font-medium">Course Title {i}</div>
                          <div className="text-sm text-muted-foreground">
                            ${(100 - i * 5).toFixed(2)} • {5 - i * 0.1} ★ • {1000 - i * 100} students
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Courses
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-gradient-quaternary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Top Instructors</CardTitle>
                  <CardDescription>Based on student count and revenue</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={`/placeholder.svg?height=40&width=40&text=${i}`}
                            alt={`Instructor ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Instructor Name {i}</div>
                          <div className="text-sm text-muted-foreground">
                            {8 - i} courses • {1000 - i * 150} students
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Instructors
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common admin tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New User
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Review Course Submissions
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart className="mr-2 h-4 w-4" />
                    Generate Reports
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Manage Payments
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    System Settings
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Admin Control Panel</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="users" className="space-y-4">
            {/* Users tab content would go here */}
          </TabsContent>
          <TabsContent value="courses" className="space-y-4">
            {/* Courses tab content would go here */}
          </TabsContent>
          <TabsContent value="revenue" className="space-y-4">
            {/* Revenue tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

