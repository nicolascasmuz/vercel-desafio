import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { token } = req.body;

    let userInfo;

    if (token == 1234) {
      userInfo = {
        residencia: {
          localidad: "Isla Calavera",
          calle: "Avenida del Faro",
          numeracion: 1933,
        },
        raza: "Megaprimatus Kong",
        sexo: "Macho",
        estatura: "15 m",
        peso: "5 T",
        token,
      };
      res.status(200).send(userInfo);
    } else {
      userInfo = "not allowed";
      res.status(400).send(userInfo);
    }
  },
  async patch(req: NextApiRequest, res: NextApiResponse) {
    const newUserInfo = req.body;

    let userInfo = {
      residencia: {
        localidad: "Isla Calavera",
        calle: "Avenida del Faro",
        numeracion: 1933,
      },
      raza: "Megaprimatus Kong",
      sexo: "Macho",
      estatura: "15 m",
      peso: "5 T",
    };

    if (
      newUserInfo.token == 1234 &&
      (newUserInfo.raza ||
        newUserInfo.sexo ||
        newUserInfo.estatura ||
        newUserInfo.peso)
    ) {
      userInfo = {
        residencia: userInfo.residencia,
        raza: newUserInfo.raza ? newUserInfo.raza : userInfo.raza,
        sexo: newUserInfo.sexo ? newUserInfo.sexo : userInfo.sexo,
        estatura: newUserInfo.estatura
          ? newUserInfo.estatura
          : userInfo.estatura,
        peso: newUserInfo.peso ? newUserInfo.peso : userInfo.peso,
      };
      res.status(200).send(userInfo);
    } else {
      res.status(400).send("not allowed");
    }
  },
});
