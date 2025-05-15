import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, Download, ShoppingCart, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AdminSalesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Sales & Revenue</h2>
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
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$142,456.78</div>
              <p className="text-xs text-muted-foreground">+12.5% from last period</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,845</div>
              <p className="text-xs text-muted-foreground">+8.2% from last period</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$49.75</div>
              <p className="text-xs text-muted-foreground">+3.8% from last period</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-quaternary card-hover-effect animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.8%</div>
              <p className="text-xs text-muted-foreground">+0.6% from last period</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
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
                  <CardTitle>Sales by Category</CardTitle>
                  <CardDescription>Distribution across course categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=350&text=Category+Sales+Chart"
                    alt="Category Sales Chart"
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
              <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Top Selling Courses</CardTitle>
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
                            ${(99.99 - i * 10).toFixed(2)} • {1000 - i * 100} sales
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${((99.99 - i * 10) * (1000 - i * 100)).toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Total</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Latest platform sales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="font-medium">Order #{1000 + i}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(2023, 0, 1 + i).toLocaleDateString()} •{" "}
                            {new Date(2023, 0, 1 + i).toLocaleTimeString()}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${(49.99 + i * 10).toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                i % 3 === 0
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                  : i % 3 === 1
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                              }`}
                            >
                              {i % 3 === 0 ? "Completed" : i % 3 === 1 ? "Processing" : "Refunded"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Distribution by payment type</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=350&text=Payment+Methods+Chart"
                    alt="Payment Methods Chart"
                    width={350}
                    height={200}
                    className="rounded-md"
                  />
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Credit Card (65%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">PayPal (20%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Apple Pay (10%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Other (5%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="orders" className="space-y-4">
            {/* Orders tab content would go here */}
          </TabsContent>
          <TabsContent value="products" className="space-y-4">
            {/* Products tab content would go here */}
          </TabsContent>
          <TabsContent value="customers" className="space-y-4">
            {/* Customers tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

