import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminSettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Platform Settings</h2>
          <div className="flex items-center space-x-2">
            <Button>Save Changes</Button>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="space-y-4">
            <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Manage your platform's general settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" defaultValue="EduPlatform" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platform-description">Platform Description</Label>
                  <Textarea
                    id="platform-description"
                    defaultValue="A comprehensive educational platform for online learning and skill development."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" type="email" defaultValue="contact@eduplatform.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input id="support-email" type="email" defaultValue="support@eduplatform.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                      <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                      <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                      <SelectItem value="mst">MST (Mountain Standard Time)</SelectItem>
                      <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Put the platform in maintenance mode</p>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save General Settings</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>Optimize your platform for search engines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta-title">Meta Title</Label>
                  <Input id="meta-title" defaultValue="EduPlatform - Learn Skills Online" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea
                    id="meta-description"
                    defaultValue="EduPlatform offers thousands of online courses in web development, data science, design, and more. Start learning today!"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-keywords">Meta Keywords</Label>
                  <Input
                    id="meta-keywords"
                    defaultValue="online courses, education, learning, web development, data science"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-sitemap">Enable Sitemap</Label>
                    <p className="text-sm text-muted-foreground">Automatically generate and update sitemap.xml</p>
                  </div>
                  <Switch id="enable-sitemap" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-robots">Enable robots.txt</Label>
                    <p className="text-sm text-muted-foreground">Allow search engines to index your platform</p>
                  </div>
                  <Switch id="enable-robots" defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save SEO Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="appearance" className="space-y-4">
            <Card className="bg-gradient-to-br from-background to-muted/20 card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
                <CardDescription>Customize your platform's appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Color Scheme</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="h-20 w-full rounded-md bg-gradient-primary"></div>
                      <span className="text-sm">Primary</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="h-20 w-full rounded-md bg-gradient-secondary"></div>
                      <span className="text-sm">Secondary</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="h-20 w-full rounded-md bg-gradient-tertiary"></div>
                      <span className="text-sm">Tertiary</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Theme Mode</Label>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="light-mode" name="theme-mode" className="h-4 w-4" defaultChecked />
                      <Label htmlFor="light-mode">Light</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="dark-mode" name="theme-mode" className="h-4 w-4" />
                      <Label htmlFor="dark-mode">Dark</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="system-mode" name="theme-mode" className="h-4 w-4" />
                      <Label htmlFor="system-mode">System</Label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-animations">Enable Animations</Label>
                    <p className="text-sm text-muted-foreground">Show animations throughout the platform</p>
                  </div>
                  <Switch id="enable-animations" defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Theme Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="payments" className="space-y-4">
            {/* Payments tab content would go here */}
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            {/* Notifications tab content would go here */}
          </TabsContent>
          <TabsContent value="advanced" className="space-y-4">
            {/* Advanced tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

