import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Shield, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const HeroBackground = () => (
  <svg className="absolute top-0 right-0 w-1/3 h-auto text-primary/5 dark:text-primary/10" viewBox="0 0 400 600">
    <path d="M75 10 L340 10 L340 180 C340 280 200 350 200 350 C200 350 60 280 60 180 L60 10 Z" 
          className="fill-current"
          strokeWidth="2"/>
    <g className="stroke-primary/10 dark:stroke-primary/20" strokeWidth="1">
      <path d="M100 100 H300 M200 100 V250" fill="none" />
      <path d="M150 150 H250 M200 150 V200" fill="none" />
      <path d="M120 200 H280" fill="none" />
      <circle cx="200" cy="100" r="4" className="fill-primary/20 dark:fill-primary/30" />
      <circle cx="200" cy="150" r="4" className="fill-primary/20 dark:fill-primary/30" />
      <circle cx="200" cy="200" r="4" className="fill-primary/20 dark:fill-primary/30" />
    </g>
  </svg>
);

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 min-h-screen">
      <HeroBackground />
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10">
            <svg className="w-full h-full opacity-10" viewBox="0 0 800 200">
              <path d="M0 100 C200 50 600 150 800 100" 
                    className="stroke-primary dark:stroke-primary/30" 
                    strokeWidth="2" 
                    strokeDasharray="8 4"
                    fill="none"/>
              <path d="M0 120 C200 70 600 170 800 120" 
                    className="stroke-primary dark:stroke-primary/30" 
                    strokeWidth="2"
                    strokeDasharray="8 4" 
                    fill="none"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 dark:from-primary dark:to-primary/60">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to your organization&apos;s needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* vCISO Service */}
          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Virtual CISO</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Strategic Security Leadership</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Expert security leadership and guidance tailored to your organization&apos;s needs. From policy development to 
                risk management, we provide comprehensive security program oversight.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">Monthly security steering</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">Risk assessment & management</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">Security program development</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full group" asChild>
                <Link href="/services/vciso" className="flex items-center justify-center">
                  Learn More About vCISO
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* ATO Service */}
          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">ATO as a Service</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">System Authorization & Compliance</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end management of your Authorization to Operate process. From initial assessment of your system to final 
                authorization, we handle the entire compliance journey.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">Accelerated compliance timeline</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">Complete system security</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">Dedicated compliance team</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full group" asChild>
                <Link href="/services/atoaas" className="flex items-center justify-center">
                  Learn More About ATO
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900/50 dark:to-slate-800/50 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold dark:text-gray-50">Not Sure Which Service You Need?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Schedule a consultation with our team to discuss your security needs and find the perfect solution for your organization.
              </p>
              <Button size="lg" className="group" asChild>
                <Link href="/contact" className="flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}