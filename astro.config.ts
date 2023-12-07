import { defineConfig } from 'astro/config'

export default defineConfig({
  i18n: {
    routing: {
      prefixDefaultLocale: true,
      strategy: 'pathname',
    },
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  site: 'https://test.com',
  compressHTML: true,
})
