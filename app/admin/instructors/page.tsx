import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Search, UserPlus } from "lucide-react"

export default function AdminInstructorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Instructor Management</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add New Instructor
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Instructors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248</div>
              <p className="text-xs text-muted-foreground">+18 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Instructors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">215</div>
              <p className="text-xs text-muted-foreground">87% of total instructors</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Earners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">Earning &gt;$5K/month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-quaternary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Pending review</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all-instructors" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all-instructors">All Instructors</TabsTrigger>
            <TabsTrigger value="top-performers">Top Performers</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="payouts">Payouts</TabsTrigger>
          </TabsList>
          <TabsContent value="all-instructors" className="space-y-4">
            <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>Instructor Management</CardTitle>
                <CardDescription>Manage all platform instructors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search instructors..." className="pl-8 w-full" />
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

                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Instructor</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Category</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Courses</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Students</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Revenue</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <tr
                              key={i}
                              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                              <td className="p-4 align-middle">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-9 w-9">
                                    <AvatarImage
                                      src={`/placeholder.svg?height=36&width=36&text=${i + 1}`}
                                      alt="Avatar"
                                    />
                                    <AvatarFallback>I{i + 1}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="font-medium">Instructor Name {i + 1}</div>
                                    <div className="text-sm text-muted-foreground">instructor{i + 1}@example.com</div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4 align-middle">
                                {i % 4 === 0
                                  ? "Web Development"
                                  : i % 4 === 1
                                    ? "Data Science"
                                    : i % 4 === 2
                                      ? "Mobile Development"
                                      : "Design"}
                              </td>
                              <td className="p-4 align-middle">{i + 2}</td>
                              <td className="p-4 align-middle">{(i + 1) * 120}</td>
                              <td className="p-4 align-middle">${((i + 1) * 1250).toLocaleString()}</td>
                              <td className="p-4 align-middle">
                                <span
                                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    i % 3 === 0
                                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                      : i % 3 === 1
                                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                  }`}
                                >
                                  {i % 3 === 0 ? "Active" : i % 3 === 1 ? "Pending" : "Featured"}
                                </span>
                              </td>
                              <td className="p-4 align-middle">
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="sm">
                                    View
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    Edit
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing <strong>1-10</strong> of <strong>248</strong> instructors
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
          <TabsContent value="top-performers" className="space-y-4">
            {/* Top performers tab content would go here */}
          </TabsContent>
          <TabsContent value="applications" className="space-y-4">
            {/* Applications tab content would go here */}
          </TabsContent>
          <TabsContent value="payouts" className="space-y-4">
            {/* Payouts tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

