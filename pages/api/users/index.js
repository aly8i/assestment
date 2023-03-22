import dbConnect from "../../../util/mongo";
import User from "../../../models/User";
export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try{
      const user = await User.create({      
        name:req.body.name,
        phonenumber:req.body.phonenumber,
        address:req.body.address
      });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
