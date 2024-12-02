import { Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
            Contact Us
          </h1>
          
          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Mail className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                Please email:
              </p>
              <a 
                href="mailto:jprice@foxxcyber.com"
                className="text-xl font-semibold text-primary hover:underline"
              >
                jprice@foxxcyber.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
