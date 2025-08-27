import React, { useEffect } from 'react';
import { Artwork } from '../types';

interface ModalProps {
  artwork: Artwork;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ artwork, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90%] max-h-[90%] bg-surface-light dark:bg-surface rounded-lg overflow-hidden animate-modalFadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-text-light dark:text-text text-4xl font-bold cursor-pointer z-[2001] hover:text-accent transition-colors"
        >
          ×
        </button>
        
        <img 
          src={artwork.image} 
          alt={artwork.title}
          className="w-full h-auto block"
        />
        
        <div className="p-8">
          <h3 className="text-2xl mb-2 text-text-light dark:text-text">{artwork.title}</h3>
          <p className="text-text-secondary-light dark:text-text-secondary mb-4">{formatDate(artwork.date)}</p>
          <p className="leading-relaxed text-text-light dark:text-text">{artwork.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;