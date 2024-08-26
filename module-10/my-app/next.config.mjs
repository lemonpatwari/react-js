/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '',
    env: {
        API_URL: 'https://jsonplaceholder.typicode.com',
    }
};

export default nextConfig;
