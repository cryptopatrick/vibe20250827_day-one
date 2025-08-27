import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-surface-light/80 dark:bg-surface/80 backdrop-blur-sm py-8 text-center border-t border-border-light dark:border-border">
      <div className="max-w-content mx-auto px-8">
        <p className="text-text-secondary-light dark:text-text-secondary">
          © 2025 CryptoPatrick. All rights reserved.
        </p>
        <p className="text-text-secondary-light dark:text-text-secondary mt-2">
          #100DaysOfVibe
        </p>
      </div>
    </footer>
  );
};

export default Footer;