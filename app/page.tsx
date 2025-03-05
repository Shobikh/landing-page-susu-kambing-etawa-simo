import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Menu, Phone, Mail, MapPin, Instagram, Facebook, X } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Susu Kambing Etawa Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold">Susu Kambing Etawa</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
              Benefits
            </Link>
            <Link href="#comparison" className="text-sm font-medium hover:underline underline-offset-4">
              Why Goat Milk?
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  100% Natural & Organic
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Discover the Goodness of Premium Etawa Goat Milk
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Pure, nutritious, and packed with essential nutrients. Our Etawa Goat Milk is sourced from healthy,
                  grass-fed goats raised in pristine environments.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                    <Link href="#contact">Order Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#benefits">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:order-last">
                <Image
                  src="/product-image.png"
                  alt="Etawa Goat Milk"
                  width={500}
                  height={400}
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Our Etawa Goat Milk
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our premium Etawa Goat Milk comes from the renowned Etawa breed, known for producing the highest
                  quality milk with exceptional nutritional value.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/product-image.jpg"
                alt="Etawa Goats"
                width={500}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                    <div>
                      <h3 className="font-bold">Ethically Sourced</h3>
                      <p className="text-muted-foreground">
                        Our goats are raised in a stress-free environment with access to natural pastures and clean
                        water.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                    <div>
                      <h3 className="font-bold">Carefully Processed</h3>
                      <p className="text-muted-foreground">
                        We use gentle pasteurization methods to preserve the natural nutrients while ensuring safety.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                    <div>
                      <h3 className="font-bold">No Additives</h3>
                      <p className="text-muted-foreground">
                        Our milk contains no preservatives, artificial flavors, or hormones - just pure, natural
                        goodness.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Etawa Goat Milk Over Cow's Milk?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the unique advantages that make Etawa Goat Milk a superior choice for your health and
                  wellbeing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Etawa Goat Milk</CardTitle>
                  <CardDescription className="text-center">Nature's Perfect Nutrition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                      <span>Smaller fat globules - easier to digest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                      <span>Lower in lactose - better for lactose-sensitive people</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                      <span>Higher in essential vitamins A, B, and E</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                      <span>Contains more calcium and potassium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                      <span>Naturally homogenized structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                      <span>Closer to human milk in composition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600 shrink-0" />
                      <span>Contains selenium - an important antioxidant</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Cow's Milk</CardTitle>
                  <CardDescription className="text-center">Common But Less Digestible</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <X className="mt-1 h-5 w-5 text-red-500 shrink-0" />
                      <span>Larger fat globules - harder to digest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="mt-1 h-5 w-5 text-red-500 shrink-0" />
                      <span>Higher lactose content - may cause digestive issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="mt-1 h-5 w-5 text-red-500 shrink-0" />
                      <span>Contains A1 casein protein - potential allergen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="mt-1 h-5 w-5 text-red-500 shrink-0" />
                      <span>Requires homogenization processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="mt-1 h-5 w-5 text-red-500 shrink-0" />
                      <span>Lower in some essential minerals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="mt-1 h-5 w-5 text-red-500 shrink-0" />
                      <span>More common to cause allergic reactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="mt-1 h-5 w-5 text-red-500 shrink-0" />
                      <span>Often contains added hormones and antibiotics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Health Benefits of Etawa Goat Milk
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover how Etawa Goat Milk can improve your overall health and wellbeing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="p-2 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Easier Digestion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The smaller fat molecules and unique protein structure make goat milk easier to digest, reducing
                    bloating and discomfort.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="p-2 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Reduced Allergic Reactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Many people who are allergic to cow's milk can tolerate goat milk due to its different protein
                    structure.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="p-2 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Improved Nutrient Absorption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The bioavailability of nutrients in goat milk means your body can absorb and utilize them more
                    efficiently.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="p-2 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Stronger Bones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Higher calcium content helps build and maintain strong bones and teeth, reducing the risk of
                    osteoporosis.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="p-2 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Immune System Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Rich in selenium and other antioxidants that help strengthen your immune system and fight off
                    infections.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="p-2 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Heart Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Contains medium-chain fatty acids that can help lower cholesterol levels and support cardiovascular
                    health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it - hear from people who have experienced the benefits of our Etawa Goat
                  Milk.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <p className="italic">
                    "I've been lactose intolerant for years and couldn't enjoy dairy products until I discovered Etawa
                    Goat Milk. It's been a game-changer for me!"
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="rounded-full bg-green-100 p-1">
                      <div className="h-8 w-8 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Sarah J.</p>
                      <p className="text-sm text-muted-foreground">Jakarta</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <p className="italic">
                    "My children love the taste, and as a mother, I love knowing they're getting superior nutrition.
                    Their allergies have improved significantly too!"
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="rounded-full bg-green-100 p-1">
                      <div className="h-8 w-8 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Dewi R.</p>
                      <p className="text-sm text-muted-foreground">Surabaya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <p className="italic">
                    "After switching to Etawa Goat Milk, my digestion has improved dramatically. No more bloating or
                    discomfort. Plus, it tastes great!"
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="rounded-full bg-green-100 p-1">
                      <div className="h-8 w-8 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Budi S.</p>
                      <p className="text-sm text-muted-foreground">Bandung</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Order Your Etawa Goat Milk Today
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Experience the health benefits of premium Etawa Goat Milk. Contact us or scan the QR code to place
                  your order.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>+62 812 3456 7890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span>info@susukambingetawa.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>Jl. Susu Sehat No. 123, Jakarta, Indonesia</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link href="#" className="text-green-600 hover:text-green-700">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-green-600 hover:text-green-700">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Available Products</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Fresh Etawa Goat Milk (250ml, 500ml, 1L)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Powdered Etawa Goat Milk (200g, 500g)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Etawa Goat Milk Yogurt (150g, 500g)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Etawa Goat Milk Soap and Skincare</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Scan to Order</h3>
                  <div className="bg-white p-4 rounded-xl shadow-md inline-block">
                    <Image src="/qr-code.png" alt="QR Code for ordering" width={200} height={200} className="mx-auto" />
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Scan this QR code with your phone camera to place an order directly through WhatsApp
                  </p>
                </div>
                <div className="w-full max-w-md mt-6">
                  <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    <Phone className="mr-2 h-4 w-4" /> Call to Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-green-50 py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Susu Kambing Etawa Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold">Susu Kambing Etawa</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Susu Kambing Etawa. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground max-w-md">
            Disclaimer: These statements have not been evaluated by food and drug authorities. This product is not
            intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>
    </div>
  )
}

