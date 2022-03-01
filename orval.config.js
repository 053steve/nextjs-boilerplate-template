
module.exports = {
  test: {
    output: {
      mode: 'split',
      target: 'client/api.ts',
      schemas: 'client/model',
      client: 'swr',
      mock: false,
      override: {
        mutator: {
          path: 'mutator/custom-instance.ts',
          name: 'customInstance',
        }
      }
      ,
    },
    input: {
      target: '/Users/jirateepsuranant/Projects/typescript-express-starter/lib/swagger/swagger.yaml',
    },

  },
};

