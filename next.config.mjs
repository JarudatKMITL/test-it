/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        turbo: {}, // เปิดใช้งาน Turbo Pack
        appDir: true, // เปิด App Directory
    },
    images: {
        domains: ['picsum.photos', 'firebasestorage.googleapis.com'],
    },
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            };
        }
        return config;
    },
    // กำหนดให้ Next.js มองหาโฟลเดอร์ `src` เป็น root
    basePath: '',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig;
