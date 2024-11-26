/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // ข้ามการตรวจสอบ ESLint ตอน build
    },
  };
  
  module.exports = nextConfig;
  