import React from 'react';

const Hero: React.FC = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background-light/80 to-gray-200/80 dark:from-background/80 dark:to-primary/80 backdrop-blur-sm relative">
      <div className="text-center max-w-4xl px-8 w-full">

        <h1 className="text-6xl md:text-8xl font-inter font-bold mb-4 opacity-0 animate-fadeInUp text-text-light dark:text-text leading-tight text-center mx-auto w-full" 
            style={{ animationDelay: '0.15s' }}>
          I'm doing #100DaysOfVibe
        </h1>
        <p className="text-xl text-text-secondary-light dark:text-text-secondary mb-8 opacity-0 animate-fadeInUp" 
           style={{ animationDelay: '0.7s' }}>
         <b>Rules:</b><br/>
        1. Create one vibe coded program every day
        for the next 100 days<br/>

        2. Every day, tweet about the new program
        with the #100DaysOfVibe hashtag<br/><br/>

        <b>Disclaimer:</b><br/>
        <ul className="list-none">
          <li>I have never Vibe coded anything before.</li>
          <li>I'm not a professional programmer.</li>
          <li>I started August 27th, 2025.</li>
        </ul>
        </p>
        <button 
          onClick={scrollToGallery}
          className="bg-gradient-to-r from-accent to-primary text-white dark:text-white border-none px-8 py-4 text-base rounded-full cursor-pointer transition-all duration-300 opacity-0 animate-fadeInUp hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
          style={{ animationDelay: '0.9s' }}
        >
          View Vibe Gallery
        </button>
      </div>
    </section>
  );
};

export default Hero;