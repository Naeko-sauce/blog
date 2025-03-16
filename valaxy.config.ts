import type { ThemeConfig } from 'valaxy-theme-sakura'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<ThemeConfig>({
  // site config see site.config.ts

  theme: 'sakura',

  themeConfig: {
    
    ui: {
      primary: '#ff4e6a',
    },

    hero: {
      title: 'Hello, naiko',
      motto: 'blog',
      urls: [
        'https://wrxinyue-images.s3.bitiful.net/wallpaper/Genshin Impact - Yae Miko (4) Cybust PC.mp4',
        'https://wrxinyue-images.s3.bitiful.net/pc-wallpaper/wallhaven-yxwy7k.jpg'
      ],
      style: 'filter-dim',
    },
  
  },
})
