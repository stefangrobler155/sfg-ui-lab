import {
  Accessibility,
  Palette,
  Rocket,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

import { styles } from "@/lib/styles";

const FEATURES = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Experience lightning-fast performance with our optimized solutions."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is protected with industry-leading security measures."
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description: "Grow your business with a flexible and scalable infrastructure."
  },
  {
    icon: Palette,
    title: "Customizable Design",
    description: "Create a unique look and feel that matches your brand identity."
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Access your applications seamlessly on any device."
  },
  {
    icon: Accessibility,
    title: "Accessible Design",
    description: "Ensure all users can access and use your applications with ease."
  }
];

export function FeatureGrid() {
  const feature = FEATURES[0];
  const Icon = feature.icon;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.eyebrow}>Features</h2>
          <h3 className={styles.heading}>Everything you need to build modern websites</h3>
          <p className={styles.description}>
            Reusable UI components designed with consistency, performance and accessibility in mind.
          </p>
          <div className={styles.sectionGrid}>
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (  
              <article key={index} className={`${styles.card} group`}>
                <div className={`${styles.iconContainer} group-hover:bg-primary/20`}>
                  <Icon size={24} />  
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{feature.title}</h4> 
                  <p className={styles.cardDescription}>{feature.description}</p>
                </div>
              </article>
              );
            })}
          </div>
        </header>
      </div>
    </section>
  );
}