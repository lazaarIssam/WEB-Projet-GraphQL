const { buildSchema } = require('graphql');

module.exports = buildSchema(`
        type Reponse {
            _id: ID!
            question: Question!
            user: User!
            message: String!
            createdAt: String!
            updatedAt: String! 
        }

        type Annonce {
            _id: ID!
            title: String!
            typedebien: String!
            statusPub: String!
            prix: Float!
            date: String!
            description: String!
            creator: User!
            createdQuestions: [Question!]
        }

        type User {
            _id: ID,
            email: String!
            typeUser: String!
            password: String
            createdAnnonces: [Annonce!]
            createdQuestions: [Question!]
            createdReponses: [Reponse!]
        }

        type AuthData {
            userId: ID!
            typeUser: String!
            token: String!
            tokenExpiration: Int!
        }

        type Question {
            _id: ID!
            title: String!
            date: String!
            description: String!
            creator: User!
            createdReponses: [Reponse!]
            annonce: Annonce!
        }

        input AnnonceInput {
            title: String!
            typedebien: String!
            statusPub: String!
            prix: Float!
            date: String!
            description: String!
        }
        input AnnonceUpdateInput {
            title: String
            typedebien: String
            statusPub: String
            prix: Float
            date: String
            description: String
        }

        input UserInput {
            email: String!
            typeUser: String!
            password: String!
        }

        input QuestionInput {
            title: String!
            date: String!
            description: String!
        }

        type RootQuery {
            annonces: [Annonce!]!
            login(email: String!, password: String!): AuthData!
        }
        type RootMutation {
            createAnnonce(annonceInput: AnnonceInput): Annonce
            updateAnnonce(annonceId: ID!,annonceUpdateInput: AnnonceUpdateInput): Annonce
            deleteAnnonce(annonceId: ID!): User 
            createUser(userInput: UserInput): User
            createQuestion(annonceId: ID!,questionInput: QuestionInput): Question
            createReponse(questionId: ID!,message: String!): Reponse
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `)