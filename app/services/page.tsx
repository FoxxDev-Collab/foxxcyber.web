import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Shield, Clock, CheckCircle, Search, FileCheck, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

// Enhanced background SVG with dark mode support
const HeroBackground = () => (
  <svg className="absolute top-0 right-0 w-1/3 h-auto text-primary/5 dark:text-primary/10" viewBox="0 0 400 600">
    {/* Main Shield */}
    <path d="M75 10 L340 10 L340 180 C340 280 200 350 200 350 C200 350 60 280 60 180 L60 10 Z" 
          className="fill-current"
          strokeWidth="2"/>
    
    {/* Circuit Lines */}
    <g className="stroke-primary/10 dark:stroke-primary/20" strokeWidth="1">
      <path d="M100 100 H300 M200 100 V250" fill="none" />
      <path d="M150 150 H250 M200 150 V200" fill="none" />
      <path d="M120 200 H280" fill="none" />
      <circle cx="200" cy="100" r="4" className="fill-primary/20 dark:fill-primary/30" />
      <circle cx="200" cy="150" r="4" className="fill-primary/20 dark:fill-primary/30" />
      <circle cx="200" cy="200" r="4" className="fill-primary/20 dark:fill-primary/30" />
    </g>
    
    {/* Geometric Shapes */}
    <circle cx="320" cy="400" r="60" className="fill-current opacity-50"/>
    <rect x="60" y="450" width="110" height="90" className="fill-current opacity-30"/>
  </svg>
);

interface ServiceDecorationProps {
  variant?: number;
}

const ServiceDecoration: React.FC<ServiceDecorationProps> = ({ variant = 1 }) => {
  const decorations = {
    1: (
      <svg className="absolute -z-10 right-0 top-0 w-64 h-64 text-primary/5 dark:text-primary/10" viewBox="0 0 200 200">
        <defs>
          <linearGradient id={`grad1-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <g transform="translate(20, 20)">
          <circle cx="80" cy="80" r="70" className="fill-none stroke-current" strokeWidth="8"/>
          <path d="M40 80 Q80 120 120 80 Q80 40 40 80" 
                fill={`url(#grad1-${variant})`}
                className="stroke-current"
                strokeWidth="4"/>
          <circle cx="80" cy="80" r="20" className="fill-current opacity-20" />
        </g>
      </svg>
    ),
    2: (
      <svg className="absolute -z-10 right-0 top-0 w-64 h-64 text-primary/5 dark:text-primary/10" viewBox="0 0 200 200">
        <defs>
          <pattern id={`grid-${variant}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <g transform="translate(20, 20)">
          <rect x="20" y="20" width="140" height="140" className="fill-none stroke-current" strokeWidth="4"/>
          <rect x="20" y="20" width="140" height="140" fill={`url(#grid-${variant})`} opacity="0.5"/>
          <circle cx="90" cy="90" r="30" className="fill-current opacity-20"/>
        </g>
      </svg>
    ),
    3: (
      <svg className="absolute -z-10 right-0 top-0 w-64 h-64 text-primary/5 dark:text-primary/10" viewBox="0 0 200 200">
        <g transform="translate(20, 20)">
          <path d="M20 20 L140 20 L140 140 L20 140 Z" className="fill-current opacity-10"/>
          <path d="M40 60 L120 60 M40 90 L120 90 M40 120 L120 120" 
                className="stroke-current"
                strokeWidth="4"
                fill="none"/>
          <circle cx="80" cy="80" r="40" className="fill-none stroke-current" strokeWidth="4"/>
        </g>
      </svg>
    )
  };

  return decorations[variant as keyof typeof decorations] || decorations[1];
};

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: string[];
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "ATO as a Service",
      description: "End-to-end management of your Authorization to Operate process, from initial assessment to final authorization.",
      icon: Shield,
      benefits: [
        "Comprehensive compliance gap analysis",
        "Documentation development and management",
        "Security control implementation guidance",
        "Continuous monitoring support"
      ]
    },
    {
      title: "Risk Analysis",
      description: "In-depth analysis of your security posture and compliance requirements.",
      icon: Search,
      benefits: [
        "Threat modeling and risk assessment",
        "Vulnerability scanning and analysis",
        "Security architecture review",
        "Mitigation strategy development"
      ]
    },
    {
      title: "Compliance Consulting",
      description: "Expert guidance through complex compliance requirements.",
      icon: FileCheck,
      benefits: [
        "NIST framework implementation",
        "FedRAMP preparation and guidance",
        "Custom compliance program development",
        "Policy and procedure development"
      ]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 min-h-screen">
      <HeroBackground />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
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
            Comprehensive cybersecurity and compliance solutions to protect your organization
            and achieve your compliance goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.title} className="relative">
              <ServiceDecoration variant={(index % 3) + 1} />
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-4">
                    <div className="p-3 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary/20 dark:to-primary/30 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className="h-full relative group backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <defs>
                        <linearGradient id={`cardGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.05 }} />
                          <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.1 }} />
                        </linearGradient>
                      </defs>
                      <path d="M0 0 L400 0 L400 300 L0 300 Z" fill={`url(#cardGrad-${index})`}/>
                      <circle cx="200" cy="150" r="100" 
                            className="fill-none stroke-primary/10 dark:stroke-primary/20" 
                            strokeWidth="2"
                            strokeDasharray="8 4"/>
                    </svg>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Why Choose This Service</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">Accelerated compliance timeline</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                        <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">Expert security guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                        <Users className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">Dedicated support team</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full group relative overflow-hidden" 
                      variant="default" 
                      asChild
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}