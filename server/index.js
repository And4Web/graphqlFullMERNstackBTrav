const express = require('express'); 
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

app.get('/', (req, res) => res.send('Server is OK.'))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'DEVELOPMENT'
}))

app.listen(PORT, ()=>console.log(`server is running at port: ${PORT}`))