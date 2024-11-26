/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // ข้ามการตรวจสอบ ESLint ตอน build
    },
    typescript: {
        ignoreBuildErrors: true, // ข้ามการตรวจสอบ TypeScript (ถ้ามี)
    },
    experimental: {
        turbo: true, // เปิดใช้งาน Turbo Pack (ถ้าใช้)
    },
    images: {
        domains: ['picsum.photos', 'firebasestorage.googleapis.com'], // ระบุโดเมนของภาพที่อนุญาต
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
