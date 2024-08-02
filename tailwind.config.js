/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#1F1F28",
        sidebarBackground: "#2C2C37",
        chatAreaBackground: "#31313D",
        selectedMessageBackground: "#252530",
        primaryText: "#C7C7CD",
        headerText: "#FFFFFF",
        secondaryText: "#8A8A97",
        highlightedText: "#177EFF",
        buttonHighlight: "#3D7EFC",
        notificationYellow: "#FFCC00",
        onlineStatusGreen: "#22C55E",
        errorRed: "#FF1E56",
        sentMessageBackground: "#31313D",
        receivedMessageBackground: "#2B2B36",
      },
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
        rajdh: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
