# 🚀 React Portfolio – Parth Ahuja

A fully responsive, animated, and theme-aware **portfolio website** built with React — showcasing real-world frontend skills through component architecture, motion, and interactivity.


## 💼 Sections & Features


### 🏠 1. Home – Animated Intro

The hero section introduces with dynamic entrance animations and professional summary.

✨ Features:

- ⚙️ Framer Motion-based fade-in & slide animations.
- 🧠 Semantic HTML with CSS variables and modular styling.
- 🌐 Linked social icons (GitHub, LinkedIn, Email).
- 📄 Resume+ Scroll to Skills button.

🛠️ Tech Stack: React, CSS, Framer Motion

---

### 💡 2. Skills – Tech + Soft Skills Breakdown

Skills section displays technical competencies and skills with scroll-triggered animation.

✨ Features:

- 📦 Data-driven structure using `map()` from external `Data.js`.
- 🌀 Animated appearance using `react-intersection-observer` and Framer Motion.
- 🧠 Skills are with skewed motion transition.
- 🔗 External links to tech/tools provided.

🛠️ Tech Stack: React, CSS, Framer Motion

---

### 🧠 3. Projects – Filterable Portfolio Grid

A dynamic and filterable project gallery that categorizes work based on tech stack or domain.

✨ Features:

- 🎛️ Real-time filtering with `useState` + `Set()` for auto categories.
- 🖼️ Project images, titles, descriptions, and live links.
- 🎞️ Individual item animation with staggered delays.
- 💠 Extra visual layer using custom image shape overlays.

🛠️ Tech Stack: React, CSS, Framer Motion

---

### 📬 4. Contact – Fully Functional Form

Contact section with a real-time email form powered by EmailJS.

✨ Features:
- 📤 EmailJS handles delivery.
- 🔁 Success/failure alerts + auto-reset after submit.
- 💬 Additional contact options: Email, Phone, LinkedIn.

🛠️ Tech Stack: React, CSS, EmailJS

---

### 🔗 5. Header + Footer – Navigation & Branding

Reusable layout components that persist across the SPA and respond to theme and viewport.

✨ Features:

- 🎨 Light/Dark theme toggle with persistent `localStorage`.
- 🧭 Smooth scroll navigation using `react-scroll`.
- 📱 Responsive mobile menu with scroll lock.
- 👣 Footer with social icons and copyright.

🛠️ Tech Stack: React, CSS, react-scroll


## 📂 Project Structure


```
parth-portfolio/
├── src/
│   ├── assets/                        
│   │   └── ...                        # (Profile.png, shape-2.png, etc.)
│   │
│   ├── components/                    
│   │   ├── Contact/  ...               
│   │   ├── Footer/   ...                
│   │   ├── Header/   ...              
│   │   ├── Home/     ...            
│   │   ├── Projects/ ...                
│   │   └── Skills/   ...           
│   │
│   ├── App.css                        
│   ├── App.jsx                        
│   ├── Data.jsx                       
│   └── main.jsx                       
│
└── index.html


```

---

## ⚡ How to Run Locally

```bash
git clone git@github.com:ParthAhuja4/parth-portfolio.git
cd parth-portfolio
npm install
npm run dev

```

Runs on `http://localhost:5173` by default.

----------

## 🧠 What This Demonstrates

✅ Production-grade React component architecture  
✅ Real-time UI state handling (filters, themes, form)  
✅ Motion-enhanced UX using Framer Motion  
✅ CSS Grid/Flexbox responsiveness without frameworks  
✅ Modular file structure, clean code, scalable logic  
✅ Fully functional frontend form integration (EmailJS)  
✅ Fully data-driven — all content customizable via a single `Data.jsx` file



## 🔗 Live Demo

🧪 Link: [https://parth-portfolio-dusky.vercel.app/](https://parth-portfolio-dusky.vercel.app/)  



## 📬 Contact

**Developer:** Parth Ahuja  
**GitHub:** [@ParthAhuja4](https://github.com/ParthAhuja4)  
**Email:** [parthahuja006@gmail.com](mailto:parthahuja006@gmail.com)
