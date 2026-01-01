"use client";

import Head from "next/head";
import { CONTACT_INFO } from "@/data/constants";

/**
 * SEO Head Component
 * Additional SEO tags and optimizations
 */
export default function SEOHead() {
  return (
    <Head>
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="color-scheme" content="dark" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="BD-DH" />
      <meta name="geo.placename" content={CONTACT_INFO.location} />
      
      {/* Verification Tags (add when you have them) */}
      {/* <meta name="google-site-verification" content="your-verification-code" /> */}
      
      {/* Preload critical resources */}
      <link rel="preload" as="style" href="/globals.css" />
    </Head>
  );
}



