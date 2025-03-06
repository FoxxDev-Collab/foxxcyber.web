'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { ThemeToggle } from './theme-toggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

// FoxxCyber Logo Component
const FoxxCyberLogo = () => (
  <svg className="w-auto h-8" viewBox="0 0 400 120">
    {/* Gradients */}
    <defs>
      <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    
    {/* Shield Background */}
    <path d="M120 20 L180 20 L220 20 L220 60 C220 90 170 100 170 100 C170 100 120 90 120 60 Z" 
          fill="url(#shield-gradient)" />
    
    {/* Centered Fox Face */}
    <g transform="translate(-5, 0)">
      {/* Left Ear */}
      <path d="M155 40 L140 70 L155 85 Z" fill="white" opacity="0.9" />
      {/* Right Ear */}
      <path d="M195 40 L210 70 L195 85 Z" fill="white" opacity="0.9" />
      {/* Face */}
      <path d="M155 85 L175 100 L195 85 L195 70 L175 70 L155 70 Z" fill="white" opacity="0.9" />
    </g>
    
    {/* Simple Circuit Lines */}
    <g stroke="white" strokeWidth="1" fill="none" opacity="0.7">
      <path d="M140 50 L200 50" />
      <path d="M170 30 L170 90" />
      <circle cx="170" cy="50" r="3" fill="white" />
    </g>
    
    {/* Company Name - Clean Style */}
    <text x="240" y="55" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="30" fill="#3b82f6" className="dark:fill-white">FOXX</text>
    <text x="240" y="85" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="24" fill="#64748b" className="dark:fill-gray-300">CYBER</text>
  </svg>
);

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'ATO', href: '/atoaas' },
  { name: 'vCISO', href: '/vciso' },
  { name: 'Risk Assessment', href: '/risk_assessment' },
  { name: 'NIST RMF', href: '/nist' },
  { name: 'Contact', href: '/contact' },  
  { name: 'About', href: '/about' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <FoxxCyberLogo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navigation.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? 'default' : 'ghost'}
              asChild
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}