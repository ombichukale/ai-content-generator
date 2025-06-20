// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Settings2, Shapes, MessageCircleMore } from 'lucide-react'
import { Button } from '@/components/ui/button'


const features = [
  {
    icon: <Shapes className="w-10 h-10 text-primary" />,
    title: '25+ templates',
    description: 'Responsive, and mobile-first project on the web',
  },
  {
    icon: <Settings2 className="w-10 h-10 text-primary" />,
    title: 'Customizable',
    description: 'Components are easily customized and extendable',
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: 'Free to Use',
    description: 'Every component and plugin is well documented',
  },
  {
    icon: <MessageCircleMore className="w-10 h-10 text-primary" />,
    title: '24/7 Support',
    description: 'Contact us 24 hours a day, 7 days a week',
  }
]

export default function Home() {
  
  return (
    
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-4">
              <Link href="/sign-in">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative">
          {/* Membership Banner */}
          <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-600 mb-8">
            {/* <span>TUBEGURUJI Membership - Join Now</span */}
            {/* <ArrowRight className="w-4 h-4" /> */}
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            AI Content <span className="text-primary">Generator</span>
          </h1>
          
          {/* Hero Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Link href="/sign-up">
              <Button size="lg" className="rounded-full px-8">
                Get started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white rounded-2xl border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}