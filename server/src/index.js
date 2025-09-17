import express from "express"; 
import cors from "cors";
import compression from "compression";
import {ApolloServer } from "@apollo/server"; 
import { expressMiddleware } from '@as-integrations/express5';
import { allTypeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";

const app = express();
const port = 8082;
app.use(cors());
app.use(compression());
app.use(express.json());

const server = new ApolloServer({typeDefs: allTypeDefs, resolvers});
await server.start(); 

app.use("/graphql", expressMiddleware(server));

app.get("/", (req,res) => {
    res.send("Hello world");
});

app.listen(port, ()=>{ 
    console.log("App listening on porrt "+ port);
});

