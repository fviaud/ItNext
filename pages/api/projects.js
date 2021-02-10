
import { connectToDatabase } from "util/mongodb";

export default async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const { db } = await connectToDatabase();
    const count = await db
        .collection("listingsAndReviews")
        .countDocuments()
    const projects = await db
        .collection("listingsAndReviews")
        .find({})
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray();
    res.json({ projects: [...projects], totalPages: Math.ceil(count / limit), });

}