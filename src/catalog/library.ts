// catalog/library.ts
import { SectionMetadata } from "@/types/section";

import { metadata as winterWonder } from "@/components/library/heroes/WinterWonder";
import { metadata as auroraHero } from "@/components/library/heroes/AuroraHero";
import { metadata as featureGrid } from "@/components/library/features/FeatureGrid";
import { metadata as newsletterCTA } from "@/components/library/cta/NewsletterCTA";
import { metadata as pricingBasic } from "@/components/library/pricing/PricingBasic";
import { metadata as testimonialGrid } from "@/components/library/testimonials/TestimonialGrid";
import { metadata as transparentNavbar } from "@/components/library/navigation/TransparentNavbar";
import { metadata as simpleFooter } from "@/components/library/footers/SimpleFooter";


export const library: SectionMetadata[] = [
  winterWonder,
  auroraHero,
  featureGrid,
  newsletterCTA,
  pricingBasic,
  testimonialGrid,
  transparentNavbar,
  simpleFooter,
];