'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Question {
  id: number
  text: string
  impact: string
  category: string
}

interface Recommendation {
  category: string
  recommendation: string
  impact: string
}

const basicQuestions: Question[] = [
  {
    id: 1,
    text: "Do you regularly update your software and systems?",
    impact: "Regular updates help protect against known vulnerabilities",
    category: "System Security"
  },
  {
    id: 2,
    text: "Do you use strong, unique passwords for all accounts?",
    impact: "Strong passwords are your first line of defense",
    category: "Access Control"
  },
  {
    id: 3,
    text: "Do you have antivirus software installed and updated?",
    impact: "Antivirus helps protect against malware",
    category: "System Security"
  },
  {
    id: 4,
    text: "Do you regularly back up your important data?",
    impact: "Backups protect against data loss",
    category: "Data Protection"
  },
  {
    id: 5,
    text: "Do you use two-factor authentication where available?",
    impact: "2FA adds an extra layer of security",
    category: "Access Control"
  },
  {
    id: 6,
    text: "Do you have a firewall enabled on your network?",
    impact: "Firewalls help prevent unauthorized network access",
    category: "Network Security"
  },
  {
    id: 7,
    text: "Do you encrypt sensitive data at rest and in transit?",
    impact: "Encryption protects data from unauthorized access",
    category: "Data Protection"
  },
  {
    id: 8,
    text: "Do you have a process for securely disposing of sensitive data?",
    impact: "Proper data disposal prevents unauthorized access to discarded information",
    category: "Data Protection"
  },
  {
    id: 9,
    text: "Do you provide security awareness training to users?",
    impact: "Training helps prevent social engineering attacks and security incidents",
    category: "Security Awareness"
  },
  {
    id: 10,
    text: "Do you have an incident response plan in place?",
    impact: "A response plan helps minimize damage from security incidents",
    category: "Incident Response"
  },
  {
    id: 11,
    text: "Do you secure mobile devices that access company data?",
    impact: "Mobile device security prevents data breaches through personal devices",
    category: "Mobile Security"
  },
  {
    id: 12,
    text: "Do you regularly review and update access permissions?",
    impact: "Regular access reviews prevent unauthorized access to systems",
    category: "Access Control"
  }
]

export default function BasicAssessment() {
  const [answers, setAnswers] = React.useState<{[key: number]: 'yes' | 'no'}>({})
  const [showResults, setShowResults] = React.useState(false)

  const handleAnswer = (id: number, value: 'yes' | 'no') => {
    setAnswers(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const calculateScore = () => {
    const totalQuestions = basicQuestions.length
    const yesAnswers = Object.values(answers).filter(answer => answer === 'yes').length
    return Math.round((yesAnswers / totalQuestions) * 100)
  }

  const getRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = []

    basicQuestions.forEach(question => {
      if (answers[question.id] === 'no') {
        recommendations.push({
          category: question.category,
          recommendation: `Consider implementing: ${question.text.replace('Do you ', '')}`,
          impact: question.impact
        })
      }
    })

    // Group recommendations by category
    return recommendations.sort((a, b) => a.category.localeCompare(b.category))
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleReset = () => {
    setAnswers({})
    setShowResults(false)
  }

  //const handlePrint = () => {
    //window.print()
  //}

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur">
      <CardHeader className="card-header">
        <CardTitle className="text-2xl font-bold text-center">
          Basic Security Assessment
        </CardTitle>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Answer these questions to get a comprehensive overview of your security posture
        </p>
      </CardHeader>
      <CardContent className="card-content" data-date={currentDate}>
        {!showResults ? (
          <div className="space-y-6 no-print">
            {basicQuestions.map((q) => (
              <div key={q.id} className="p-4 border rounded-lg bg-white/50 dark:bg-slate-900/50">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium flex-grow">{q.text}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-4">{q.category}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{q.impact}</p>
                <div className="flex gap-4">
                  <Button 
                    variant={answers[q.id] === 'yes' ? 'default' : 'outline'}
                    onClick={() => handleAnswer(q.id, 'yes')}
                    className="w-24"
                  >
                    Yes
                  </Button>
                  <Button
                    variant={answers[q.id] === 'no' ? 'default' : 'outline'}
                    onClick={() => handleAnswer(q.id, 'no')}
                    className="w-24"
                  >
                    No
                  </Button>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-6">
              <Button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < basicQuestions.length}
                className="w-full md:w-auto"
              >
                View Results
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Security Assessment Results</h3>
              <div className="text-4xl font-bold text-primary mb-4">
                Security Score: {calculateScore()}%
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl mb-4">Security Recommendations</h3>
              {getRecommendations().map((rec, index) => (
                <div key={index} className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="font-medium text-blue-700 dark:text-blue-300">{rec.category}</p>
                  <p className="mt-1">{rec.recommendation}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{rec.impact}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-6 no-print">
              <Button onClick={handleReset} variant="outline">
                Start Over
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg no-print">
              <h3 className="font-semibold mb-2">Want a More Detailed Assessment?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This basic assessment provides a quick overview of your security posture. 
                For a more comprehensive evaluation, try our advanced assessment or 
                schedule a consultation with our security experts.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}