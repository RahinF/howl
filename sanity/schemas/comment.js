export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'comment',
        title: 'Comment',
        type: 'string',
      },
      {
        title: 'visible',
        name: 'Visible',
        description: 'ADMIN: toggle visibility of comment',
        type: 'boolean',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'author'}]
      },
    ],
  }
  