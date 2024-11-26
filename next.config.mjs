/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // ข้ามการตรวจสอบ ESLint ตอน build
        ignoreDuringBuilds: true,
    },
    typescript: {
        // ข้ามการตรวจสอบ TypeScript ตอน build
        ignoreBuildErrors: true,
    },
    experimental: {
        // เปิดใช้งาน Turbo Pack
        turbo: {},
    },
    images: {
        // ระบุโดเมนของภาพที่อนุญาต
        domains: ['picsum.photos', 'firebasestorage.googleapis.com'],
    },
    webpack: (config, { dev }) => {
        if (dev) {
            // ตั้งค่าเฉพาะในโหมด development
            config.watchOptions = {
                poll: 1000, // ตรวจสอบไฟล์เปลี่ยนแปลงทุก 1 วินาที
                aggregateTimeout: 300, // หน่วงเวลาเล็กน้อยก่อนโหลดใหม่
            };
        }
        return config;
    },
};

export default nextConfig;
