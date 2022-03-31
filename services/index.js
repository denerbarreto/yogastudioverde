import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_URL;

export const getNewsletters = async () => {
  const query = gql`
    query MyQuery {
      newsletters {
        email
      }
    }
  `;

  const results = await request(graphqlAPI, query);
  return results.newsletters;
};
