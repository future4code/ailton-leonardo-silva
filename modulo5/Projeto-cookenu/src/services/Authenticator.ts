import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserSystem } from "../model/User";

dotenv.config();

class Authenticator {
  generateToken(user: UserSystem) {
    const token = jwt.sign(
      {
        user,
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
    const returnType: UserSystem = verify.user;
    
    return returnType;
  }
}

export default Authenticator;
