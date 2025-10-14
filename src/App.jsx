import { useEffect, lazy, Suspense } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';

// Lazy load page components for better performance
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;

function MotionPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  // Scroll to top with smooth animation when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    }>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MotionPage><Home /></MotionPage>} />
          <Route path="/about" element={<MotionPage><AboutPage /></MotionPage>} />
          <Route path="/experience" element={<MotionPage><ExperiencePage /></MotionPage>} />
          <Route path="/projects" element={<MotionPage><ProjectsPage /></MotionPage>} />
          <Route path="/gallery" element={<MotionPage><GalleryPage /></MotionPage>} />
          <Route path="/skills" element={<MotionPage><SkillsPage /></MotionPage>} />
          <Route path="/contact" element={<MotionPage><ContactPage /></MotionPage>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
