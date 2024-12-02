import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Shield, FileCheck } from 'lucide-react';

export default function ATOaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col text-left md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                ATO as a Service
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Streamline your Authority to Operate process with our comprehensive service
              </p>
            </div>
            
            {/* Custom Shield SVG */}
            <div className="md:w-1/2 flex justify-center">
              <svg className="w-full max-w-lg h-auto" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {/* Shield Base */}
                <path 
                  d="M200 50 L350 100 L350 200 Q350 300 200 350 Q50 300 50 200 L50 100 Z" 
                  className="fill-primary/10 dark:fill-primary/20"
                />
                
                {/* Circuit Lines */}
                <g className="stroke-primary/30 dark:stroke-primary/40" strokeWidth="2" fill="none">
                  <path d="M100 150 L300 150" />
                  <path d="M150 200 L250 200" />
                  <path d="M120 250 L280 250" />
                  <path d="M200 150 L200 250" />
                  <path d="M150 150 L150 200" />
                  <path d="M250 150 L250 200" />
                </g>
                
                {/* Connection Points */}
                <g className="fill-primary dark:fill-primary/80">
                  <circle cx="150" cy="150" r="4" />
                  <circle cx="200" cy="150" r="4" />
                  <circle cx="250" cy="150" r="4" />
                  <circle cx="150" cy="200" r="4" />
                  <circle cx="200" cy="200" r="4" />
                  <circle cx="250" cy="200" r="4" />
                  <circle cx="200" cy="250" r="4" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What is ATO & Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold">What is ATO?</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  An Authority to Operate (ATO) is a formal declaration that authorizes a system to process information at an acceptable level of risk. It&apos;s required for systems that handle government data or operate in regulated environments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <FileCheck className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team of security experts has extensive experience in navigating the complex ATO process. We&apos;ll guide you through each step, ensuring compliance and minimizing delays.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Process</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto relative">
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold">Assessment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We evaluate your current system architecture and security controls against relevant standards and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold">Documentation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team prepares comprehensive documentation, including System Security Plans (SSP) and security control implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold">Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We implement required security controls and conduct testing to ensure compliance with ATO requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Background decoration */}
        <svg className="absolute top-0 right-0 -z-10 w-96 h-96 text-primary/5 dark:text-primary/10" viewBox="0 0 200 200">
          <path fill="currentColor" d="M44,-76.5C58.7,-69.1,73.3,-60.1,81.2,-47C89.1,-33.9,90.2,-16.9,88.7,-0.9C87.2,15.2,83,30.3,75.2,43.2C67.4,56.1,56,66.7,42.5,74.4C28.9,82.1,13.2,86.8,-1.9,89.7C-17,92.6,-34,93.7,-48.4,87.3C-62.8,81,-74.5,67.2,-83.3,51.8C-92.1,36.4,-98,19.2,-97.8,2.2C-97.5,-14.8,-91.1,-29.6,-82.1,-42.3C-73.1,-55,-61.5,-65.6,-47.8,-73.3C-34.1,-81,-17,-85.8,-1,-84.3C15,-82.8,30,-83.9,44,-76.5Z" />
        </svg>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900/50 dark:to-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold dark:text-gray-50">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Contact us today to learn how we can help streamline your ATO process
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 dark:text-gray-50">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">How long does the ATO process take?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The duration varies depending on system complexity and requirements. We&apos;ll provide a detailed timeline after initial assessment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">What standards do you support?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We support various frameworks including FedRAMP, NIST, and CMMC. Our team stays current with evolving requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">What happens after ATO is granted?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide continuous monitoring and support to maintain compliance and address any changes that might affect your ATO status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}