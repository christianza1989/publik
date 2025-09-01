// src/lib/api.ts
import { GraphQLClient } from 'graphql-request';

export async function fetchAPI(query: string) {
  const API_URL = process.env.WORDPRESS_GRAPHQL_API_URL;
  if (!API_URL) {
    throw new Error("WORDPRESS_GRAPHQL_API_URL is not configured");
  }
  
  const graphQLClient = new GraphQLClient(API_URL);
  
  try {
    const data = await graphQLClient.request(query);
    return data;
  } catch (error) {
    console.error("GraphQL Request Error:", JSON.stringify(error, undefined, 2));
    throw new Error('Failed to fetch API');
  }
}
