import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

export const client = new ApolloClient({
    link: new HttpLink({uri: apiBaseURL}),
    cache: new InMemoryCache(),
});
