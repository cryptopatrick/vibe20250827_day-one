import React from 'react';
import { Artwork } from '../types';

interface GalleryItemProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ artwork, onClick }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div 
      className="bg-background-light dark:bg-background rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 dark:hover:shadow-black/30 border border-border-light dark:border-transparent"
      onClick={() => onClick(artwork)}
    >
      <img 
        src={artwork.image} 
        alt={artwork.title} 
        loading="lazy"
        className="w-full aspect-square object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 text-text-light dark:text-text">{artwork.title}</h3>
        <p className="text-text-secondary-light dark:text-text-secondary text-sm">{formatDate(artwork.date)}</p>
      </div>
    </div>
  );
};

export default GalleryItem;