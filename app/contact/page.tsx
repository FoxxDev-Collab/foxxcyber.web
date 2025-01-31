import Form  from "@/app/contact/form"; // Adjust import path as needed

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
            Contact Us
          </h1>
          
          <Form />
        </div>
      </div>
    </div>
  );
}