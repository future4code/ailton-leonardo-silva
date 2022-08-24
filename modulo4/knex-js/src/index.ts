//Importações
import express, { Express, Request, Response } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";

//Middleware
//Estabelecer a conexão com o banco no index.ts:
dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

//Teste de Endpoint - OK
app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong! 🏓");
});

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);

  return result[0][0];
};

//Exercício 1B)
//Função para achar o ator por nome
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result[0][0];
};

//Exercício 1C)
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

  const count = result[0][0].count;
  //console.log (count) // Resposta 5
  return count;
};

countActors("male")

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));

    res.send(await getActorById(id));
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

//Exercício 1B)
app.get("/usersName/", async (req: Request, res: Response) => {
  try {
    const name = req.body.name as string;
    console.log(name);
    res.send(await getActorByName(name));
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

//Exercício 2)

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };
  // createActor("008" , "Leonardo", 100000, new Date("1977-01-02") , "male")
//-------------------------------------
// Exercício 2A e 4A)
  const updateSalary = async (
    id: string,
    salary:number
  ) => {
    await connection ("Actor")
        .update ({
            salary: salary
        })
        .where ({
            id: id
        });
            
  }
updateSalary ("009", 30000)

// Exercício 2B e 4B)
const deleteUser = async (
    id: string,
) => {
    await connection ("Actor")
        .delete()
        .where ({
            id: id
        });
            
  }
//  deleteUser ("008")

// Exercício 2C)
const averageSalary = async (gender: string) : Promise<any> => {
    const result = await connection ("Actor")
        .avg("salary as Média dos salários")
        .where ({ gender:gender });
    console.log(result)
    return result[0] 
  }
  averageSalary ("male")

// Exercício 3)
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (error:any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });

//Exercício 4)
app.post("/actor", async (req: Request, res: Response) => {
    try {
        const {id , name , salary , gender } = req.body
        const date = req.body.dateOfBirth

      await createActor(
        id,
        name,
        salary,
        date,
        gender
      );
  
      res.status(201).send();
    } catch (error:any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });

// 4A) 

app.put("/salary/", async (req: Request, res: Response) => {
    try {
      const { id, salary } = req.body
      await updateSalary(
        id,
        salary
      );
  
      res.status(200).send({message: "Salário atualizado."});
    } catch (error:any) {
      res.status(400).send({
        message: error.message
      });
    }
  });

  app.delete("/actor/", async (req: Request, res: Response) => {
    try {
      const id = req.body.id
      await deleteUser(
        id
    );
  
      res.status(200).send({message: "Usuário deletado."});
    } catch (error:any) {
      res.status(400).send({
        message: error.message
      });
    }
  });

//Documentação

//Ligando o servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
