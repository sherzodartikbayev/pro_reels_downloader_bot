# 📥 Instagram Reels Downloader Bot

<img width="1000" height="600" alt="instagram_downloader" src="https://github.com/user-attachments/assets/beea2138-b8c5-4f17-964e-9c1123af5cd6" />

A high-performance Telegram bot built with Node.js and TypeScript for downloading Instagram Reels instantly.

🌟 Features
🚀 High-Speed Downloads: Powered by RapidAPI for reliable media fetching.
🎥 HD Quality: Automatically selects the best available resolution for Reels.
🤖 TypeScript Core: Type-safe development for fewer runtime crashes.
🔄 Smart Error Handling: Friendly user messages for private or deleted content.
📱 Mobile Friendly: Optimized specifically for the Telegram mobile interface.

## 🛠️ Tech Stack
Language: **TypeScript**
Runtime: **Node.js**
Runner: **tsx** (Development) / tsc (Production)
HTTP Client: **Axios**

## 🚀 Getting Started

1. Prerequisites
Node.js: v18 or higher.
Telegram Token: Obtain from @BotFather.
RapidAPI Key: Obtain from RapidAPI Hub.

2. Installation
Clone the repository and install dependencies:

```
git clone https://github.com/yourusername/pro-reels-downloader-bot.git
cd pro-reels-downloader-bot
npm install
```

3. Environment Setup
Create a .env file in the root directory and add your credentials:

```
Code snippet
TELEGRAM_BOT_TOKEN=your_telegram_token_here
RAPID_API_KEY=your_rapidapi_key_here
RAPID_API_HOST=instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com
```

4. Running the Bot
Development Mode:

```
npm run dev
Production Build:
```

```
npm run build
npm start
```

⚙️ How It Works
The user sends an Instagram Reel link to the bot.
The bot validates the URL and sends a request to the Instagram Downloader API via Axios.
The API returns a direct CDN link to the .mp4 file.
The bot downloads the stream and uploads it as a native video file back to the Telegram chat.

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

Bot Username: @pro_reels_downloader_bot
