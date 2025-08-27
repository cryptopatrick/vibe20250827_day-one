// Sample artwork data
const artworks = [
    {
        id: 1,
        title: "Digital Dreams #001",
        date: "2024-01-01",
        image: "https://picsum.photos/400/300?random=1",
        description: "A surreal exploration of digital consciousness and virtual reality.",
        category: "recent"
    },
    {
        id: 2,
        title: "Neon Cityscape",
        date: "2024-01-02",
        image: "https://picsum.photos/400/300?random=2",
        description: "Cyberpunk-inspired urban landscape with neon lighting effects.",
        category: "popular"
    },
    {
        id: 3,
        title: "Abstract Geometry",
        date: "2024-01-03",
        image: "https://picsum.photos/400/300?random=3",
        description: "Geometric patterns and shapes creating visual harmony.",
        category: "recent"
    },
    {
        id: 4,
        title: "Cosmic Journey",
        date: "2024-01-04",
        image: "https://picsum.photos/400/300?random=4",
        description: "Space exploration through digital art and imagination.",
        category: "popular"
    },
    {
        id: 5,
        title: "Organic Forms",
        date: "2024-01-05",
        image: "https://picsum.photos/400/300?random=5",
        description: "Nature-inspired digital sculptures and flowing forms.",
        category: "recent"
    },
    {
        id: 6,
        title: "Pixel Symphony",
        date: "2024-01-06",
        image: "https://picsum.photos/400/300?random=6",
        description: "8-bit inspired artwork with modern digital techniques.",
        category: "popular"
    },
    {
        id: 7,
        title: "Future Architecture",
        date: "2024-01-07",
        image: "https://picsum.photos/400/300?random=7",
        description: "Architectural concepts for tomorrow's cities.",
        category: "recent"
    },
    {
        id: 8,
        title: "Digital Portrait",
        date: "2024-01-08",
        image: "https://picsum.photos/400/300?random=8",
        description: "Human expression through digital mediums.",
        category: "popular"
    },
    {
        id: 9,
        title: "Techno Organic",
        date: "2024-01-09",
        image: "https://picsum.photos/400/300?random=9",
        description: "Fusion of technology and organic elements.",
        category: "recent"
    }
];

// Global variables
let currentFilter = 'all';
let displayedCount = 6;
let filteredArtworks = [...artworks];

// DOM elements
const galleryGrid = document.getElementById('gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('load-more');
const modal = document.getElementById('artwork-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    setupEventListeners();
    setupIntersectionObserver();
});

// Load gallery items
function loadGallery() {
    const itemsToShow = filteredArtworks.slice(0, displayedCount);
    galleryGrid.innerHTML = '';
    
    itemsToShow.forEach(artwork => {
        const galleryItem = createGalleryItem(artwork);
        galleryGrid.appendChild(galleryItem);
    });
    
    // Show/hide load more button
    loadMoreBtn.style.display = displayedCount >= filteredArtworks.length ? 'none' : 'block';
    
    // Add animation to newly loaded items
    setTimeout(() => {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}

// Create gallery item element
function createGalleryItem(artwork) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.id = artwork.id;
    
    item.innerHTML = `
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
        <div class="gallery-item-info">
            <h3 class="gallery-item-title">${artwork.title}</h3>
            <p class="gallery-item-date">${formatDate(artwork.date)}</p>
        </div>
    `;
    
    item.addEventListener('click', () => openModal(artwork));
    
    return item;
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Open modal with artwork details
function openModal(artwork) {
    modalImage.src = artwork.image;
    modalImage.alt = artwork.title;
    modalTitle.textContent = artwork.title;
    modalDate.textContent = formatDate(artwork.date);
    modalDescription.textContent = artwork.description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleModalKeydown);
}

// Close modal
function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleModalKeydown);
}

// Handle modal keyboard navigation
function handleModalKeydown(e) {
    if (e.key === 'Escape') {
        closeModalFunction();
    }
}

// Filter artworks
function filterArtworks(category) {
    currentFilter = category;
    displayedCount = 6;
    
    if (category === 'all') {
        filteredArtworks = [...artworks];
    } else {
        filteredArtworks = artworks.filter(artwork => artwork.category === category);
    }
    
    loadGallery();
}

// Load more artworks
function loadMore() {
    displayedCount += 6;
    loadGallery();
}

// Smooth scroll to gallery
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter artworks
            const filter = btn.dataset.filter;
            filterArtworks(filter);
        });
    });
    
    // Load more button
    loadMoreBtn.addEventListener('click', loadMore);
    
    // Modal close events
    closeModal.addEventListener('click', closeModalFunction);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    // Mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
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
    
    // Observe sections for scroll animations
    document.querySelectorAll('.section-title, .about-text').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for scroll animations
const style = document.createElement('style');
style.textContent = `
    .section-title, .about-text {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .section-title.animate-in, .about-text.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .navbar {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// Preload images for better performance
function preloadImages() {
    artworks.forEach(artwork => {
        const img = new Image();
        img.src = artwork.image;
    });
}

// Initialize image preloading
preloadImages();

// Add resize event listener for responsive adjustments
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    // Observe lazy images when they're added to the DOM
    const observeLazyImages = () => {
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    };
    
    // Call initially and after dynamic content loading
    setTimeout(observeLazyImages, 100);
}