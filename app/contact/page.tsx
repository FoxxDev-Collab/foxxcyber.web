"use client"
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Loader2, MessageSquare, Phone, Mail, Clock, MapPin } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from 'sonner'

const ContactBackground = () => (
  <svg className="absolute top-0 right-0 w-1/3 h-auto text-primary/5 dark:text-primary/10" viewBox="0 0 400 800">
    {/* Communication circles pattern */}
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
    </defs>
    
    {/* Main signal circle */}
    <circle cx="200" cy="200" r="150" className="fill-none stroke-current" strokeWidth="2" />
    
    {/* Signal waves */}
    <g className="stroke-current" fill="none" strokeWidth="2">
      <path d="M140 200 Q200 150 260 200" />
      <path d="M120 200 Q200 120 280 200" strokeDasharray="4 6" />
      <path d="M100 200 Q200 90 300 200" strokeDasharray="4 8" />
    </g>
    
    {/* Connection points */}
    <circle cx="200" cy="200" r="8" className="fill-current" />
    <circle cx="140" cy="200" r="4" className="fill-current" />
    <circle cx="260" cy="200" r="4" className="fill-current" />
    
    {/* Background grid */}
    <rect x="50" y="300" width="300" height="400" fill="url(#grid)" opacity="0.2" />
  </svg>
);

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true)
    setIsSuccess(false)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || data.detail || 'Failed to submit form')
      }

      setIsSuccess(true)
      toast.success('Thank you for your message! We will contact you soon.')
      form.reset()
      
    } catch (error) {
      console.error('Contact form submission error:', error)
      toast.error(error instanceof Error ? error.message : 'Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      <ContactBackground />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 dark:from-primary dark:to-primary/60">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help secure your digital future. Reach out to discuss how we can 
              protect your organization with our comprehensive cybersecurity solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Foxx Cyber</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Expert Team</h3>
                      <p className="text-muted-foreground">
                        Our certified professionals bring years of experience in cybersecurity and compliance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Comprehensive Solutions</h3>
                      <p className="text-muted-foreground">
                        From ATO to risk analysis, we provide end-to-end security services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Client-Focused Approach</h3>
                      <p className="text-muted-foreground">
                        We tailor our services to meet your specific needs and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@foxxcyber.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-center text-muted-foreground">
                    <p>Have a question or need assistance? We're here to help!</p>
                    <p>Fill out the form below and our team will get back to you shortly.</p>
                  </div>

                  {isSuccess && (
                    <Alert className="mb-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <AlertDescription className="text-green-800 dark:text-green-200">
                        Your message has been sent successfully! We'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-white/50 dark:bg-slate-900/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} className="bg-white/50 dark:bg-slate-900/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 000-0000" {...field} className="bg-white/50 dark:bg-slate-900/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Name" {...field} className="bg-white/50 dark:bg-slate-900/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="How can we help you?"
                                className="min-h-[120px] bg-white/50 dark:bg-slate-900/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}