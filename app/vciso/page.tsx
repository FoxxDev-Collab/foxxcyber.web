import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Users, Clock, CheckCircle, ArrowRight, FileCheck, Lock } from 'lucide-react'

export default function vCISOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col text-left md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                Virtual CISO Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Expert security leadership and guidance tailored to your organization&apos;s needs. Foxx Cyber vCISO is your business security partner in your pocket.
              </p>
            </div>
            
            {/* Security Leadership Illustration */}
            <div className="md:w-1/2 flex justify-center">
              <svg className="w-full max-w-lg h-auto" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {/* Organization Circle */}
                <circle cx="200" cy="200" r="160" className="fill-primary/5 dark:fill-primary/10" />
                
                {/* Leadership Web Lines */}
                <g className="stroke-primary/30 dark:stroke-primary/40" fill="none" strokeWidth="2">
                  <path d="M200 100 L200 300" />
                  <path d="M100 200 L300 200" />
                  <path d="M130 130 L270 270" />
                  <path d="M130 270 L270 130" />
                </g>
                
                {/* Connection Points */}
                <g className="fill-primary dark:fill-primary/80">
                  <circle cx="200" cy="100" r="8" />
                  <circle cx="300" cy="200" r="8" />
                  <circle cx="200" cy="300" r="8" />
                  <circle cx="100" cy="200" r="8" />
                  <circle cx="200" cy="200" r="12" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-50">Service Tiers</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Foundation Tier */}
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Foundation</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">For Small Businesses</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold">$2,000<span className="text-lg font-normal text-gray-500">/month</span></p>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Monthly security steering committee
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Basic security policy development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Quarterly risk assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Up to 10 hours monthly advisory
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Basic vendor security reviews
                  </li>
                </ul>
                <Button className="w-full mt-6 group" asChild>
                  <Link href="/contact" className="flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Tier */}
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-primary text-white text-sm py-1 px-3 rounded-full">
                Most Popular
              </div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Professional</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">For Medium Businesses</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold">$4,000<span className="text-lg font-normal text-gray-500">/month</span></p>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Everything in Foundation, plus:
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Bi-weekly security meetings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Comprehensive policy framework
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Monthly risk assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Up to 20 hours monthly advisory
                  </li>
                </ul>
                <Button className="w-full mt-6 group" asChild>
                  <Link href="/contact" className="flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Tier */}
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Enterprise</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">For Large Organizations</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold">$8,000<span className="text-lg font-normal text-gray-500">/month</span></p>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Everything in Professional, plus:
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Weekly security meetings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Board meeting participation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Up to 40 hours monthly advisory
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Advanced security metrics program
                  </li>
                </ul>
                <Button className="w-full mt-6 group" asChild>
                  <Link href="/contact" className="flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-50">Why Choose Our vCISO Services?</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Expert Leadership</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access to seasoned security professionals with CISSP and CISM certifications
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Flexible Engagement</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Scalable services that grow with your organization&apos;s needs
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="pt-6">
                <FileCheck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Comprehensive Coverage</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Full spectrum of security program management and strategic guidance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900/50 dark:to-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold dark:text-gray-50">Ready to Strengthen Your Security?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Contact us today to discuss how our vCISO services can help protect your organization
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
  )
}