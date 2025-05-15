import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Search, UserPlus } from "lucide-react"

export default function AdminUsersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add New User
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,243</div>
              <p className="text-xs text-muted-foreground">+856 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,876</div>
              <p className="text-xs text-muted-foreground">84% of total users</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Instructors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248</div>
              <p className="text-xs text-muted-foreground">+18 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-quaternary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Registrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">856</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all-users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all-users">All Users</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="admins">Admins</TabsTrigger>
          </TabsList>
          <TabsContent value="all-users" className="space-y-4">
            <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage all platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search users..." className="pl-8 w-full" />
                    </div>
                    <div className="flex space-x-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <Filter className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Filter by role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Roles</SelectItem>
                          <SelectItem value="student">Students</SelectItem>
                          <SelectItem value="instructor">Instructors</SelectItem>
                          <SelectItem value="admin">Admins</SelectItem>
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
                            <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Role</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Joined</th>
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
                                    <AvatarFallback>U{i + 1}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="font-medium">User Name {i + 1}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4 align-middle">user{i + 1}@example.com</td>
                              <td className="p-4 align-middle">
                                <div className="flex items-center">
                                  <span
                                    className={`inline-block w-2 h-2 rounded-full mr-2 ${
                                      i % 3 === 0 ? "bg-blue-500" : i % 3 === 1 ? "bg-green-500" : "bg-purple-500"
                                    }`}
                                  ></span>
                                  {i % 3 === 0 ? "Student" : i % 3 === 1 ? "Instructor" : "Admin"}
                                </div>
                              </td>
                              <td className="p-4 align-middle">
                                <span
                                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    i % 4 === 0
                                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                      : i % 4 === 1
                                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                                        : i % 4 === 2
                                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                  }`}
                                >
                                  {i % 4 === 0
                                    ? "Active"
                                    : i % 4 === 1
                                      ? "Pending"
                                      : i % 4 === 2
                                        ? "Suspended"
                                        : "Verified"}
                                </span>
                              </td>
                              <td className="p-4 align-middle">{new Date(2023, 0, i + 1).toLocaleDateString()}</td>
                              <td className="p-4 align-middle">
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="sm">
                                    Edit
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900"
                                  >
                                    Delete
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
                      Showing <strong>1-10</strong> of <strong>15,243</strong> users
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
          <TabsContent value="students" className="space-y-4">
            {/* Students tab content would go here */}
          </TabsContent>
          <TabsContent value="instructors" className="space-y-4">
            {/* Instructors tab content would go here */}
          </TabsContent>
          <TabsContent value="admins" className="space-y-4">
            {/* Admins tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

