/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ใช้ dark mode โดยใช้คลาส .dark
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Anakotmai', 'sans-serif'], // กำหนดฟอนต์ค่าเริ่มต้น
        anakotmai: ['Anakotmai', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      screens: {
        'xs': '375px', // สำหรับ iPhone SE หรือหน้าจอเล็กมาก
      },
      colors: {
        // กำหนดสีใหม่สำหรับธีม
        primary: {
          light: '#D4ECDD', // สีสำหรับโหมดสว่าง
          dark: '#1C1C1E',  // สีสำหรับโหมดมืด
        },
        secondary: {
          light: '#FFD166',
          dark: '#F4A261',
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212',
        },
        text: {
          light: '#000000',
          dark: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
