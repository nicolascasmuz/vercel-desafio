import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
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

    if (newUserInfo.token == 1234 && newUserInfo.residencia) {
      userInfo = {
        residencia: {
          localidad: newUserInfo.residencia.localidad
            ? newUserInfo.residencia.localidad
            : userInfo.residencia.localidad,
          calle: newUserInfo.residencia.calle
            ? newUserInfo.residencia.calle
            : userInfo.residencia.calle,
          numeracion: newUserInfo.residencia.numeracion
            ? newUserInfo.residencia.numeracion
            : userInfo.residencia.numeracion,
        },
        raza: userInfo.raza,
        sexo: userInfo.sexo,
        estatura: userInfo.estatura,
        peso: userInfo.peso,
      };
      res.status(200).send(userInfo);
    } else {
      res.status(400).send("not allowed");
    }
  },
});
