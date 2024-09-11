'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Play, Pause, BarChart2, PieChart } from 'lucide-react'
import Link from 'next/link'

export function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const watchPercentageControl = useAnimation()
  const chartControl = useAnimation()

  useEffect(() => {
    const animateWatchPercentage = async () => {
      await watchPercentageControl.start({ width: '80%', transition: { duration: 2 } })
    }

    const animateChart = async () => {
      await chartControl.start({ opacity: 1, pathLength: 1, transition: { duration: 2 } })
    }

    animateWatchPercentage()
    animateChart()
  }, [watchPercentageControl, chartControl])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">VideoInsights</Link>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link></li>
            <li><Link href="#analytics" className="hover:text-blue-600 transition-colors">Analytics</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unlock the Power of Video Analytics
        </motion.h1>
        <motion.p 
          className="text-xl mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Gain deep insights into viewer engagement and optimize your content
        </motion.p>
        
        {/* Video Preview */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative aspect-video bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                className="bg-blue-600 text-white rounded-full p-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </motion.button>
            </div>
            {/* Simulated heatmap overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-yellow-500/30 to-green-500/30 opacity-60"></div>
          </div>
          {/* Analytics Bar */}
          <div className="bg-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BarChart2 className="text-blue-600" />
              <span>85% watched</span>
            </div>
            <div className="flex items-center space-x-2">
              <PieChart className="text-green-600" />
              <span>92% engagement</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* <HeatMap className="text-red-600" /> */}
              <span>Heat map available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Analytics Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart2, title: "Engagement Metrics", description: "Track viewer retention and interaction rates" },
              { icon: PieChart, title: "Watch Percentage", description: "See how much of your videos are being watched" },
              { icon: PieChart, title: "Video Heat Maps", description: "Visualize the most engaging parts of your content" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="text-blue-600 w-12 h-12 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Analytics Section */}
      <section id="analytics" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dynamic Video Analytics in Action</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
            {/* Watch Percentage Animation */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Watch Percentage Over Time</h3>
              <div className="bg-gray-200 h-8 rounded-full overflow-hidden">
                <motion.div
                  className="bg-blue-600 h-full rounded-full"
                  initial={{ width: '0%' }}
                  animate={watchPercentageControl}
                />
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Watch percentage reaches 80% as viewers engage with the video
              </div>
            </div>

            {/* Video Engagement Chart */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Video Engagement Chart</h3>
              <div className="relative aspect-video bg-white rounded-lg overflow-hidden shadow-md">
                <div className="absolute top-2 left-2 text-xs text-gray-500">
                  <div>7 viewers</div>
                  <div>35% engagement</div>
                  <div>2:13</div>
                </div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Chart lines */}
                  <line x1="0" y1="100" x2="100" y2="100" stroke="#e5e7eb" strokeWidth="0.5" />
                  <line x1="0" y1="0" x2="0" y2="100" stroke="#e5e7eb" strokeWidth="0.5" />
                  
                  {/* Engagement area */}
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,20 Q25,40 50,60 T100,80 L100,100 L0,100 Z"
                    fill="url(#areaGradient)"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="1.5"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={chartControl}
                  />
                </svg>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Engagement chart shows viewer retention over time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Video Content?</h2>
          <p className="text-xl mb-8">Start analyzing your videos today and drive better engagement</p>
          <motion.button 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">VideoInsights</h3>
              <p className="text-gray-400">Empowering content creators with advanced video analytics</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#analytics" className="text-gray-400 hover:text-white transition-colors">Analytics</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-full w-2/3"
                  aria-label="Email for newsletter"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-full" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} VideoInsights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}