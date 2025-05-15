import Image from "next/image"
import { BookOpen, Clock, GraduationCap, ListChecks, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <GraduationCap className="mr-2 h-4 w-4" />
              Browse Courses
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
              <ListChecks className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42.5</div>
              <p className="text-xs text-muted-foreground">+12.5 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
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
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent learning activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-primary/10 p-2">
                        <Play className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Watched "React Hooks Introduction"</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-primary/10 p-2">
                        <ListChecks className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Completed "CSS Grid Layout" quiz</p>
                        <p className="text-sm text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Started "Node.js Fundamentals"</p>
                        <p className="text-sm text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-primary/10 p-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Earned "HTML & CSS Basics" certificate</p>
                        <p className="text-sm text-muted-foreground">Last week</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Continue Learning</CardTitle>
                  <CardDescription>Pick up where you left off</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="Course"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                        <div>
                          <p className="text-sm font-medium">Complete Web Development Bootcamp</p>
                          <p className="text-xs text-muted-foreground">Section: JavaScript Basics</p>
                        </div>
                      </div>
                    </div>
                    <Progress value={45} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>45% complete</span>
                      <span>12/28 lessons</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="Course"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                        <div>
                          <p className="text-sm font-medium">Python for Data Science</p>
                          <p className="text-xs text-muted-foreground">Section: Data Visualization</p>
                        </div>
                      </div>
                    </div>
                    <Progress value={72} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>72% complete</span>
                      <span>18/25 lessons</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Courses
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Recommended For You</CardTitle>
                  <CardDescription>Based on your interests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Course"
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">Advanced React Patterns</p>
                      <p className="text-xs text-muted-foreground">Robert Johnson • 4.8 ★</p>
                      <p className="text-xs font-medium text-primary">$79.99</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Course"
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">TypeScript for JavaScript Developers</p>
                      <p className="text-xs text-muted-foreground">Emily Clark • 4.7 ★</p>
                      <p className="text-xs font-medium text-primary">$69.99</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Course"
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">Node.js Microservices</p>
                      <p className="text-xs text-muted-foreground">Michael Brown • 4.9 ★</p>
                      <p className="text-xs font-medium text-primary">$89.99</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Recommendations
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Learning Goals</CardTitle>
                  <CardDescription>Track your progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Complete JavaScript Course</p>
                      <span className="text-xs text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Build 5 Projects</p>
                      <span className="text-xs text-muted-foreground">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Learn React Native</p>
                      <span className="text-xs text-muted-foreground">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Master Data Structures</p>
                      <span className="text-xs text-muted-foreground">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add New Goal
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="courses" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((course) => (
                <Card key={course}>
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=200&width=350&text=Course${course}`}
                      alt={`Course ${course}`}
                      width={350}
                      height={200}
                      className="object-cover w-full h-[180px] rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {course % 2 === 0 ? "In Progress" : "Completed"}
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Course Title {course}</CardTitle>
                    <CardDescription>Instructor Name</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Progress value={course % 2 === 0 ? 45 + course * 5 : 100} className="h-2 mb-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{course % 2 === 0 ? `${45 + course * 5}% complete` : "Completed"}</span>
                      <span>{course % 2 === 0 ? `${10 + course}/24 lessons` : "24/24 lessons"}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 flex justify-between">
                    <Button variant="outline" size="sm">
                      View Course
                    </Button>
                    <Button size="sm">Continue</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Learning Time</CardTitle>
                  <CardDescription>Hours spent learning per week</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Analytics Chart"
                    width={600}
                    height={300}
                    className="rounded-md"
                  />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Learning Distribution</CardTitle>
                  <CardDescription>Time spent by category</CardDescription>
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
                      <span className="text-sm">Web Development (45%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Data Science (25%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Mobile Development (15%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Design (10%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Other (5%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Average Daily Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1.5 hours</div>
                  <p className="text-xs text-muted-foreground">+0.3 hours from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">78%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quiz Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground">+2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Streak</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12 days</div>
                  <p className="text-xs text-muted-foreground">Personal best: 21 days</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

