// app/dashboard/billing/page.tsx
'use client'
import PricingPlans from '../billing/_components/PricingPlans'

export default function BillingPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Upgrade Plan</h1>
      <PricingPlans />
    </div>
  )
}