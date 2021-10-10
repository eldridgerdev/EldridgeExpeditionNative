import { ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import fetch from 'cross-fetch'

// const uri = process.env.BACKEND_URL ? `${process.env.BACKEND_URL}/graphql` : `https://eldridge-blog.herokuapp.com/graphql`
const uri = `https://eldridge-blog.herokuapp.com/graphql`

const httpLink = createHttpLink({
  uri
})
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client
