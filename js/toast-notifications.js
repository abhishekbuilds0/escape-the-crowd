/**
 * Escape The Crowd - Live Reader Activity Toast Notification Ticker
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const activities = [
    { name: 'Aman S.', city: 'Delhi', action: 'ne abhi ₹99 mein eBook unlock ki 🚀', time: '2 min pehle' },
    { name: 'Priya M.', city: 'Mumbai', action: 'ne Chapter 1 sample padhna shuru kiya 📖', time: '4 min pehle' },
    { name: 'Vikram R.', city: 'Bangalore', action: 'ne #AbhishekBuilds guide access ki ✨', time: '7 min pehle' },
    { name: 'Neha K.', city: 'Pune', action: 'ne 5-Star Rating di: "Mindset badal gaya!" ⭐', time: '11 min pehle' },
    { name: 'Rohan J.', city: 'Jaipur', action: 'ne instant PDF download unlock kiya ⚡', time: '14 min pehle' },
    { name: 'Sameer G.', city: 'Lucknow', action: 'ne Part IV (Money Rules) complete kiya 💡', time: '18 min pehle' }
  ];

  let currentIndex = 0;

  function showToast() {
    const activity = activities[currentIndex];
    currentIndex = (currentIndex + 1) % activities.length;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <div class="toast-avatar">${activity.name.charAt(0)}</div>
      <div class="toast-content">
        <strong>${activity.name}</strong> (${activity.city}) ${activity.action}
        <span class="toast-time">${activity.time}</span>
      </div>
    `;

    container.innerHTML = '';
    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    // Remove after 4.5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 500);
    }, 4500);
  }

  // Initial toast after 3 seconds, then every 9 seconds
  setTimeout(() => {
    showToast();
    setInterval(showToast, 9000);
  }, 3000);
});
