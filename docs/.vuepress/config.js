module.exports = {
    title: '前端胖胖',
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
            title:'技术文章',
            collapsable: false,
            children:[
              'notes-promise',
              'notes-es6'
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
        ],
        '/interview/':[
          {
            title:'面试整理',
            collapsable: false,
            children:[
              'onetest'
            ]
          },
          {
            title:'面试分类',
            collapsable: false,
            children:[
              'algorithm',
              'EventEmitter',
              'jswork'
            ]
          },
        ],
        '/material/':[
          {
            title:'函数式编程',
            collapsable: false,
            children:[
              'function-fp'
            ]
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