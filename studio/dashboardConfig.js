export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed6dfa5752e49b2faa42bf1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-98ruemdc',
                  apiId: '893452fb-e73a-4a42-b6eb-dba1ce8ed183'
                },
                {
                  buildHookId: '5ed6dfa6a3cd23ab80499764',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s82nixkp',
                  apiId: '1866fd6d-c62b-4cf4-a608-da359e3e9a2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrbme/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s82nixkp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
