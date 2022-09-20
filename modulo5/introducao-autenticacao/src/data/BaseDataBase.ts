import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

class BaseDataBase {
  private connection: Knex | null = null;

  protected getConnection() {
    if (!this.connection) {
      this.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT || "3306"),
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME,
        },
      });
    }
    return this.connection;
  }
}

export default BaseDataBase;
