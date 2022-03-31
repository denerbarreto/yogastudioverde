import { NextApiRequest, NextApiResponse } from "next";
import { gql, GraphQLClient } from "graphql-request";

export default async ({ body }: NextApiRequest, res: NextApiResponse) => {
  const graphcms = new GraphQLClient(
    `${process.env.NEXT_PUBLIC_GRAPHCMS_URL}`,
    {
      headers: {
        authorization: `Bearer ${process.env.NEXT_GRAPHCMS_TOKEN}`,
      },
    }
  );

  const mutation = gql`
    mutation createNewsletter($email: String!) {
      createNewsletter(data: { email: $email }) {
        email
      }
    }
  `;

  await graphcms.request(mutation, { email: body.email });

  res.status(201).json({ success: true });
};
