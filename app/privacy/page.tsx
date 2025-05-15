import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Privacy Policy | Educational Platform",
  description: "Privacy Policy for our educational platform",
}

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-10 px-4 md:px-6 lg:py-16">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5">
            <FileText className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <Card className="border bg-card shadow-sm">
        <CardContent className="p-6 pt-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Last updated: March 24, 2025</p>
              <div className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">GDPR Compliant</span>
              </div>
            </div>

            <Separator className="my-6" />

            <h2 className="text-xl font-semibold tracking-tight">1. Introduction</h2>
            <p>
              We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our educational platform and
              services.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our platform, including:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Personal Data:</strong> Name, email address, billing information, and other contact details you
                provide when registering or purchasing courses.
              </li>
              <li>
                <strong>Profile Data:</strong> Your username, password, purchases, interests, preferences, feedback, and
                survey responses.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our platform, including courses viewed,
                completion rates, quiz results, and time spent on content.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type and version, device information, operating
                system, and other technology identifiers on the devices you use to access our platform.
              </li>
              <li>
                <strong>Marketing Data:</strong> Your preferences in receiving marketing communications from us.
              </li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">3. How We Collect Your Information</h2>
            <p>We collect information through:</p>
            <ul className="list-disc pl-6">
              <li>Direct interactions when you create an account, purchase courses, or contact us</li>
              <li>Automated technologies such as cookies and similar tracking technologies</li>
              <li>Third parties such as payment processors and analytics providers</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">4. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6">
              <li>Provide, maintain, and improve our platform and services</li>
              <li>Process transactions and send related information</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Communicate with you about updates, security alerts, and support messages</li>
              <li>Monitor usage patterns and conduct analytics to improve our platform</li>
              <li>Detect, prevent, and address technical issues and fraudulent activities</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">5. Disclosure of Your Information</h2>
            <p>We may disclose your personal information to:</p>
            <ul className="list-disc pl-6">
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners with whom we jointly offer products or services</li>
              <li>Law enforcement or other governmental authorities when required by law</li>
              <li>A buyer or successor in the event of a merger, acquisition, or similar business transaction</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">6. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally
              lost, used, accessed, altered, or disclosed in an unauthorized way. We limit access to your personal data
              to employees, agents, contractors, and other third parties who have a business need to know.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">7. Data Retention</h2>
            <p>
              We will retain your personal data only for as long as necessary to fulfill the purposes for which we
              collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">8. Your Legal Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate personal data</li>
              <li>Right to erasure (the "right to be forgotten")</li>
              <li>Right to restrict processing of your personal data</li>
              <li>Right to data portability</li>
              <li>Right to object to processing of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">9. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our platform and store certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">10. Children's Privacy</h2>
            <p>
              Our platform is not intended for children under the age of 16. We do not knowingly collect personal data
              from children under 16. If you are a parent or guardian and you are aware that your child has provided us
              with personal data, please contact us.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">11. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">
              <Link href="/contact" className="text-primary hover:underline">
                Contact Page
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

