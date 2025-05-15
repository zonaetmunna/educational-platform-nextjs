import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Terms of Service | Educational Platform",
  description: "Terms of Service for our educational platform",
}

export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-10 px-4 md:px-6 lg:py-16">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
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
              <p className="text-sm text-muted-foreground">Version 2.1</p>
            </div>

            <Separator className="my-6" />

            <h2 className="text-xl font-semibold tracking-tight">1. Introduction</h2>
            <p>
              Welcome to our educational platform. These Terms of Service ("Terms") govern your access to and use of our
              website, services, and applications (collectively, the "Services"). By accessing or using our Services,
              you agree to be bound by these Terms and our Privacy Policy.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">2. Accounts and Registration</h2>
            <p>
              To access certain features of the Services, you may be required to register for an account. When you
              register, you agree to provide accurate, current, and complete information about yourself. You are
              responsible for safeguarding your password and for all activities that occur under your account.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">3. Content and Licenses</h2>
            <p>
              Our Services allow you to access educational content, including courses, tutorials, videos, and code
              samples (collectively, "Content"). All Content available through our Services is owned by us or our
              licensors and is protected by intellectual property laws.
            </p>
            <p>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable
              license to access and use the Content solely for your personal, non-commercial educational purposes.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6">
              <li>Use the Services in any way that violates any applicable law or regulation</li>
              <li>Share your account credentials with others or allow others to access your account</li>
              <li>Copy, modify, distribute, sell, or lease any part of our Services or Content</li>
              <li>Reverse engineer or attempt to extract the source code of our software</li>
              <li>Use the Services to transmit any malware or other harmful code</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Collect or harvest any information from the Services without authorization</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">5. Payments and Subscriptions</h2>
            <p>
              Some of our Services require payment. By purchasing a subscription or individual course, you agree to pay
              all fees in accordance with the pricing and payment terms presented to you. All payments are
              non-refundable except as expressly set forth in our Refund Policy.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">6. Termination</h2>
            <p>
              We may terminate or suspend your access to the Services immediately, without prior notice or liability,
              for any reason, including if you breach these Terms. Upon termination, your right to use the Services will
              immediately cease.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES AND CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">8. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING
              FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we
              will notify you by email or by posting a notice on our website prior to the changes becoming effective.
              Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without
              regard to its conflict of law provisions.
            </p>

            <h2 className="mt-8 text-xl font-semibold tracking-tight">11. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
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

