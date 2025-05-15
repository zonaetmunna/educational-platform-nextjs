import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock cart items
const cartItems = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Jane Smith",
    image: "/placeholder.svg?height=80&width=120",
    price: 89.99,
    originalPrice: 129.99,
  },
  {
    id: 2,
    title: "Python for Data Science and Machine Learning",
    instructor: "John Davis",
    image: "/placeholder.svg?height=80&width=120",
    price: 94.99,
    originalPrice: 149.99,
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0)
  const discount = cartItems.reduce((total, item) => total + (item.originalPrice - item.price), 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <p className="text-muted-foreground">Review your items before checkout</p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid w-full gap-8 md:grid-cols-3">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart Items ({cartItems.length})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 py-4">
                      <div className="relative h-20 w-32 overflow-hidden rounded-md">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">By {item.instructor}</p>
                        <div className="flex items-center text-sm">
                          <span className="font-medium">${item.price.toFixed(2)}</span>
                          <span className="ml-2 line-through text-muted-foreground">
                            ${item.originalPrice.toFixed(2)}
                          </span>
                          <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Continue Shopping</Button>
                  <Button
                    variant="outline"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                  >
                    Clear Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Discount</span>
                      <span className="text-green-600 dark:text-green-400">-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input placeholder="Enter coupon code" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <ShoppingCart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any courses to your cart yet.</p>
            <Button asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

