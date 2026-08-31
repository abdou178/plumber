import React from "react";
import { EmergencyTopBanner } from "@/components/EmergencyTopBanner";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { InteractivePlumbingTriage } from "@/components/InteractivePlumbingTriage";
import { ServicesGrid } from "@/components/ServicesGrid";
import { EmergencyProcess } from "@/components/EmergencyProcess";
import { SuburbCoverage } from "@/components/SuburbCoverage";
import { TransparentPricing } from "@/components/TransparentPricing";
import { VerifiedReviews } from "@/components/VerifiedReviews";
import { Footer } from "@/components/Footer";
import { StickyMobileDispatchDock } from "@/components/StickyMobileDispatchDock";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      {/* 1. Emergency Top Urgent Announcement Banner */}
      <EmergencyTopBanner />

      {/* 2. Sticky Glass Navbar */}
      <Navbar />

      {/* 3. Main Content Container */}
      <main className="flex-grow">
        {/* Hero Section with Direct Response Copy & Live Dispatch Card */}
        <HeroSection />

        {/* 4 Trust & Guarantee Badges */}
        <TrustBadges />

        {/* Interactive Plumbing Emergency Triage & 1-Tap SOS Dispatch */}
        <InteractivePlumbingTriage />

        {/* Core Specialized Emergency Services */}
        <ServicesGrid />

        {/* 3-Step Rapid Response Protocol */}
        <EmergencyProcess />

        {/* Sharjah Suburbs Coverage & ETAs */}
        <SuburbCoverage />

        {/* Transparent Upfront Pricing */}
        <TransparentPricing />

        {/* Verified Local Reviews */}
        <VerifiedReviews />
      </main>

      {/* Footer with Business NAP and Local SEO Links */}
      <Footer />

      {/* High-Z-Index Sticky Mobile Dispatch Dock (Mobile Only) */}
      <StickyMobileDispatchDock />
    </div>
  );
}
