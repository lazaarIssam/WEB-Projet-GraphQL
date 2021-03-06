const EasyGraphQLTester = require('easygraphql-tester');
const resolvers = require('../graphql/resolvers/annonce');

const schemaCode = require('../graphql/shema/index');
const tester = new EasyGraphQLTester(schemaCode);

const query = `
  {
    annonces{
        title
        creator{
          email
        }
        createdQuestions{
          title
          creator{
            email
          }
          description
          createdReponses{
            message
            user{
              email
            }
          }
        }
      }
  }
`;

tester.test(true,query);
