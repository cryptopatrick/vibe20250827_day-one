import React, { useState, useEffect } from 'react';
import { Artwork, FilterType } from '../types';
import { artworks } from '../data/artworks';
import GalleryItem from './GalleryItem';
import Modal from './Modal';

const Gallery: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');
  const [displayedCount, setDisplayedCount] = useState(6);
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>(artworks);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentFilter === 'all') {
      setFilteredArtworks(artworks);
    } else {
      setFilteredArtworks(artworks.filter(artwork => artwork.category === currentFilter));
    }
    setDisplayedCount(6);
  }, [currentFilter]);

  useEffect(() => {
    // Add staggered animation to gallery items
    const timer = setTimeout(() => {
      const items = document.querySelectorAll('.gallery-item');
      items.forEach((item, index) => {
        const element = item as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          element.style.transition = 'all 0.5s ease';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [filteredArtworks, displayedCount]);

  const handleFilterChange = (filter: FilterType) => {
    setCurrentFilter(filter);
  };

  const loadMore = () => {
    setDisplayedCount(prev => prev + 6);
  };

  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  const itemsToShow = filteredArtworks.slice(0, displayedCount);
  const hasMore = displayedCount < filteredArtworks.length;

  return (
    <section id="gallery" className="py-20 bg-surface-light/80 dark:bg-surface/80 backdrop-blur-sm">
      <div className="max-w-content mx-auto px-8">
        <h2 className="text-4xl text-center mb-12 font-light text-text-light dark:text-text opacity-0 transform translate-y-8 transition-all duration-700">
          Everydays Gallery
        </h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              currentFilter === 'all' 
                ? 'bg-accent text-white dark:text-white border-accent' 
                : 'bg-transparent text-text-secondary-light dark:text-text-secondary border-border-light dark:border-border hover:bg-accent hover:text-white hover:border-accent'
            }`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              currentFilter === 'recent' 
                ? 'bg-accent text-white dark:text-white border-accent' 
                : 'bg-transparent text-text-secondary-light dark:text-text-secondary border-border-light dark:border-border hover:bg-accent hover:text-white hover:border-accent'
            }`}
            onClick={() => handleFilterChange('recent')}
          >
            Recent
          </button>
          <button
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              currentFilter === 'popular' 
                ? 'bg-accent text-white dark:text-white border-accent' 
                : 'bg-transparent text-text-secondary-light dark:text-text-secondary border-border-light dark:border-border hover:bg-accent hover:text-white hover:border-accent'
            }`}
            onClick={() => handleFilterChange('popular')}
          >
            Popular
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {itemsToShow.map(artwork => (
            <div key={artwork.id} className="gallery-item">
              <GalleryItem artwork={artwork} onClick={openModal} />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {selectedArtwork && (
        <Modal 
          artwork={selectedArtwork} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default Gallery;