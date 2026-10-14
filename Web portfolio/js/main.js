/**
 * Portfolio Website - Main JavaScript
 * Handles Navigation, Mobile Drawer, Filter, Scroll Effects, Contact Form
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveNav();
  initPortfolioFilter();
  initContactForm();
  initBackToTop();
});

/* ---------------------------------------------------------
 * Header & Mobile Navigation Toggle
 * --------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  }
}

/* ---------------------------------------------------------
 * Active Nav Link Detection
 * --------------------------------------------------------- */
function initActiveNav() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ---------------------------------------------------------
 * Portfolio Category Filter
 * --------------------------------------------------------- */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active class
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ---------------------------------------------------------
 * Contact Form Simulation
 * --------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> กำลังส่งข้อความ...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      if (alertBox) {
        alertBox.className = 'form-alert success';
        alertBox.innerHTML = '<i class="fa-solid fa-circle-check"></i> ขอบคุณสำหรับข้อความ! เราได้รับข้อมูลของคุณเรียบร้อยแล้ว และจะติดต่อกลับโดยเร็วที่สุด';
        alertBox.style.display = 'block';
      }

      form.reset();

      // Auto hide alert after 6 seconds
      setTimeout(() => {
        if (alertBox) alertBox.style.display = 'none';
      }, 6000);
    }, 1200);
  });
}

/* ---------------------------------------------------------
 * Back to Top Smooth Scroll
 * --------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

let currentGallery = [];
let currentIndex = 0;

function openGallery(images) {
  currentGallery = images;
  currentIndex = 0;
  updateModalImage();
  document.getElementById('imageModal').showModal();
}

function closeGallery() {
  document.getElementById('imageModal').close();
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = currentGallery.length - 1;
  } else if (currentIndex >= currentGallery.length) {
    currentIndex = 0;
  }
  updateModalImage();
}

function updateModalImage() {
  document.getElementById('modalImage').src = currentGallery[currentIndex];
  document.getElementById('modalCounter').innerText = `รูปที่ ${currentIndex + 1} / ${currentGallery.length}`;
}