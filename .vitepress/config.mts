import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Just a Cookbook",
  description: "Recipes, that's all",
  
  // GitHub Pages deployment configuration
  // If deploying to https://<USERNAME>.github.io/<REPO>/, set base to '/<REPO>/'
  // If deploying to https://<USERNAME>.github.io/, leave base as '/' or remove it
  base: '/justacookbook/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes/' }
    ],

    sidebar: [
      {
        text: 'Recipes',
        items: [
          { text: 'All Recipes', link: '/recipes/' },
          { text: 'Oven-Baked Leeks with Miso Chili Cream', link: '/recipes/braised_leek' },
          { text: 'Lohikeitto (Finnish Salmon Soup)', link: '/recipes/salmon_soup' }
        ]
      }
    ],

    // Outline settings - perfect for jumping to ingredients/instructions
    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    // Footer
    footer: {
      message: 'No ads, no popups, just recipes.',
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
})
