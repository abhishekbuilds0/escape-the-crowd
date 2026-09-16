/**
 * Escape The Crowd - 3D Interactive Book Physics
 * Provides realistic mouse-following 3D perspective and shine dynamics.
 */

document.addEventListener('DOMContentLoaded', () => {
  const bookWrap = document.getElementById('book3d');
  const container = document.querySelector('.book-showcase-container');
  const shine = document.querySelector('.book-shine');

  if (!bookWrap || !container) return;

  let bounds;
  let isHovered = false;

  function updateBounds() {
    bounds = container.getBoundingClientRect();
  }

  updateBounds();
  window.addEventListener('resize', updateBounds);
  window.addEventListener('scroll', updateBounds);

  // Mouse Move Interaction
  container.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  container.addEventListener('mousemove', (e) => {
    if (!bounds) updateBounds();

    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;

    const xPct = (mouseX / bounds.width) - 0.5;
    const yPct = (mouseY / bounds.height) - 0.5;

    // Calculate rotation angles (max -30 to +30 deg Y, max -20 to +20 deg X)
    const rotateY = xPct * 35;
    const rotateX = -yPct * 25;

    bookWrap.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(10px)`;

    // Move dynamic specular shine gradient
    if (shine) {
      const shineAngle = 115 + (xPct * 40);
      const shinePos = 50 + (xPct * 50);
      shine.style.background = `linear-gradient(${shineAngle}deg, transparent 0%, rgba(255, 255, 255, 0.05) ${shinePos - 20}%, rgba(255, 255, 255, 0.22) ${shinePos}%, transparent ${shinePos + 20}%)`;
    }
  });

  container.addEventListener('mouseleave', () => {
    isHovered = false;
    // Smooth reset to elegant resting angle
    bookWrap.style.transform = 'rotateY(-20deg) rotateX(10deg)';
    if (shine) {
      shine.style.background = 'linear-gradient(115deg, transparent 0%, rgba(255, 255, 255, 0.08) 35%, rgba(255, 255, 255, 0.2) 48%, transparent 55%)';
    }
  });

  // Touch Support for Mobile
  let touchStartX = 0;
  let touchStartY = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    const touchX = e.touches[0].clientX - touchStartX;
    const touchY = e.touches[0].clientY - touchStartY;

    const rotY = Math.max(Math.min(-15 + (touchX * 0.1), 25), -35);
    const rotX = Math.max(Math.min(8 - (touchY * 0.1), 20), -20);

    bookWrap.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
  }, { passive: true });

  container.addEventListener('touchend', () => {
    bookWrap.style.transform = 'rotateY(-15deg) rotateX(8deg)';
  });
});
