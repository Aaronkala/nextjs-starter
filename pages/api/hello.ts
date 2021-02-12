import { NextApiHandler } from "next";

const test: NextApiHandler = (req, res) => {
  res.statusCode = 200;
  res.json({ name: "Test" });
};

export default test;
