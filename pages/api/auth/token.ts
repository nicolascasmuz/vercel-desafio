import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.body;

    let token;

    if (email == "kingkong@fastmail.com") {
      token = 1234;
      res.status(200).send(token);
    } else {
      token = "not allowed";
      res.status(400).send(token);
    }
  },
});
