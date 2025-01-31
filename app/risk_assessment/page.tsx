'use client';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight } from 'lucide-react'
import BasicAssessment from './basic'
import AdvancedAssessment from './advanced'
import Link from 'next/link'

export default function RiskAssessmentPage() {
  const [assessmentType, setAssessmentType] = React.useState('select')

  const renderAssessmentSelector = () => (
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all cursor-pointer"
          onClick={() => setAssessmentType('basic')}>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Basic Assessment</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A quick evaluation of your basic security practices. Perfect for small businesses
              and individuals looking to understand their security posture.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• 5-minute assessment</li>
              <li>• Basic security checklist</li>
              <li>• Instant recommendations</li>
              <li>• Printable report</li>
            </ul>
            <Button className="w-full mt-6 group">
              Start Basic Assessment
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur transform hover:scale-105 transition-all cursor-pointer"
          onClick={() => setAssessmentType('advanced')}>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Advanced Assessment</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A comprehensive evaluation of your security infrastructure. Ideal for businesses
              seeking detailed insights into their security measures.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• 15-minute assessment</li>
              <li>• Detailed security analysis</li>
              <li>• Category-wise scoring</li>
              <li>• Comprehensive report</li>
            </ul>
            <Button className="w-full mt-6 group">
              Start Advanced Assessment
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
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
              Security Risk Assessment
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Evaluate your security posture and get personalized recommendations to enhance your cybersecurity
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

      {/* CTA Section */}
      {assessmentType !== 'select' && (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900/50 dark:to-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold dark:text-gray-50">Need Professional Help?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our team of security experts is ready to help you implement these recommendations
                and improve your security posture.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}