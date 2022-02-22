
module.exports = {
  test: {
    output: {
      mode: 'split',
      target: 'client2/api.ts',
      schemas: 'client2/model',
      client: 'swr',
      mock: true
    },
    input: {
      target: '/Users/jirateepsuranant/Projects/typescript-express-starter/lib/swagger/swagger.yaml',
    },
  },
};

