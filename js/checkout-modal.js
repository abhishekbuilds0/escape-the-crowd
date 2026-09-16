/**
 * Escape The Crowd - ₹99 Checkout & Instant Access Modal
 * Supports UPI Intent, WhatsApp Direct Order, Simulated Gateway & Instant PDF Delivery
 */

document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('.js-open-checkout');
  const modal = document.getElementById('checkoutModal');
  const closeButton = document.getElementById('closeCheckout');
  const paymentForm = document.getElementById('checkoutForm');
  const checkoutStep1 = document.getElementById('checkoutStep1');
  const checkoutStepSuccess = document.getElementById('checkoutStepSuccess');
  const paymentTabs = document.querySelectorAll('.payment-tab-btn');
  const paymentPanes = document.querySelectorAll('.payment-pane');
  const downloadBtn = document.getElementById('checkoutDownloadBtn');
  const buyerNameInput = document.getElementById('buyerName');

  let currentBuyerName = "Reader";

  if (!modal) return;

  function openCheckout() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (checkoutStep1 && checkoutStepSuccess) {
      checkoutStep1.style.display = 'block';
      checkoutStepSuccess.style.display = 'none';
    }
  }

  function closeCheckout() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCheckout();
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeCheckout);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCheckout();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCheckout();
    }
  });

  // Payment method tab switching
  paymentTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      paymentTabs.forEach(t => t.classList.remove('active'));
      paymentPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const activePane = document.getElementById(targetId);
      if (activePane) activePane.classList.add('active');
    });
  });

  // Payment Form Submission
  if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = paymentForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      if (buyerNameInput && buyerNameInput.value.trim()) {
        currentBuyerName = buyerNameInput.value.trim();
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-right:8px;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        Confirming Order & Opening Welcome Page...
      `;

      const buyerEmailInput = document.getElementById('buyerEmail');
      const buyerEmail = buyerEmailInput ? buyerEmailInput.value.trim() : '';

      try {
        sessionStorage.setItem('buyerName', currentBuyerName);
        sessionStorage.setItem('buyerEmail', buyerEmail);
      } catch (err) {
        console.warn('Session storage unavailable', err);
      }

      setTimeout(() => {
        // Redirect directly to the dedicated Welcome & Download Page
        window.location.href = `welcome.html?name=${encodeURIComponent(currentBuyerName)}&email=${encodeURIComponent(buyerEmail)}`;
      }, 900);
    });
  }

  // Manual Download Button on Success Screen (fallback)
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.location.href = `welcome.html?name=${encodeURIComponent(currentBuyerName)}`;
    });
  }
});
