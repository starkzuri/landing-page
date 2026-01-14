import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Ecosystem } from './components/Ecosystem';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { FloatingShapes } from './components/FloatingShapes';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f1428] to-[#1a0f2e] text-white overflow-x-hidden">
      <AnimatedBackground />
      <FloatingShapes />
      <div className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Ecosystem />
        <Footer />
      </div>
    </div>
  );
}