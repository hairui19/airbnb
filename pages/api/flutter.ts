import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: `${req.method}` } )
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.MONGODB_DATA_API_KEY,
    },
  };

  const baseUrl = `${process.env.MONGODB_DATA_API_URL}/action`;

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.MONGODB_DATA_API_KEY,
    },
    body: JSON.stringify({
      dataSource: process.env.MONGODB_DATA_SOURCE,
      database: "REVIEW_BUTTERFLY",
      collection: "reviews",
    }),
  };
  try {
    switch (req.method) {
      case "GET":
        const readDataJson = await fetch(`${baseUrl}/find`, options).then(
          (res) => res.json()
        );
        res.status(200).json(readDataJson.documents);
        break;
      case "POST":
        const review = req.body;
        const insertData = await fetch(`${baseUrl}/insertOne`, {});
        break;
      default:
        res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
