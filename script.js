
// ============================================
// For My Love - Romantic Website
// Premium JavaScript for Interactivity
// ============================================

// Configuration
const CONFIG = {
    // Change this to your actual start date
    startDate: new Date('2020-01-15').getTime(),
    reasons: [
        'Your Smile',
        'Your Kindness',
        'Your Eyes',
        'Your Voice',
        'Your Support',
        'Everything About You'
    ],
    // Sample gallery images (replace with your own)
    galleryImages: [
        'http://hc1.checker.in/file2link/documents/file_571414.jpg/IMG_20260727_201234.jpg',
        'http://hc1.checker.in/file2link/documents/file_571415.jpg/IMG_20260727_201219.jpg',
        'http://hc1.checker.in/file2link/documents/file_571416.jpg/IMG_20260727_201209.jpg',
        '',
        '',
        ''
    ]
};

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeBackground();
    initializeGallery();
    initializeReasons();
    initializeCounter();
    initializeMusic();
    initializeSurprise();
    initializeNavigation();
    updateFooterYear();
    addScrollAnimations();
});

// ============================================
// Background Animations
// ============================================

function initializeBackground() {
    // Create floating hearts
    createFloatingHearts();
    
    // Create stars
    createStars();
    
    // Create particles
    createParticles();
}

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts-bg');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart-bg';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (Math.random() * 4 + 8) + 's';
        container.appendChild(heart);
    }
}

function createStars() {
    const container = document.querySelector('.stars-container');
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

function createParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 5 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '-10px';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 10) + 's';
        container.appendChild(particle);
    }
}

// ============================================
// Gallery
// ============================================

function initializeGallery() {
    const gallery = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    let currentImageIndex = 0;
    
    // Populate gallery
    CONFIG.galleryImages.forEach((imgSrc, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${imgSrc}" alt="Memory ${index + 1}" loading="lazy">
            <div class="gallery-overlay">❤️</div>
        `;
        item.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(item);
    });
    
    function openLightbox(index) {
        currentImageIndex = index;
        const image = document.getElementById('lightbox-image');
        image.src = CONFIG.galleryImages[index];
        lightbox.classList.add('active');
    }
    
    // Close lightbox
    document.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    // Navigation
    document.querySelector('.lightbox-prev').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + CONFIG.galleryImages.length) % CONFIG.galleryImages.length;
        document.getElementById('lightbox-image').src = CONFIG.galleryImages[currentImageIndex];
    });
    
    document.querySelector('.lightbox-next').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % CONFIG.galleryImages.length;
        document.getElementById('lightbox-image').src = CONFIG.galleryImages[currentImageIndex];
    });
    
    // Close on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + CONFIG.galleryImages.length) % CONFIG.galleryImages.length;
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % CONFIG.galleryImages.length;
        } else if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            return;
        }
        document.getElementById('lightbox-image').src = CONFIG.galleryImages[currentImageIndex];
    });
}

// ============================================
// Reasons Cards
// ============================================

function initializeReasons() {
    const container = document.getElementById('reasons-grid');
    
    CONFIG.reasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div>
                <span class="reason-emoji">❤️</span>
                <div class="reason-text">${reason}</div>
            </div>
        `;
        card.style.animationDelay = (index * 0.1) + 's';
        container.appendChild(card);
    });
}

// ============================================
// Love Counter
// ============================================

function initializeCounter() {
    function updateCounter() {
        const now = new Date().getTime();
        const distance = now - CONFIG.startDate;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
    
    updateCounter();
    setInterval(updateCounter, 1000);
}

// ============================================
// Music Player
// ============================================

function initializeMusic() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    const progressSlider = document.getElementById('progressSlider');
    const progressBar = document.getElementById('progressBar');
    const volumeSlider = document.getElementById('volumeSlider');
    
    // Play/Pause
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '<span class="play-icon">⏸</span>';
        } else {
            audio.pause();
            playBtn.innerHTML = '<span class="play-icon">▶</span>';
        }
    });
    
    // Update progress bar
    audio.addEventListener('timeupdate', () => {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + '%';
        progressSlider.value = percent;
    });
    
    // Seek
    progressSlider.addEventListener('input', (e) => {
        const seekTime = (e.target.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });
    
    // Volume
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });
    
    // Set initial volume
    audio.volume = 0.5;
}

// ============================================
// Surprise Button
// ============================================

function initializeSurprise() {
    const btn = document.querySelector('.surprise-btn');
    btn.addEventListener('click', triggerSurprise);
}

function triggerSurprise() {
    // Confetti
    createConfetti();
    
    // Fireworks
    createFireworks();
    
    // Floating hearts
    createFloatingHeartsAnimation();
    
    // Show message
    showSurpriseMessage();
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b9d', '#b76e79', '#f8b4d4', '#ffffff'];
    
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * window.innerWidth + 'px';
        piece.style.top = '-10px';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = Math.random() * 10 + 5 + 'px';
        piece.style.height = piece.style.width;
        piece.style.borderRadius = '50%';
        piece.style.animationDelay = (Math.random() * 0.5) + 's';
        
        container.appendChild(piece);
        
        setTimeout(() => piece.remove(), 3500);
    }
}

function createFireworks() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.fontSize = '1.5rem';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.textContent = '✨';
        
        const angle = (i / 30) * Math.PI * 2;
        const velocity = 5 + Math.random() * 5;
        const tx = Math.cos(angle) * velocity * 50;
        const ty = Math.sin(angle) * velocity * 50;
        
        document.body.appendChild(particle);
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.className = 'heart-burst';
        
        setTimeout(() => particle.remove(), 1500);
    }
}

function createFloatingHeartsAnimation() {
    const container = document.body;
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9998';
        heart.textContent = '❤️';
        
        document.body.appendChild(heart);
        
        const startLeft = parseFloat(heart.style.left);
        const endLeft = startLeft + (Math.random() - 0.5) * 200;
        
        let opacity = 1;
        let top = window.innerHeight;
        const duration = 3000;
        const start = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - start;
            const progress = elapsed / duration;
            
            if (progress < 1) {
                top = window.innerHeight - (progress * window.innerHeight * 1.2);
                const currentLeft = startLeft + (endLeft - startLeft) * progress;
                opacity = 1 - progress;
                
                heart.style.top = top + 'px';
                heart.style.left = currentLeft + 'px';
                heart.style.opacity = opacity;
                
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        };
        
        animate();
    }
}

function showSurpriseMessage() {
    const message = document.getElementById('surpriseMessage');
    message.style.animation = 'none';
    setTimeout(() => {
        message.style.animation = 'floatInMessage 0.6s ease';
    }, 10);
}

// ============================================
// Proposal Section
// ============================================

function handleProposalYes() {
    createConfetti();
    triggerSurprise();
    showAlert('I will love you forever! ❤️❤️❤️');
}

function handleProposalForever() {
    triggerSurprise();
    createFireworks();
    showAlert('Forever and always! 💕💕💕');
}

function showAlert(message) {
    alert(message);
}

// ============================================
// Navigation
// ============================================

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// Footer
// ============================================

function updateFooterYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// ============================================
// Scroll Animations
// ============================================

function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('.reason-card, .counter-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// Utility Functions
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// End of Script
// ============================================
          
