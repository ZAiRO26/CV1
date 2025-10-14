import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
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
  return (
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
  );
}
