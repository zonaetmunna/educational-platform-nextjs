import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Download, LineChart, PieChart, TrendingUp } from "lucide-react"

export default function AdminAnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Analytics & Reports</h2>
          <div className="flex items-center space-x-2">
            <Select defaultValue="last30days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">Last 7 days</SelectItem>
                <SelectItem value="last30days">Last 30 days</SelectItem>
                <SelectItem value="last90days">Last 90 days</SelectItem>
                <SelectItem value="lastyear">Last year</SelectItem>
                <SelectItem value="alltime">All time</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Reports
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$142,456.78</div>
              <p className="text-xs text-muted-foreground">+12.5% from last period</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Enrollments</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,845</div>
              <p className="text-xs text-muted-foreground">+8.2% from last period</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.8%</div>
              <p className="text-xs text-muted-foreground">+0.6% from last period</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-quaternary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Course Rating</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7/5.0</div>
              <p className="text-xs text-muted-foreground">+0.2 from last period</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue for the past year</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Revenue+Chart"
                    alt="Revenue Chart"
                    width={600}
                    height={300}
                    className="rounded-md"
                  />
                </CardContent>
              </Card>
              <Card className="col-span-3 bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                  <CardDescription>New user registrations over time</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=User+Growth+Chart"
                    alt="User Growth Chart"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Revenue by Category</CardTitle>
                  <CardDescription>Distribution across course categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=350&text=Category+Revenue+Chart"
                    alt="Category Revenue Chart"
                    width={350}
                    height={200}
                    className="rounded-md"
                  />
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Web Development (35%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Data Science (25%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Mobile Development (20%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Design (15%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Other (5%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>User Demographics</CardTitle>
                  <CardDescription>Breakdown of user base by demographics</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=350&text=Demographics+Chart"
                    alt="Demographics Chart"
                    width={350}
                    height={200}
                    className="rounded-md"
                  />
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">18-24 (28%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">25-34 (42%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">35-44 (18%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">45+ (12%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Course Completion Rates</CardTitle>
                  <CardDescription>Average completion rates by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=350&text=Completion+Rates+Chart"
                    alt="Completion Rates Chart"
                    width={350}
                    height={200}
                    className="rounded-md"
                  />
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Web Development</span>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-blue-500" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Data Science</span>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "72%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Mobile Development</span>
                        <span className="text-sm font-medium">64%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-purple-500" style={{ width: "64%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Design</span>
                        <span className="text-sm font-medium">76%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-yellow-500" style={{ width: "76%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="revenue" className="space-y-4">
            {/* Revenue tab content would go here */}
          </TabsContent>
          <TabsContent value="users" className="space-y-4">
            {/* Users tab content would go here */}
          </TabsContent>
          <TabsContent value="courses" className="space-y-4">
            {/* Courses tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

