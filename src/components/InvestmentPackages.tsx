'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const packages: Package[] = [
  {
    name: 'Early Adopter',
    amount: 10000,
    benefits: {
      'Platform Access Duration': '2 years',
      'Post-Period Discount': '10%',
      'Family Members Covered': '1',
      'Health Assessments': 'Annual',
      'Men\'s Health Access (Q4 2025)': 'Standard',
      'Children\'s Module (2026)': 'Standard',
      'Health Protocol': 'Personalized',
      'Investment Updates': 'Quarterly',
      'Future Round Priority': 'Standard',
      'Advisory Role': 'Network Member',
      'Feature Access': 'Early',
      'Support Level': 'Priority'
    }
  },
  {
    name: 'Innovation Partner',
    amount: 15000,
    benefits: {
      'Platform Access Duration': '2 years',
      'Post-Period Discount': '15%',
      'Family Members Covered': '2',
      'Health Assessments': 'Annual',
      'Men\'s Health Access (Q4 2025)': 'Standard',
      'Children\'s Module (2026)': 'Standard',
      'Health Protocol': 'Personalized',
      'Investment Updates': 'Quarterly',
      'Future Round Priority': 'Standard',
      'Advisory Role': 'Beta Tester',
      'Feature Access': 'Priority',
      'Support Level': 'Priority Plus'
    }
  },
  {
    name: 'Catalyst Partner',
    amount: 20000,
    benefits: {
      'Platform Access Duration': '2 years',
      'Post-Period Discount': '15%',
      'Family Members Covered': '3',
      'Health Assessments': 'Annual',
      'Men\'s Health Access (Q4 2025)': 'Early',
      'Children\'s Module (2026)': 'Early',
      'Health Protocol': 'Personalized',
      'Investment Updates': 'Quarterly',
      'Future Round Priority': 'Standard',
      'Advisory Role': 'Feedback Partner',
      'Feature Access': 'Priority Plus',
      'Support Level': 'Premium'
    }
  },
  {
    name: 'Strategic Innovator',
    amount: 35000,
    benefits: {
      'Platform Access Duration': '3 years',
      'Post-Period Discount': '20%',
      'Family Members Covered': '4',
      'Health Assessments': 'Bi-annual family',
      'Men\'s Health Access (Q4 2025)': 'Early',
      'Children\'s Module (2026)': 'Early',
      'Health Protocol': 'Family Custom',
      'Investment Updates': 'Quarterly',
      'Future Round Priority': 'Priority',
      'Advisory Role': 'Strategy Partner',
      'Feature Access': 'VIP',
      'Support Level': 'Premium Plus'
    }
  },
  {
    name: 'Family Innovation',
    amount: 50000,
    benefits: {
      'Platform Access Duration': '3 years',
      'Post-Period Discount': '20%',
      'Family Members Covered': '4',
      'Health Assessments': 'Bi-annual family',
      'Men\'s Health Access (Q4 2025)': 'Priority',
      'Children\'s Module (2026)': 'Priority',
      'Health Protocol': 'Family Custom',
      'Investment Updates': 'Monthly',
      'Future Round Priority': 'Priority',
      'Advisory Role': 'Advisory Board',
      'Feature Access': 'VIP Plus',
      'Support Level': 'Dedicated'
    }
  },
  {
    name: 'Expansion Catalyst',
    amount: 75000,
    benefits: {
      'Platform Access Duration': '4 years',
      'Post-Period Discount': '25%',
      'Family Members Covered': 'Unlimited',
      'Health Assessments': 'Quarterly family',
      'Men\'s Health Access (Q4 2025)': 'VIP',
      'Children\'s Module (2026)': 'VIP',
      'Health Protocol': 'Multi-gen Custom',
      'Investment Updates': 'Monthly',
      'Future Round Priority': 'Preferred',
      'Advisory Role': 'Development Committee',
      'Feature Access': 'Elite',
      'Support Level': 'Dedicated Plus'
    }
  },
  {
    name: 'Transformation Leader',
    amount: 100000,
    benefits: {
      'Platform Access Duration': '5 years',
      'Post-Period Discount': '25%',
      'Family Members Covered': '8',
      'Health Assessments': 'Quarterly',
      'Men\'s Health Access (Q4 2025)': 'VIP',
      'Children\'s Module (2026)': 'VIP',
      'Health Protocol': 'Multi-gen Custom',
      'Investment Updates': 'Monthly',
      'Future Round Priority': 'Preferred',
      'Advisory Role': 'Strategic Board',
      'Feature Access': 'Executive',
      'Support Level': 'Concierge'
    }
  }
]

export function InvestmentPackages() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null)
  const [showComparison, setShowComparison] = useState(false)

  return (
    <div className="flex flex-col space-y-8">
      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
        {packages.map((pkg) => (
          <div key={pkg.name}>
            <div 
              className={`bg-white rounded-lg shadow-xl overflow-hidden border transition-all ${
                expandedPackage === pkg.name ? 'border-primary ring-2 ring-primary' : 'border-gray-200 hover:border-primary'
              }`}
            >
              <div className="bg-hero-pattern p-4 h-32 flex flex-col justify-between">
                <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                <p className="text-2xl font-bold text-white">${pkg.amount.toLocaleString()}</p>
              </div>
              
              <div className="p-4 h-48 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">
                    <p><span className="font-semibold">Access:</span> {pkg.benefits['Platform Access Duration']}</p>
                    <p><span className="font-semibold">Members:</span> {pkg.benefits['Family Members Covered']}</p>
                    <p><span className="font-semibold">Support:</span> {pkg.benefits['Support Level']}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setExpandedPackage(expandedPackage === pkg.name ? null : pkg.name)
                    setShowComparison(false)
                  }}
                  className="w-full bg-secondary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-secondary-light transition-colors"
                >
                  {expandedPackage === pkg.name ? 'Show Less' : 'View Details'}
                </button>
              </div>
            </div>

            {/* Mobile Details */}
            <div className="hidden max-lg:block">
              <AnimatePresence>
                {expandedPackage === pkg.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-xl border border-primary p-6 mt-4"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      {pkg.name} - ${pkg.amount.toLocaleString()}
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-4">Platform Access</h4>
                        <div className="space-y-3">
                          <BenefitItem 
                            pkg={pkg} 
                            keys={['Platform Access Duration', 'Post-Period Discount', 'Family Members Covered']}
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-4">Health Benefits</h4>
                        <div className="space-y-3">
                          <BenefitItem 
                            pkg={pkg} 
                            keys={['Health Assessments', 'Men\'s Health Access (Q4 2025)', 'Children\'s Module (2026)', 'Health Protocol']}
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-4">Investment Benefits</h4>
                        <div className="space-y-3">
                          <BenefitItem 
                            pkg={pkg} 
                            keys={['Investment Updates', 'Future Round Priority', 'Advisory Role', 'Feature Access', 'Support Level']}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Compare All Packages Button */}
      <div className="text-center">
        <button
          onClick={() => {
            setShowComparison(!showComparison)
            setExpandedPackage(null)
          }}
          className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors inline-flex items-center space-x-2"
        >
          <span>{showComparison ? 'Hide Comparison' : 'Compare All Packages'}</span>
          <svg 
            className={`w-5 h-5 transform transition-transform ${showComparison ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Desktop Details */}
      <AnimatePresence>
        {expandedPackage && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block bg-white rounded-lg shadow-xl border border-primary p-6"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              {packages.find(p => p.name === expandedPackage)?.name} - ${packages.find(p => p.name === expandedPackage)?.amount.toLocaleString()}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Platform Access</h4>
                <div className="space-y-3">
                  <BenefitItem 
                    pkg={packages.find(p => p.name === expandedPackage)} 
                    keys={['Platform Access Duration', 'Post-Period Discount', 'Family Members Covered']}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Health Benefits</h4>
                <div className="space-y-3">
                  <BenefitItem 
                    pkg={packages.find(p => p.name === expandedPackage)} 
                    keys={['Health Assessments', 'Men\'s Health Access (Q4 2025)', 'Children\'s Module (2026)', 'Health Protocol']}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Investment Benefits</h4>
                <div className="space-y-3">
                  <BenefitItem 
                    pkg={packages.find(p => p.name === expandedPackage)} 
                    keys={['Investment Updates', 'Future Round Priority', 'Advisory Role', 'Feature Access', 'Support Level']}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Package Comparison Table */}
      <AnimatePresence>
        {showComparison && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-lg shadow-xl">
              <thead className="bg-hero-pattern text-white">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  {packages.map(pkg => (
                    <th key={pkg.name} className="p-4 text-center">
                      <div className="font-bold">{pkg.name}</div>
                      <div className="text-xl">${pkg.amount.toLocaleString()}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                  {(Object.keys(packages[0].benefits) as Array<keyof Benefits>).map(benefit => (
                  <tr key={benefit} className="border-t border-gray-200">
                    <td className="p-4 font-semibold text-primary">{benefit}</td>
                    {packages.map(pkg => (
                      <td key={pkg.name} className="p-4 text-center text-gray-700">
                        {pkg.benefits[benefit]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function BenefitItem({ pkg, keys }: { pkg: Package, keys: Array<keyof Benefits> }) {
  return (
    <>
      {keys.map(key => (
        <p key={key} className="text-gray-600">
          <span className="font-semibold">{key}:</span> {pkg?.benefits[key]}
        </p>
      ))}
    </>
  )
}
