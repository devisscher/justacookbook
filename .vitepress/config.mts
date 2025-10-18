import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import path from 'path'
import { fileURLToPath } from 'url'
import { loadRecipes, generateSidebar } from './recipeLoader.mts'
import { generateRecipesIndexPlugin } from './plugins/generateRecipesIndex.mts'

// Get __dirname equivalent in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Load all recipes from the recipes directory
const recipesDir = path.resolve(__dirname, '../recipes')
const recipes = loadRecipes(recipesDir)

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "Just a Cookbook",
  description: "Recipes, that's all",
  
  // GitHub Pages deployment configuration
  // If deploying to https://<USERNAME>.github.io/<REPO>/, set base to '/<REPO>/'
  // If deploying to https://<USERNAME>.github.io/, leave base as '/' or remove it
  base: '/justacookbook/',
  
  // Vite configurations
  vite: {
    plugins: [
      generateRecipesIndexPlugin(recipesDir)
    ]
  },
  
  // PWA Configuration
  pwa: {
    mode: 'development',
    base: '/justacookbook/',
    scope: '/justacookbook/',
    includeAssets: ['favicon.ico'],
    manifest: {
      name: 'Just a Cookbook',
      short_name: 'Cookbook',
      description: 'No ads, no popups, just recipes',
      theme_color: '#d97706',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/justacookbook/',
      icons: [
        {
          src: '/justacookbook/icon-192.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
        },
        {
          src: '/justacookbook/icon-512.svg',
          sizes: '512x512',
          type: 'image/svg+xml',
        },
        {
          src: '/justacookbook/icon-512.svg',
          sizes: '512x512',
          type: 'image/svg+xml',
          purpose: 'any maskable',
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'unsplash-images-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    experimental: {
      includeAllowlist: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
    },
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes/' },
      { text: 'Request Recipe', link: 'https://github.com/devisscher/justacookbook/issues/new?template=recipe-request.yml' }
    ],

    sidebar: generateSidebar(recipes),

    // Outline settings - perfect for jumping to ingredients/instructions
    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    // Footer
    footer: {
      message: 'No ads, no popups, just recipes. <a href="https://github.com/devisscher/justacookbook/issues/new?template=recipe-request.yml" target="_blank" rel="noopener">Request a recipe</a> • <FooterInstallButton />',
      copyright: 'Made with ❤️ and VitePress'
    },

    // Search
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search recipes...',
            buttonAriaLabel: 'Search recipes'
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/devisscher/justacookbook' }
    ],

    // Document footer
    docFooter: {
      prev: 'Previous Recipe',
      next: 'Next Recipe'
    }
  }
}))
