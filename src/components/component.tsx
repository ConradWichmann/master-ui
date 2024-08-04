import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import React from 'react';




export function Component() {
  return (
    <div className="flex flex-col min-h-dvh w-full">
<header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md header-rounded w-[90vw] max-w-6xl px-6 py-2 flex items-center justify-between shadow-lg">
  <Link href="#" className="flex items-center" prefetch={false}>
    <MountainIcon className="h-6 w-6" />
    <span className="sr-only">Acme Inc</span>
  </Link>
  <div className="flex items-center space-x-4">
    <nav className="hidden md:flex space-x-4">
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Features
      </Link>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Pricing
      </Link>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        About
      </Link>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Contact
      </Link>
    </nav>
    <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow">
      Get Started
    </Button>
  </div>
</header>
      <main className="flex-1">
        <section className="w-full pt-24 md:pt-32 lg:pt-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The complete platform for building the Web
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and
                    scale the best web experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="default">Get Started</Button>
                  <Button variant="outline">Contact Sales</Button>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="How it Works"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-first lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How the Product Works</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our platform is designed to make it easy for your team to build, deploy, and scale web applications.
                    With our powerful tools and infrastructure, you can focus on creating great user experiences without
                    worrying about the underlying technology.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="default">Learn More</Button>
                  <Button variant="outline">Contact Sales</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our pricing is designed to be simple and transparent, with options to fit your needs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for individuals and small teams.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$9</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Ideal for growing teams and businesses.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$29</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Tailored for large organizations and custom needs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">Custom</div>
                  <div className="text-sm text-muted-foreground">Contact us</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      {/* Footer remains unchanged */}
    </div>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}