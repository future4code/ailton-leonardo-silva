import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserSystem } from "../model/User";

dotenv.config();

class Authenticator {
  generateToken(usuario: UserSystem) {
    const token = jwt.sign(
      {
        usuario,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.EXPIRES_IN,
      }
    );

    return token;
  }

  verifyToken(token: string): UserSystem {
    const verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

    const retornarTipagem: UserSystem = verify.usuario;

    return retornarTipagem;
  }
}

export default Authenticator;
