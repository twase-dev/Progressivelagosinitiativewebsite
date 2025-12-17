import { useEffect, useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PolicyPillars } from "./components/PolicyPillars";
import { CoalitionSection } from "./components/CoalitionSection";
import { StoriesSection } from "./components/StoriesSection";
import { GetInvolvedSection } from "./components/GetInvolvedSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { LoadingScreen } from "./components/LoadingScreen";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <PolicyPillars />
          <CoalitionSection />
          <StoriesSection />
          <GetInvolvedSection />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-right" />
      </div>
    </>
  );
}