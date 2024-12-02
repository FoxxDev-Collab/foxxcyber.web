import React from 'react';
import { Shield, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex flex-col text-left md:w-1/2">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                    Securing Your Digital Future
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    At Foxx Cyber, we combine expertise, innovation, and dedication to protect 
                    your business in an ever-evolving digital landscape.
                  </p>
                </div>
                
                {/* Custom Globe SVG */}
                <div className="md:w-1/2 flex justify-center">
                  <svg className="w-full max-w-lg h-auto" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Circle */}
                    <circle cx="400" cy="300" r="250" className="fill-primary/10 dark:fill-primary/20"/>
                    
                    {/* Grid Lines */}
                    <g className="stroke-primary/30 dark:stroke-primary/40" strokeWidth="1">
                      {/* Latitude Lines */}
                      <path d="M150 300 Q400 200 650 300" fill="none"/>
                      <path d="M150 250 Q400 150 650 250" fill="none"/>
                      <path d="M150 350 Q400 250 650 350" fill="none"/>
                      <path d="M150 200 Q400 100 650 200" fill="none"/>
                      <path d="M150 400 Q400 300 650 400" fill="none"/>
                      
                      {/* Longitude Lines */}
                      <path d="M400 50 Q400 300 400 550" fill="none"/>
                      <path d="M300 50 Q300 300 300 550" fill="none"/>
                      <path d="M500 50 Q500 300 500 550" fill="none"/>
                      <path d="M200 100 Q200 300 200 500" fill="none"/>
                      <path d="M600 100 Q600 300 600 500" fill="none"/>
                    </g>
                    
                    {/* Connection Points */}
                    <g className="fill-primary dark:fill-primary/80">
                      <circle cx="350" cy="250" r="4"/>
                      <circle cx="450" cy="350" r="4"/>
                      <circle cx="250" cy="350" r="4"/>
                      <circle cx="550" cy="250" r="4"/>
                      <circle cx="400" cy="200" r="4"/>
                    </g>
                    
                    {/* Connection Lines */}
                    <g className="stroke-primary dark:stroke-primary/80" strokeWidth="2">
                      <line x1="350" y1="250" x2="450" y2="350"/>
                      <line x1="450" y1="350" x2="250" y2="350"/>
                      <line x1="250" y1="350" x2="550" y2="250"/>
                      <line x1="550" y1="250" x2="400" y2="200"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </section>
    
          {/* Core Values */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-50">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Expert Protection</h3>
                    <p className="text-gray-600 dark:text-gray-300">Delivering top-tier cybersecurity solutions with industry-leading expertise.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Client-Centric</h3>
                    <p className="text-gray-600 dark:text-gray-300">Tailoring our services to meet your unique security needs and goals.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <Award className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Certified Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-300">Our team holds leading industry certifications including CISM and Security+.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <Globe className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Global Protection</h3>
                    <p className="text-gray-600 dark:text-gray-300">Securing businesses worldwide with comprehensive cybersecurity solutions.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
    
          {/* Professional Journey */}
          <section className="py-16 bg-white/80 dark:bg-slate-800/80">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center dark:text-gray-50">Our Professional Journey</h2>
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-primary/20 dark:border-primary/40">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 dark:bg-primary/80"></div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Foundation in IT Security</h3>
                    <p className="text-gray-600 dark:text-gray-300">Starting with a strong foundation in IT and Security+ certification, 
                    our team brings fundamental security expertise to every project.</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-primary/20 dark:border-primary/40">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 dark:bg-primary/80"></div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Advanced Certifications</h3>
                    <p className="text-gray-600 dark:text-gray-300">Achieving CISM certification through ISACA demonstrates our 
                    commitment to mastering information security management.</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-primary/20 dark:border-primary/40">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 dark:bg-primary/80"></div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Continuous Growth</h3>
                    <p className="text-gray-600 dark:text-gray-300">We continuously pursue advanced certifications and stay 
                    updated with the latest in cybersecurity to better serve our clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }