/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
