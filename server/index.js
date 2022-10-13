const express = require('express'); 
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const {graphqlHTTP} = require('express-graphql');
const Schema = require('./schema/schema');

app.get('/', (req, res) => res.json({"Hello": "World"}))

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: process.env.NODE_ENV === 'DEVELOPMENT'
}))

app.listen(PORT, ()=>console.log(`server is running at port: ${PORT}`))