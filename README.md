# Escape The Crowd - Official Website
**Author:** Abhishek Sharma (`#AbhishekBuilds` · `abhisharma91296@gmail.com`)  
**EBook:** *Escape The Crowd: A Guide to Self-Mastery (The Journey from Following to Becoming)*  
**Price:** ₹99

---

## 🌟 Features Included

1. **Exact Book Matching Aesthetics**: Luxury Matte Obsidian Black (`#0a0a0d`) + Warm Champagne Gold (`#d4af37`) double-border design.
2. **Interactive 3D eBook Showcase**: 3D perspective mouse-tilt physics and dynamic specular reflection.
3. **Complete 6-Part & 19-Chapter Explorer**: Tabbed navigation with descriptions and *REFLECT* exercise highlights.
4. **In-Browser Free Chapter 1 Reader Modal**: Read Chapter 1 (*"The Illusion of Safety"*) verbatim with quote highlight and reflection box.
5. **Simulated ₹99 Checkout Flow**: Interactive UPI (GPay/PhonePe/Paytm), QR code, and Cards simulator with instant download unlock.
6. **Live Reader Activity Ticker**: Periodic social proof toast notifications in bottom-left.
7. **Zero Dependencies**: Pure HTML5, CSS3, and modern Vanilla JavaScript — ultra-fast and lightweight.

---

## 🚀 How to Run Locally

Simply double-click `index.html` in your file explorer to open it in any web browser (Chrome, Edge, Firefox, Safari).

---

## 🌐 How to Host 100% FREE on the Internet

### Option 1: Vercel (Recommended - 1 Click Deploy)
1. Go to [vercel.com](https://vercel.com) and create a free account.
2. Drag & drop this `Escape the crowd` folder or link your GitHub repo.
3. Your site will be live instantly with a free URL like `escapethecrowd.vercel.app` with free SSL/HTTPS!

### Option 2: GitHub Pages (100% Free Lifetime)
1. Push this folder to a GitHub repository named `escape-the-crowd`.
2. Go to **Settings > Pages** in your repo.
3. Select `main` branch and click **Save**.
4. Your site will be live at `https://<your-username>.github.io/escape-the-crowd/`.

---

## 💳 How to Connect a Real Payment Gateway

In `index.html`, when you are ready with a real payment link:
- **Instamojo / Razorpay / Gumroad / Payhip**: Replace the button action or embed your payment link:
  ```html
  <a href="https://rzp.io/l/your-link" class="btn btn-primary">Buy Now — ₹99</a>
  ```
- Or link your direct WhatsApp / UPI QR code.

---

## 📁 File Structure

```
Escape the crowd/
├── index.html              # Main landing page
├── css/
│   ├── variables.css       # Gold & dark color tokens
│   ├── base.css            # Base typography & layout
│   ├── components.css      # 3D Book, modals, buttons, quotes
│   ├── sections.css        # Hero, chapters, author, pricing, FAQ
│   └── responsive.css      # Mobile & tablet responsiveness
├── js/
│   ├── main.js             # Navigation, tabs, accordions, scrollspy
│   ├── book-3d.js          # 3D book mouse tracking & shine
│   ├── sample-reader.js    # Chapter 1 modal reader
│   ├── checkout-modal.js   # ₹99 checkout flow
│   └── toast-notifications.js # Live reader activity ticker
└── README.md               # Documentation
```
