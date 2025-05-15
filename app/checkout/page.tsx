import Link from "next/link"
import Image from "next/image"
import { Check, CreditCard, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-muted-foreground">Complete your purchase to gain access to the course</p>
        </div>

        <div className="grid w-full gap-8 md:grid-cols-2">
          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="relative h-20 w-32 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=80&width=128"
                      alt="Course thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium">Complete Web Development Bootcamp</h3>
                    <p className="text-sm text-muted-foreground">By Jane Smith</p>
                    <div className="flex items-center text-sm">
                      <span className="font-medium">$89.99</span>
                      <span className="ml-2 line-through text-muted-foreground">$129.99</span>
                      <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        30% OFF
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>$89.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Discount</span>
                    <span className="text-green-600 dark:text-green-400">-$40.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>$7.20</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>$97.19</span>
                </div>

                <div className="rounded-md bg-muted p-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-muted-foreground" />
                    <span>You'll get lifetime access to this course and all future updates.</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>What You'll Get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span>Full access to all 42 hours of content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span>120+ coding exercises and challenges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span>5 real-world projects for your portfolio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span>Lifetime access and updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Information */}
          <div>
            <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Enter your payment details to complete your purchase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name on Card</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <div className="relative">
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div>
                    <Label>Payment Method</Label>
                    <RadioGroup defaultValue="card" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="save-card" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="save-card" className="text-sm">
                      Save card for future purchases
                    </Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full" size="lg">
                  Complete Purchase
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  By completing this purchase, you agree to our{" "}
                  <Link href="/terms" className="underline underline-offset-2 hover:text-primary">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline underline-offset-2 hover:text-primary">
                    Privacy Policy
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

