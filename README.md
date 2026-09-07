# Vani-app# 🔱 Vani (वाणी) — India's AI-Powered Social Video Platform

> **"Think it. Say it. Make it. Share it."**  
> Democratizing high-end video production for every Indian creator through zero-prompt AI, voice-first creation, and regional vernacular storytelling.

---

## 📱 What is Vani?

**Vani (वाणी)** is a mobile-first social video ecosystem built specifically for India. It bridges the gap between everyday smartphone users and state-of-the-art generative video models. Instead of requiring complex prompts, camera setups, or video editing software, Vani enables anyone to speak or type in their native tongue—Hindi, Hinglish, Tamil, Telugu, and more—and instantly render cinematic, viral-ready short videos.

---

## 🌟 Key Features

### 1. ⚡ Zero-Prompt Voice-to-Video Engine
- **Voice-First Creation**: Tap the mic and speak naturally (e.g., *"Make a cinematic video of Mahadev's Tandav on Mount Kailash at dusk"*).
- **Automated Directing**: Powered by Gemini 1.5 Flash to automatically plan camera movements, cinematic lenses, authentic Indian lighting, and multi-scene sequences.

### 2. 📲 TikTok/Reels-Style Fullscreen Feed
- **Native 9:16 Vertical Video**: Smooth vertical swipe feed optimized for low-latency playback across Indian mobile networks (3G/4G/5G).
- **Fast Preloading**: Seamless video switching with background buffering.
- **Full Social Engagement**: Real-time likes, saves, comments, and profile tracking.

### 3. 🇮🇳 Trending India Discovery
- **Hyperlocal Categories**: Devotional (Bhakti), Bollywood, Cricket, Festivals, Comedy, Motivation, and Regional Culture.
- **Multilingual Support**: Tailored discovery feeds for Hindi, Hinglish, Bengali, Marathi, Gujarati, Punjabi, Tamil, Telugu, Kannada, and Malayalam.

### 4. 🔄 Instant "Remix / Make Your Version"
- Tap **Remix** on any viral video to clone its AI prompt blueprint, adapt the scenes, and generate your own version in seconds.

### 5. 📲 Zero-Investment Progressive Web App (PWA)
- Installable directly from the mobile browser onto any Android or iOS home screen without app store registration fees.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS |
| **Icons & UI** | Lucide React |
| **AI Orchestration** | Google Gemini 1.5 Flash via `@google/genai` |
| **Audio / Speech** | Web Speech API (`hi-IN`, `ta-IN`, `te-IN`, `en-IN`) |
| **Hosting & CDN** | Vercel (Edge Network) |

---

## 🚀 Quick Setup & Deployment

### 1. Clone the Repository
```bash
git clone [https://github.com/sonukumargautam003-cyber/Vani-app.git](https://github.com/sonukumargautam003-cyber/Vani-app.git)
cd Vani-app
