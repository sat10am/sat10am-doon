module.exports = {
  siteMetadata: {
    title: `SAT10AM`,
    description: `SAT10AM Blog`,
    author: `@doondoony`,
    menuLinks: [
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Members',
        link: '/members',
      },
      {
        name: 'Archive',
        link: '/archive',
      },
    ],
    members: [
      {
        name: '고은정',
        username: 'godori',
        skill: 'Java, JavaScript',
        memo: '고도리라고도 부릅니다',
      },
      {
        name: '권기웅',
        username: 'doondoony',
        skill: 'Python, JavaScript',
        memo: '크림히어로즈를 좋아합니다',
      },
      {
        name: '김재우',
        username: 'jwooss',
        skill: 'PHP, JavaScript',
        memo: '야근을 좋아합니다',
      },
      {
        name: '박희환',
        username: 'knight713',
        skill: 'C++, JavaScript',
        memo: '우면산에서 일합니다',
      },
      {
        name: '정성엽',
        username: 'ubitoffee',
        skill: 'JavaScript',
        memo: '오늘 못나왔습니다',
      },
      {
        name: '이장희',
        username: 'yesdoing',
        skill: 'JavaScript, Python',
        memo: '풀스택 개발자 입니다',
      },
      {
        name: '이재민',
        username: '2xel',
        skill: 'Java, JavaScript',
        memo: '최근 회사에서 맥북을 받았습니다',
      },
      {
        name: '이희찬',
        username: 'amorfati0310',
        skill: 'JavaScript',
        memo: 'DALI 라고도 부릅니다',
      },
      {
        name: '임호성',
        username: 'y0c',
        skill: 'JavaScript 외 다수',
        memo: '믿을 수 없게도 아직 학생입니다',
      },
      {
        name: '홍승우',
        username: 'seungwoohong',
        skill: 'JavaScript',
        memo: '회사에서 밥과 커피를 제공해줍니다',
      },
    ],
    archives: [
      {
        week: 10,
        data: [
          {
            presenter: '이희찬',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'Web Component',
          },
          {
            presenter: '이장희',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'JavaScript Engine',
          },
        ],
      },
      {
        week: 9,
        data: [
          {
            presenter: '권기웅',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'Primitive Types',
          },
          {
            presenter: '정성엽',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'REST',
          },
        ],
      },
      {
        week: 8,
        data: [
          {
            presenter: '홍승우',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'Type Coercion in JavaScript',
          },
          {
            presenter: '이장희',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'IT INFRA',
          },
        ],
      },
      {
        week: 7,
        data: [
          {
            presenter: '권기웅',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'Primitive Types',
          },
          {
            presenter: '김재우',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'Design Patterns',
          },
        ],
      },
      {
        week: 6,
        data: [
          {
            presenter: '고은정',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'Factories and Classes',
          },
          {
            presenter: '임호성',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'Clean Code',
          },
          {
            presenter: '권기웅',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'Prototype',
          },
        ],
      },
      {
        week: 5,
        data: [
          {
            presenter: '이희환',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'Redis',
          },
          {
            presenter: '이장희',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'Proxy',
          },
        ],
      },
      {
        week: 4,
        data: [
          {
            presenter: '이재민',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'Async/Await',
          },
          {
            presenter: '이희환',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'Algorithm',
          },
          {
            presenter: '홍승우',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'JavaScript Callback Function',
          },
        ],
      },
      {
        week: 3,
        data: [
          {
            presenter: '임호성',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'High Order Functions',
          },
          {
            presenter: '이장희',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'Collections and Generators',
          },
        ],
      },
      {
        week: 2,
        data: [
          {
            presenter: '김재우',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'IIFE, Modules and Namespace',
          },
          {
            presenter: '이희찬',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'Promise',
          },
          {
            presenter: '권기웅',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'Internet 101',
          },
        ],
      },
      {
        week: 1,
        data: [
          {
            presenter: '고은정',
            slideLink: 'https://slides.com/chany/deck-15-20/live#/',
            topic: 'DOM and Layout Trees',
          },
          {
            presenter: '권기웅',
            slideLink: 'https://slides.com/yesdoing/deck-3',
            topic: 'Partial Application Currying, Compose and Pipe',
          },
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Exo', 'Song Myung', 'Noto Serif KR', 'Noto Sans KR'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
