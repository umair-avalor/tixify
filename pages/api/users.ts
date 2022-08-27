import { connectToDatabase } from "../../utility/mongodb";

export default async (req: any, res: any) => {
  const { db } = await connectToDatabase();

  const users = await db.collection("users").find().sort({ _id: -1 }).limit(10);
  res.send(users);
};
