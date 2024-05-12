import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-sakura'
// import { addonLive2d } from 'valaxy-addon-live2d'
// import { addonMeting } from 'valaxy-addon-meting'
import { templateCompilerOptions } from '@tresjs/core'

// add icons what you will need
const safelist = ['i-ri-home-line']

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'sakura',

  themeConfig: {
    banner: {
      urls: 'https://wrxinyue-images.s3.bitiful.net/pc-wallpaper/wallhaven-pkxlv3.jpg',
      title: 'Naiko',
    },

    footer: {
      since: 2016,
    },
  },

  unocss: { safelist },

  // addons: [
  //   addonLive2d({
  //     live2dPath: {
  //       baseUrl: 'online',
  //     },
  //   }),
  //   addonMeting({
  //     global: true,
  //     props: {
  //       id: '2049540645',
  //       server: 'netease',
  //       type: 'song',
  //     },
  //   }),
  // ],

  vue: {
    ...templateCompilerOptions,
  },
})
