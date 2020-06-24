module.exports = {
    title: '兰天日志',
    description: '孤独忧郁的前端胖胖',
    markdown: {
      lineNumbers: true,
    },
    head: [
      ['link', { rel: 'icon', href: '/verify_sheild.png' }]
    ],
    port: 8086,
    themeConfig: {
      // gitc 仓库地址
      repo: 'https://github.com/shelden-xie/shelden-xie.github.io',
      // 导航栏
      nav: [
        { text: '技术博客', link: '/blog/' },
        { text: '面试总结', link: '/interview/' },
        { text: '学习资料', link: '/material/' },
      ],
      sidebar: {
        '/blog/':[
          {
            title:'介绍',
            collapsable: false,
            children:[
              'introduce',
              'notes-promise'
            ]
          },
          {
            title:'我的总结',
            collapsable: false,
          },
          {
            title:'其他模块',
            collapsable: false,
          }
        ]
      },
      // 搜索
      search: true,
      searchMaxSuggestions: 10,
      lastUpdated: 'Last Updated', // string | boolean
    },
    plugins: [
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }],
      ['@vuepress/medium-zoom', true],
      ['@vuepress/back-to-top', true],
    ],
  }