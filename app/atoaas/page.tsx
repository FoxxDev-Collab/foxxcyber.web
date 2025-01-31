import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Shield, FileCheck, Cloud, Server, Network, CheckCircle, ArrowRight } from 'lucide-react';

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
                Comprehensive system security and compliance for your mission-critical applications, wether they be on the cloud, on-premises, or a mix of both. Foxx Cyber 
                professionals have experience in securiting systems within the federal government and can help you achieve your ATO.
              </p>
            </div>
            
            {/* Custom Shield SVG - keeping the existing one as it works well */}
            <div className="md:w-1/2 flex justify-center">
              <svg className="w-full max-w-lg h-auto" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 50 L350 100 L350 200 Q350 300 200 350 Q50 300 50 200 L50 100 Z" 
                  className="fill-primary/10 dark:fill-primary/20"/>
                <g className="stroke-primary/30 dark:stroke-primary/40" strokeWidth="2" fill="none">
                  <path d="M100 150 L300 150" />
                  <path d="M150 200 L250 200" />
                  <path d="M120 250 L280 250" />
                  <path d="M200 150 L200 250" />
                  <path d="M150 150 L150 200" />
                  <path d="M250 150 L250 200" />
                </g>
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

      {/* What is ATO & System Security */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold">System-Level Security</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Our ATO service provides comprehensive security coverage for your entire system - from infrastructure 
                  components like VMs and firewalls to application code and third-party integrations. We ensure every 
                  aspect of your system meets rigorous security standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <FileCheck className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold">Compliance Coverage</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Whether you need FedRAMP, NIST, or CMMC compliance, our team guides you through the entire process - 
                  from initial system categorization to continuous monitoring, ensuring your ATO package meets all 
                  regulatory requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Types & Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">System-Specific ATO Packages</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Cloud Systems */}
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                    <Cloud className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Cloud Systems</CardTitle>
                    <p className="text-sm text-gray-500">4-6 Month Timeline</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="mb-6">
                  <p className="text-3xl font-bold">$75,000+</p>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Cloud-native applications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    SaaS platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Cloud security architecture review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    CSP compliance mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Container security assessment
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* On-Premises Systems */}
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>On-Premises</CardTitle>
                    <p className="text-sm text-gray-500">6-8 Month Timeline</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="mb-6">
                  <p className="text-3xl font-bold">$100,000+</p>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Data center systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Legacy applications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Physical security assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Network security review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    System hardening
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Hybrid Systems */}
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                    <Network className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Hybrid Systems</CardTitle>
                    <p className="text-sm text-gray-500">8-12 Month Timeline</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="mb-6">
                  <p className="text-3xl font-bold">$150,000+</p>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Mixed infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Complex integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Boundary analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Multi-environment controls
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary/70" />
                    Cross-platform security
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps - keeping but updated content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our ATO Process</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto relative">
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold">System Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete system inventory and architecture review, security categorization, and control selection based on 
                  system type and compliance requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold">Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Security control implementation, documentation development including SSP, and creation of all required 
                  artifacts and evidence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-transform">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold">Authorization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Assessment coordination, POA&M development, package submission, and transition to continuous monitoring 
                  after authorization.
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
            <h2 className="text-3xl font-semibold dark:text-gray-50">Ready to Secure Your System?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Contact us today to discuss your system&apos;s security requirements and start your ATO journey
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/contact" className="flex items-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
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
                <h3 className="text-xl font-semibold">What exactly constitutes a &quot;system&quot; for ATO purposes?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A system encompasses all components needed to deliver your service or application - including infrastructure 
                  (VMs, networks, firewalls), software components, databases, and third-party integrations. Our ATO package 
                  covers everything within your system boundary that needs to be secured and documented.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">How do you handle system changes during the ATO process?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We implement change management procedures from the start. While major system changes during the ATO process 
                  should be minimized, our approach includes flexibility for necessary updates and proper documentation of 
                  all changes to maintain compliance alignment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">What happens after we receive our ATO?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We transition into continuous monitoring mode, helping you maintain your security posture and ATO status. 
                  This includes regular control assessments, continuous monitoring implementation, security metric tracking, 
                  and support for system updates or changes that could impact your authorization status.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">What determines the final pricing for an ATO package?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Pricing is based on system complexity factors including number of interfaces/integrations, data sensitivity 
                  levels, user base size, technical architecture complexity, and specific compliance requirements. We provide 
                  detailed pricing after initial system assessment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    );
  }