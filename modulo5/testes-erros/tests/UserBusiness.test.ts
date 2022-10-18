import { UserBusiness } from "../src/business/UserBusiness";
import { BaseError } from "../src/errors/BaseError";
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("Testando a UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  // ***** TESTES DE SIGNUP *****
  test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
    const input: ISignupInputDTO = {
      email: "fulano@gmail.com",
      name: "Fulano",
      password: "fulano123",
    };

    const response = await userBusiness.signup(input);
    expect(response.message).toBe("Cadastro realizado com sucesso");
  });

  test("Teste de erro de NOME, menos de 3 caracteres", async () => {
    try {
      const input: ISignupInputDTO = {
        //Teste de Nome
        email: "fulano@gmail.com",
        name: "",
        password: "fulano123",
      };

      const response = await userBusiness.signup(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres");
        expect(error.statusCode).toBe(400);
      }
    }
  });

  test("Teste de erro de REGEX", async () => {
    try {
      const input: ISignupInputDTO = {
        //Teste de REGEX
        email: "fulanogmail.com",
        name: "Fulano",
        password: "fulano123",
      };

      const response = await userBusiness.signup(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.message).toBe("Parâmetro 'email' inválido");
        expect(error.statusCode).toBe(400);
      }
    }
  });

  test("Teste de email já cadastrado", async () => {
    try {
      const input: ISignupInputDTO = {
        //Teste de email já cadastrado
        email: "fulano@gmail.com",
        name: "Fulano",
        password: "fulano123",
      };

      const response = await userBusiness.signup(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.message).toBe("Email já cadastrado");
        expect(error.statusCode).toBe(409);
      }
    }
  });


  // ***** TESTES DE LOGIN *****

  test("Um token é retornado quando o login é bem-sucedido", async () => {
    const input: ILoginInputDTO = {
      email: "astrodev@gmail.com",
      password: "bananinha",
    };

    const response = await userBusiness.login(input);
    expect(response.message).toBe("Login realizado com sucesso");
    expect(response.token).toBe("token-mock-admin");
  });

  test("Uma pessoa se cadastra com a senha com menos de 6 caracteres", async () => {
    // para não ter o teste falso-positivo
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "fulano@gmail.com",
        name: "Fulano",
        password: "123",
      };

      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'password' inválido: mínimo de 6 caracteres"
        );
      }
    }
  });

  test("Pessoa tenta se logar com a senha incorreta", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "astrodev@gmail.com",
        password: "bijwqbirb1iubri12brij1",
      };

      await userBusiness.login(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.message).toBe("Password incorreto");
        expect(error.statusCode).toBe(401);
      }
    }
  });

  test("Email inválido", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        //Email com problemas de REGEX
        email: "astrodevgmail.com",
        password: "hash-bananinha",
      };

      await userBusiness.login(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.message).toBe("Parâmetro 'email' inválido");
        expect(error.statusCode).toBe(400);
      }
    }
  });

  test("Email não cadastrado", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        //Email não cadastrado
        email: "astrodev2@gmail.com",
        password: "hash-bananinha",
      };

      await userBusiness.login(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.message).toBe("Parâmetro 'email' inválido");
        expect(error.statusCode).toBe(400);
      }
    }
  });






});
