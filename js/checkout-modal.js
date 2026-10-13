/**
 * Escape The Crowd - ₹49 Checkout & Instant Access Modal
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

  // Payment Form Submission with Live Razorpay Integration
  if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = paymentForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      if (buyerNameInput && buyerNameInput.value.trim()) {
        currentBuyerName = buyerNameInput.value.trim();
      }

      const buyerEmailInput = document.getElementById('buyerEmail');
      const buyerEmail = buyerEmailInput ? buyerEmailInput.value.trim() : '';

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-right:8px;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        Opening Secure Payment Gateway...
      `;

      // Check if Razorpay SDK is available
      if (typeof Razorpay !== 'undefined') {
        try {
          const authorImgUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/') + 'assets/images/author.jpg';

          const options = {
            key: 'rzp_live_Td8KJs3en5J9EN',
            amount: 4900, // ₹49 in paise (49 * 100)
            currency: 'INR',
            name: 'Escape The Crowd',
            description: 'Official 19-Chapter eBook Access',
            image: authorImgUrl,
            prefill: {
              name: currentBuyerName,
              email: buyerEmail
            },
            theme: {
              color: '#d4af37' // Luxury gold theme
            },
            handler: function (response) {
              // Payment Successful!
              const paymentId = response.razorpay_payment_id || ('PAY-' + Date.now());
              try {
                sessionStorage.setItem('buyerName', currentBuyerName);
                sessionStorage.setItem('buyerEmail', buyerEmail);
                sessionStorage.setItem('paymentId', paymentId);
              } catch (err) {
                console.warn('Session storage error:', err);
              }

              // Redirect directly to Welcome & Instant Download Page
              window.location.href = `welcome.html?name=${encodeURIComponent(currentBuyerName)}&email=${encodeURIComponent(buyerEmail)}&payment_id=${encodeURIComponent(paymentId)}`;
            },
            modal: {
              ondismiss: function () {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
              }
            }
          };

          const rzp = new Razorpay(options);
          rzp.on('payment.failed', function (response) {
            alert('Payment failed: ' + (response.error.description || 'Kripya dubara koshish karein.'));
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          });

          rzp.open();

          // Safety reset in case browser blocks popups
          setTimeout(() => {
            if (submitBtn.disabled) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalText;
            }
          }, 7000);

        } catch (err) {
          console.error('Razorpay initialization error:', err);
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          alert('Payment gateway open hone mein issue aaya: ' + err.message);
      } else {
        // Razorpay failed to load - DO NOT give free download!
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        alert('Payment gateway connect nahi ho paya. Kripya page refresh karke dubara try karein, ya neeche diye gaye WhatsApp button se ₹49 pay karein.');
      }
    });
  }

  // Manual Download Button on Success Screen (fallback)
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.location.href = `welcome.html?name=${encodeURIComponent(currentBuyerName)}`;
    });
  }
});
