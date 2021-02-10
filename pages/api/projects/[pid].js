// export default function handler(req, res) {
//     const { query: { pid } } = req

//     res.end(`project: ${pid}`)
// }

import { connectToDatabase } from "util/mongodb";

export default async (req, res) => {
    const { query: { pid } } = req
    const { db } = await connectToDatabase();
    const project = await db.collection("listingsAndReviews").findOne({ _id: pid })
    res.json(project);

}