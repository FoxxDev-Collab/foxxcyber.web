'use client';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, AlertTriangle, CheckCircle, BarChart, Lock, FileText, TrendingUp } from 'lucide-react'
import BasicAssessment from './basic'
import AdvancedAssessment from './advanced'
import Link from 'next/link'

export default function RiskAssessmentPage() {
  const [assessmentType, setAssessmentType] = React.useState('select')

  const renderAssessmentSelector = () => (
    <div className="container mx-auto px-4">
      {/* Value proposition section before assessment selection */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">Identify Hidden Risks</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Discover security vulnerabilities you might not be aware of with our expert-designed assessment tools
          </p>
        </div>
        <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <BarChart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">Benchmark Your Security</h3>
          <p className="text-gray-600 dark:text-gray-300">
            See how your security measures compare to industry standards and best practices
          </p>
        </div>
        <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">Get Actionable Insights</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Receive prioritized recommendations that can be implemented immediately to improve your security posture
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-8 dark:text-gray-50">Choose Your Assessment Type</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all cursor-pointer relative overflow-hidden"
          onClick={() => setAssessmentType('basic')}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-primary"></div>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle>Basic Assessment</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">For small businesses & startups</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A quick evaluation of your essential security practices. Perfect for small businesses
              and organizations just starting their security journey.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0" />
                5-minute assessment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0" />
                Essential security checklist
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0" />
                Instant recommendations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0" />
                Downloadable PDF report
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full group">
              Start Basic Assessment
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all cursor-pointer relative overflow-hidden"
          onClick={() => setAssessmentType('advanced')}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-indigo-500"></div>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle>Advanced Assessment</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">For established businesses</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A comprehensive evaluation aligned with industry frameworks. Ideal for businesses
              with existing security measures looking for deeper insights.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0" />
                15-minute in-depth assessment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0" />
                NIST framework alignment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0" />
                Detailed category scoring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0" />
                Prioritized action plan
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0" />
                Executive summary report
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full group">
              Start Advanced Assessment
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Social proof section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-xl font-semibold mb-6 dark:text-gray-100">Trusted by Organizations Like Yours</h3>
        <div className="bg-white/50 dark:bg-slate-800/30 rounded-lg p-6">
          <blockquote className="text-lg italic text-gray-600 dark:text-gray-300 mb-4">
            &quot;The risk assessment helped us identify critical security gaps we weren&apos;t aware of. The recommendations were clear and actionable, allowing us to strengthen our security posture immediately.&quot;
          </blockquote>
          <p className="font-semibold">David Chen</p>
          <p className="text-sm text-gray-500">IT Director, MidWest Healthcare</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
              Free Cybersecurity Risk Assessment
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Evaluate your security posture in minutes and receive a personalized action plan to protect your business from today&apos;s cyber threats
            </p>
          </div>

          {assessmentType === 'select' && renderAssessmentSelector()}
          
          {assessmentType !== 'select' && (
            <div className="assessment-container max-w-4xl mx-auto">
              <Button 
                variant="outline" 
                onClick={() => setAssessmentType('select')}
                className="mb-6 no-print"
              >
                Back to Selection
              </Button>
              {assessmentType === 'basic' && <BasicAssessment />}
              {assessmentType === 'advanced' && <AdvancedAssessment />}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      {assessmentType !== 'select' && (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900/50 dark:to-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h2 className="text-3xl font-semibold mb-4 dark:text-gray-50">Expert Security Implementation</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Need help implementing these recommendations? Our security experts can:
                  </p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0" />
                      Develop a customized security roadmap based on your assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0" />
                      Implement critical security controls and best practices
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary/70 flex-shrink-0" />
                      Provide ongoing security monitoring and support
                    </li>
                  </ul>
                </div>
                <div className="bg-white/80 dark:bg-slate-800/80 rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Get a Detailed Security Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Schedule a consultation with our security team for a thorough review of your assessment results and personalized recommendations.
                  </p>
                  <Button asChild size="lg" className="group">
                    <Link href="/contact" className="flex items-center">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section - New */}
      {assessmentType !== 'select' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-center mb-12 dark:text-gray-50">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">How accurate is this assessment?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our assessment is designed by cybersecurity experts based on industry frameworks and best practices. While it provides valuable insights into your security posture, a comprehensive security program may require additional in-depth analysis tailored to your specific environment.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Is my assessment data secure?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your security is our priority. All assessment data is processed securely and not stored on our servers after your session ends. The PDF report is generated locally in your browser. You can also choose to share your results with our team for a more detailed analysis.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">What should I do after completing the assessment?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We recommend reviewing your results and focusing on implementing the highest priority recommendations first. If you need assistance, our security experts can help you develop and execute a comprehensive security improvement plan based on your assessment results.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}