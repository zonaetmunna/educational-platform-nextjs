import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Building, CheckCircle, Clock, Mail, MapPin, MessageSquare, Phone, Send, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact Us | Educational Platform",
  description: "Get in touch with our team for support, feedback, or partnership opportunities",
}

export default function ContactPage() {
  return (
    <div className="container py-10 px-4 md:px-6 lg:py-16">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="general" className="gap-1.5">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">General Inquiry</span>
              </TabsTrigger>
              <TabsTrigger value="support" className="gap-1.5">
                <CheckCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Technical Support</span>
              </TabsTrigger>
              <TabsTrigger value="business" className="gap-1.5">
                <Building className="h-4 w-4" />
                <span className="hidden sm:inline">Business & Partnerships</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General Inquiry</CardTitle>
                  <CardDescription>Have a question about our platform or courses? We're here to help!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject of your inquiry" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide as much detail as possible..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>How did you hear about us?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="friend">Friend or Colleague</SelectItem>
                        <SelectItem value="ad">Advertisement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto gap-1.5">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="support">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Support</CardTitle>
                  <CardDescription>
                    Need help with a technical issue? Our support team is ready to assist you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="support-name">Full name</Label>
                      <Input id="support-name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="support-email">Email</Label>
                      <Input id="support-email" type="email" placeholder="Enter your email address" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="issue-type">Issue Type</Label>
                    <Select>
                      <SelectTrigger id="issue-type">
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account Access</SelectItem>
                        <SelectItem value="payment">Payment Issue</SelectItem>
                        <SelectItem value="course">Course Content</SelectItem>
                        <SelectItem value="video">Video Playback</SelectItem>
                        <SelectItem value="download">Download Problem</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <RadioGroup defaultValue="medium" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="priority-low" />
                        <Label htmlFor="priority-low" className="font-normal">
                          Low
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="priority-medium" />
                        <Label htmlFor="priority-medium" className="font-normal">
                          Medium
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="priority-high" />
                        <Label htmlFor="priority-high" className="font-normal">
                          High
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="support-subject">Subject</Label>
                    <Input id="support-subject" placeholder="Brief description of the issue" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="support-message">Detailed Description</Label>
                    <Textarea
                      id="support-message"
                      placeholder="Please describe the issue in detail, including any error messages..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="browser">Browser & Device Information</Label>
                    <Input id="browser" placeholder="e.g., Chrome 98 on Windows 10" />
                    <p className="text-xs text-muted-foreground mt-1">
                      This helps us troubleshoot browser-specific issues.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto gap-1.5">
                    <Send className="h-4 w-4" />
                    Submit Support Ticket
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="business">
              <Card>
                <CardHeader>
                  <CardTitle>Business & Partnerships</CardTitle>
                  <CardDescription>
                    Interested in partnering with us or exploring business opportunities? Let's connect!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Full name</Label>
                      <Input id="business-name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-email">Email</Label>
                      <Input id="business-email" type="email" placeholder="Enter your email address" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input id="job-title" placeholder="Enter your job title" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnership-type">Partnership Type</Label>
                    <Select>
                      <SelectTrigger id="partnership-type">
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="content">Content Partnership</SelectItem>
                        <SelectItem value="technology">Technology Integration</SelectItem>
                        <SelectItem value="marketing">Marketing Collaboration</SelectItem>
                        <SelectItem value="education">Educational Institution</SelectItem>
                        <SelectItem value="corporate">Corporate Training</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business-subject">Subject</Label>
                    <Input id="business-subject" placeholder="Enter the subject of your inquiry" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business-message">Proposal Details</Label>
                    <Textarea
                      id="business-message"
                      placeholder="Please describe your partnership proposal or business inquiry..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="https://your-company-website.com" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto gap-1.5">
                    <Send className="h-4 w-4" />
                    Submit Proposal
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">General Inquiries</span>
                  <span className="text-sm">24-48 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Technical Support</span>
                  <span className="text-sm">12-24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Business & Partnerships</span>
                  <span className="text-sm">2-3 business days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href="mailto:support@educationalplatform.com" className="hover:underline">
                      support@educationalplatform.com
                    </a>
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href="tel:+18001234567" className="hover:underline">
                      +1 (800) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    123 Education Street
                    <br />
                    Suite 456
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">How quickly will I receive a response?</h3>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all inquiries within 24-48 hours during business days.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Do you offer phone support?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, phone support is available for premium members and enterprise clients during business hours.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">How can I become an instructor?</h3>
                <p className="text-sm text-muted-foreground">
                  Visit our{" "}
                  <Link href="/apply-instructor" className="text-primary hover:underline">
                    Become an Instructor
                  </Link>{" "}
                  page to learn about the application process.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Connect With Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

