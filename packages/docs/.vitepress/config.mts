/*
 * @Date: 2024-05-10 15:58:16
 * @作者: 七星玉蘅
 * @邮箱: 1532250426@qq.com
 * @LastEditTime: 2024-05-10 23:53:31
 * @FilePath: \aliothstar-design\packages\docs\.vitepress\config.mts
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Aliothstar-Design',
  description: '不是吧',
  base: '/aliothstar-design/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
