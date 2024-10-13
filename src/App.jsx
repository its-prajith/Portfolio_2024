import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import './index.css';
import About from './components/About';
import Sec2 from './components/Sec2';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AchievementsCarousel from "./components/Achievements";
import LoaderWithQuote from './components/Loader'; // Import the loader

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading time before displaying content
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the timeout as necessary
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      {loading ? (
        <LoaderWithQuote />  // Display the loader when loading
      ) : (
        <>
          <NavBar />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <About />
            <br />
            <Sec2 />
            <Tech />
            <Projects />
            <AchievementsCarousel />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
