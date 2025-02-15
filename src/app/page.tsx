import Image from 'next/image'
import Link from 'next/link'
import { InvestmentPackages } from '@/components/InvestmentPackages'
import { ContactForm } from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="bg-hero-pattern">
        <div className="flex flex-col md:flex-row md:justify-between items-center py-4 px-4 space-y-3 md:space-y-0">
          <div className="text-2xl font-bold text-white">FemiSpace</div>
          <nav className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
            <Link href="https://femispace-pitch-vs7i.vercel.app/" className="text-white/80 hover:text-white transition-colors">Pitch Deck</Link>
            <Link href="https://femispace.com" className="text-white/80 hover:text-white transition-colors">Site</Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/hero-image.png"
          alt="FemiSpace Investment Hero"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">Invest in Your Family's Health</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">FemiSpace combines proprietary Big Data AI analytics with personalized medicine to enable affordable early detection and reversal of cardiometabolic conditions.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link 
              href="#investment-packages" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              View Investment Packages
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Packages Section */}
      <section id="investment-packages" className="py-8 bg-section-pattern">
        <div className="container mx-auto px-4">
          {/* Motivational Section */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary text-center">Join Us in Revolutionizing Healthcare</h2>
            <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto text-sm md:text-base">
              As our valued first investors, you'll be more than just partners - you'll be pioneering members 
              of our healthcare revolution. Experience firsthand the transformative power of our platform while 
              helping shape its future.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/80 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">Priority Access</h3>
                <p className="text-sm text-gray-600">
                  Be among the first to experience and benefit from our cutting-edge AI-driven healthcare solutions, 
                  with dedicated support and personalized attention.
                </p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">Co-Creation Opportunity</h3>
                <p className="text-sm text-gray-600">
                  Help shape the future of healthcare by providing valuable feedback and insights, directly 
                  influencing our platform's development and features.
                </p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">Transformative Impact</h3>
                <p className="text-sm text-gray-600">
                  Be part of a movement that's making quality healthcare accessible to all, leading to 
                  dramatically improved health outcomes for future generations.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">Investment Packages</h2>
          <InvestmentPackages />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
