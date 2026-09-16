/**
 * Escape The Crowd - Sample Chapter Reader Modal
 * Enables in-browser reading of Chapter 1 with full typography and quote highlights.
 */

document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.js-open-sample');
  const modal = document.getElementById('sampleReaderModal');
  const closeButton = document.getElementById('closeSampleReader');

  if (!modal) return;

  function openReader() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeReader() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openReader();
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeReader);
  }

  // Close when clicking outside the dialog box
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeReader();
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeReader();
    }
  });
});
