import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, Download, FileText, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function AdminRevenuePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight admin-text-gradient-primary">Revenue Management</h2>
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
            <Button className="admin-gradient-primary">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="admin-gradient-primary admin-card-hover animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="admin-stat-value">$248,456.78</div>
              <div className="admin-stat-change positive">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+12.5% from last period</span>
              </div>
            </CardContent>
          </Card>
          <Card className="admin-gradient-secondary admin-card-hover animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Instructor Payouts</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="admin-stat-value">$124,228.39</div>
              <div className="admin-stat-change positive">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+8.2% from last period</span>
              </div>
            </CardContent>
          </Card>
          <Card className="admin-gradient-success admin-card-hover animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="admin-stat-value">$124,228.39</div>
              <div className="admin-stat-change positive">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+16.8% from last period</span>
              </div>
            </CardContent>
          </Card>
          <Card className="admin-gradient-info admin-card-hover animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Revenue Per User</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="admin-stat-value">$42.75</div>
              <div className="admin-stat-change positive">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+3.8% from last period</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="instructors">Instructor Revenue</TabsTrigger>
            <TabsTrigger value="courses">Course Revenue</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 admin-gradient-neutral admin-card-hover animate-fade-in">
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Monthly revenue breakdown for the past year</CardDescription>
                </CardHeader>
                <CardContent className="admin-chart-container">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Revenue+Trends+Chart"
                    alt="Revenue Trends Chart"
                    width={600}
                    height={300}
                    className="rounded-md"
                  />
                  <div className="admin-chart-legend">
                    <div className="admin-chart-legend-item">
                      <div className="admin-chart-legend-color admin-chart-color-1"></div>
                      <span>Total Revenue</span>
                    </div>
                    <div className="admin-chart-legend-item">
                      <div className="admin-chart-legend-color admin-chart-color-2"></div>
                      <span>Instructor Payouts</span>
                    </div>
                    <div className="admin-chart-legend-item">
                      <div className="admin-chart-legend-color admin-chart-color-3"></div>
                      <span>Platform Revenue</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3 admin-gradient-neutral admin-card-hover animate-fade-in">
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
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="admin-gradient-neutral admin-card-hover animate-fade-in">
                <CardHeader>
                  <CardTitle>Top Revenue Generating Courses</CardTitle>
                  <CardDescription>Best performing courses by revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="font-bold text-lg">{i + 1}.</div>
                        <div className="flex-1">
                          <div className="font-medium">Course Title {i + 1}</div>
                          <div className="text-sm text-muted-foreground">
                            ${(99.99 - i * 5).toFixed(2)} • {2500 - i * 300} enrollments
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${((99.99 - i * 5) * (2500 - i * 300)).toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Total Revenue</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="admin-gradient-neutral admin-card-hover animate-fade-in">
                <CardHeader>
                  <CardTitle>Top Earning Instructors</CardTitle>
                  <CardDescription>Instructors with highest revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                            alt={`Instructor ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Instructor Name {i + 1}</div>
                          <div className="text-sm text-muted-foreground">
                            {8 - i} courses • ${(50000 - i * 8000).toLocaleString()} revenue
                          </div>
                        </div>
                        <Badge className="admin-badge-success">+{12 - i}%</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="admin-gradient-neutral admin-card-hover animate-fade-in">
                <CardHeader>
                  <CardTitle>Revenue Reports</CardTitle>
                  <CardDescription>Download financial reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Monthly Revenue Report", period: "June 2023", type: "Excel" },
                      { title: "Quarterly Financial Summary", period: "Q2 2023", type: "PDF" },
                      { title: "Instructor Payout Report", period: "June 2023", type: "Excel" },
                      { title: "Tax Summary Report", period: "2023 YTD", type: "PDF" },
                      { title: "Revenue Forecast", period: "Q3 2023", type: "Excel" },
                    ].map((report, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-md border hover:bg-muted/50 transition-colors"
                      >
                        <div>
                          <div className="font-medium">{report.title}</div>
                          <div className="text-sm text-muted-foreground">{report.period}</div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1">
                          <FileText className="h-4 w-4" />
                          {report.type}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="instructors" className="space-y-4">
            {/* Instructor revenue tab content would go here */}
            <Card className="admin-gradient-neutral admin-card-hover animate-fade-in">
              <CardHeader>
                <CardTitle>Instructor Revenue</CardTitle>
                <CardDescription>Detailed breakdown of instructor earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto admin-scrollbar">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th className="admin-table-header">Instructor</th>
                          <th className="admin-table-header">Courses</th>
                          <th className="admin-table-header">Students</th>
                          <th className="admin-table-header">Gross Revenue</th>
                          <th className="admin-table-header">Platform Fee</th>
                          <th className="admin-table-header">Net Earnings</th>
                          <th className="admin-table-header">Payout Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 10 }).map((_, i) => (
                          <tr key={i} className="admin-table-row">
                            <td className="admin-table-cell">
                              <div className="flex items-center gap-3">
                                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                                  <Image
                                    src={`/placeholder.svg?height=32&width=32&text=${i + 1}`}
                                    alt={`Instructor ${i + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="font-medium">Instructor Name {i + 1}</div>
                              </div>
                            </td>
                            <td className="admin-table-cell">{8 - (i % 5)}</td>
                            <td className="admin-table-cell">{(2500 - i * 200).toLocaleString()}</td>
                            <td className="admin-table-cell">${(45000 - i * 3000).toLocaleString()}</td>
                            <td className="admin-table-cell">${(13500 - i * 900).toLocaleString()}</td>
                            <td className="admin-table-cell">${(31500 - i * 2100).toLocaleString()}</td>
                            <td className="admin-table-cell">
                              <Badge
                                className={
                                  i % 3 === 0
                                    ? "admin-badge-success"
                                    : i % 3 === 1
                                      ? "admin-badge-warning"
                                      : "admin-badge-info"
                                }
                              >
                                {i % 3 === 0 ? "Paid" : i % 3 === 1 ? "Pending" : "Processing"}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="courses" className="space-y-4">
            {/* Course revenue tab content would go here */}
          </TabsContent>
          <TabsContent value="transactions" className="space-y-4">
            {/* Transactions tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

