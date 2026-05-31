import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import CustomSlider from "./components/CustomSlider";
import Loader from "./components/Loader"; 
import Experience from "./components/Experience";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-linear-to-r from-black via-slate-900 to-blue-900">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience/>
          <Projects />
          <Certificates />
          <CustomSlider />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;