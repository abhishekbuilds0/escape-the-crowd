/**
 * Escape The Crowd - Main Application Controller
 * Handles Navigation, Tabs, Accordions, and Interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Instant Author Avatar Display (High Performance & Cache-Busting)
  function applyAuthorAvatar() {
    const avatarSrc = window.AUTHOR_AVATAR_B64 || 'assets/images/author.jpg';
    document.querySelectorAll('img[alt="Abhishek Sharma"]').forEach(img => {
      img.src = avatarSrc;
      img.style.display = 'block';
      if (img.nextElementSibling && img.nextElementSibling.tagName.toLowerCase() === 'svg') {
        img.nextElementSibling.style.display = 'none';
      }
    });
  }
  applyAuthorAvatar();

  // 1. Sticky Navigation on Scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Chapter Explorer Tabs (Part 1 to Part 6 + Final)
  const tabButtons = document.querySelectorAll('.chapter-tab-btn');
  const tabPanes = document.querySelectorAll('.chapter-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 4. FAQ Accordion Handling
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.parentElement;
      const isAlreadyActive = parentItem.classList.contains('active');

      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current
      if (!isAlreadyActive) {
        parentItem.classList.add('active');
      }
    });
  });

  // 5. Active Navigation ScrollSpy
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
