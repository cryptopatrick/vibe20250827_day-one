import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.about-section .section-title, .about-section .about-text');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-background-light/80 dark:bg-background/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <h2 className="section-title text-4xl mb-8 font-light text-text-light dark:text-text opacity-0 transform translate-y-8 transition-all duration-700">
          About Everydays
        </h2>
        <p className="about-text text-xl leading-relaxed text-text-secondary-light dark:text-text-secondary opacity-0 transform translate-y-8 transition-all duration-700">
          A digital art project showcasing creative works produced daily. 
          Each piece represents a moment in time, capturing artistic evolution and experimentation.
        </p>
      </div>
    </section>
  );
};

export default About;