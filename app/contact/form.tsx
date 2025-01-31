'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Building2, User, Phone, Linkedin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: {
      firstName: '',
      lastName: ''
    },
    emails: {
      primaryEmail: '',
      additionalEmails: []
    },
    linkedinLink: {
      primaryLinkLabel: '',
      primaryLinkUrl: ''
    },
    jobTitle: '',
    phones: {
      primaryPhoneNumber: '',
      primaryPhoneCountryCode: 'US', // Default
      primaryPhoneCallingCode: '1',  // Default US code
      additionalPhones: []
    },
    city: '',
    companyId: '', // This would be set on the backend
    position: 0
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: ''
  });

  type FormData = {
    name: {
      firstName: string;
      lastName: string;
    };
    emails: {
      primaryEmail: string;
      additionalEmails: string[];
    };
    linkedinLink: {
      primaryLinkLabel: string;
      primaryLinkUrl: string;
    };
    jobTitle: string;
    phones: {
      primaryPhoneNumber: string;
      primaryPhoneCountryCode: string;
      primaryPhoneCallingCode: string;
      additionalPhones: string[];
    };
    city: string;
    companyId: string;
    position: number;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Handle nested objects
    if (name.includes('.')) {
      const [parent, child] = name.split('.') as [keyof FormData, string];
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(typeof prev[parent] === 'object' ? prev[parent] : {}),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name as keyof FormData]: value
      }));
    }
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
        const response: Response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Submission failed');

        setSubmitStatus({
            success: true,
            error: false,
            message: 'Thank you for your interest. We will contact you soon!'
        });
        
        // Reset form
        setFormData({
            name: { firstName: '', lastName: '' },
            emails: { primaryEmail: '', additionalEmails: [] },
            linkedinLink: { primaryLinkLabel: '', primaryLinkUrl: '' },
            jobTitle: '',
            phones: {
                primaryPhoneNumber: '',
                primaryPhoneCountryCode: 'US',
                primaryPhoneCallingCode: '1',
                additionalPhones: []
            },
            city: '',
            companyId: '',
            position: 0
        });

    } catch {
        setSubmitStatus({
            success: false,
            error: true,
            message: 'There was an error submitting your request. Please try again.'
        });
    } finally {
        setSubmitting(false);
    }
};

  return (
    <Card className="max-w-2xl mx-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4" />
                First Name *
              </label>
              <input
                type="text"
                name="name.firstName"
                value={formData.name.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4" />
                Last Name *
              </label>
              <input
                type="text"
                name="name.lastName"
                value={formData.name.lastName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email *
            </label>
            <input
              type="email"
              name="emails.primaryEmail"
              value={formData.emails.primaryEmail}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Job Title *
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phones.primaryPhoneNumber"
              value={formData.phones.primaryPhoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn URL
            </label>
            <input
              type="url"
              name="linkedinLink.primaryLinkUrl"
              value={formData.linkedinLink.primaryLinkUrl}
              onChange={handleInputChange}
              placeholder="https://www.linkedin.com/in/..."
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {submitStatus.message && (
            <div className={`p-4 rounded ${
              submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {submitStatus.message}
            </div>
          )}

<button
  type="submit"
  disabled={submitting}
  className="w-full bg-primary text-white dark:bg-white dark:text-black py-2 px-4 rounded hover:bg-primary/90 dark:hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {submitting ? 'Submitting...' : 'Submit'}
</button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;