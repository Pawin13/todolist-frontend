// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

// import type { NextApiRequest, NextApiResponse } from "next";
// import * as database from "@/lib/api/index";

// type Data = {
//   name: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const route = req.query?.route as string;
//   console.log("----->  route    ", req.query);
//   switch (route) {
//     case "loadUsers":
//       const allUsers: any = await database.loadUsers(req, res);
//       res.status(200).json(allUsers);
//       break;
//     default:
//       res.status(404).end(`Not found Users Data!`);
//       break;
//   }
// }
