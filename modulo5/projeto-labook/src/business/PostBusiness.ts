import { PostDatabase } from "../database/PostDatabase";
import {
  IDeleteDTO,
  ILikeDTO,
  IPostDB,
  IPostDTO,
  Like,
  Post,
} from "../models/Post";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  //MÉTODO DE SIGNUP - CRIAÇÃO DE POST
  public post = async (input: IPostDTO) => {
    const token = input.token;
    const content = input.content;

    //Fazendo a verificação e autenticação do token de segurança
    if (!token) {
      throw new Error("O token de segurança precisa ser informado.");
    }
    const authenticator = this.authenticator.getTokenPayload(token);
    if (!authenticator) {
      throw new Error("Usuário inválido.");
    }

    //Fazendo a verificação do CONTENT
    if (!content) {
      throw new Error("O conteúdo deve ser preenchido.");
    } else if (content.length < 2) {
      throw new Error("O conteúdo não pode ter menos de 2 caracteres.");
    }

    //Gerando meu id
    const id: string = this.idGenerator.generate();
    //Instanciando o post no BD
    const user_id: string = authenticator.id;

    const inputDB = new Post(id, content, user_id);

    const result = await this.postDatabase.createPost(inputDB);

    return result;
  };

  //MÉTODO DE FEED - BUSCAR TODOS OS POSTS
  public searchAllPosts = async (token: string) => {
    //Fazendo a verificação e autenticação do token de segurança
    if (!token) {
      throw new Error("O token de segurança precisa ser informado.");
    }
    const authenticator = this.authenticator.getTokenPayload(token);
    if (!authenticator) {
      throw new Error("Usuário inválido.");
    }

    let result = await this.postDatabase.fetchAllPosts();

    if (result.length === 0) {
      result = { message: "Nenhum post foi encontrado." };
    }

    return result;
  };

  //MÉTODO DE DELETE POST BY ID
  public deletePostById = async (input: IDeleteDTO) => {
    const token = input.token;
    const id = input.id;

    //Fazendo a verificação e autenticação do token de segurança
    if (!token) {
      throw new Error("O token de segurança precisa ser informado.");
    }
    const authenticator = this.authenticator.getTokenPayload(token);
    if (!authenticator) {
      throw new Error("Usuário inválido.");
    }

    //Fazendo a verificação do Id recebido para deleção
    if (!id || id === ":id") {
      throw new Error("Post não informado.");
    }
    const checkID = await this.postDatabase.fetchPostById(id);

    if (checkID.length === 0) {
      throw new Error("Post não encontrado.");
    }

    //Checagem se o usuário é um ADMIN ou se ele é o dono do POST
    if (authenticator.role === USER_ROLES.ADMIN) {
      const result = await this.postDatabase.deletePost(id);
      return { message: "Post deletado com sucesso pelo ADMIN." };
    } else if (checkID[0].user_id === authenticator.id) {
      const result = await this.postDatabase.deletePost(id);
      return { message: "Post deletado com sucesso." };
    } else {
      throw new Error("Você não pode apagar um post de outro usuário.");
    }
  };

  //MÉTODO - CRIAÇÃO DE LIKE
  public Like = async (input: ILikeDTO) => {
    const token = input.token;
    const post_id = input.id;

    //Fazendo a verificação e autenticação do token de segurança
    if (!token) {
      throw new Error("O token de segurança precisa ser informado.");
    }
    const authenticator = this.authenticator.getTokenPayload(token);
    if (!authenticator) {
      throw new Error("Usuário inválido.");
    }

    //Fazendo a verificação do Id recebido para receber o like
    if (!post_id || post_id === ":id") {
      throw new Error("Post não informado.");
    }
    const checkID = await this.postDatabase.fetchPostById(post_id);
    if (checkID.length === 0) {
      throw new Error("Post não encontrado.");
    }

    //Gerando meu id
    const id: string = this.idGenerator.generate();
    //Instanciando o post no BD
    const user_id: string = authenticator.id;

    //Cheque se você já curtiu o POST
    const alreadyLiked = await this.postDatabase.findLike(post_id, user_id);

   
    if (alreadyLiked) {
      return { message : "Post já curtido!" };
    }

    const inputDB = new Like(id, checkID[0].user_id, post_id);

    const result = await this.postDatabase.createLike(inputDB);

    return { message: "Você curtiu o post!" };
  };

  //MÉTODO DE DISLIKE
  public dislike = async (input: ILikeDTO) => {
    const token = input.token;
    const like_id = input.id;

    console.log("like_id", like_id)

    //Fazendo a verificação e autenticação do token de segurança
    if (!token) {
      throw new Error("O token de segurança precisa ser informado.");
    }
    const authenticator = this.authenticator.getTokenPayload(token);
    if (!authenticator) {
      throw new Error("Usuário inválido.");
    }

    //Fazendo a verificação do Id recebido para deletar o like
    if (!like_id || like_id === ":id") {
      throw new Error("Like não informado.");
    }
    const checkID = await this.postDatabase.fetchLikeById(like_id);
    if (checkID.length === 0) {
      throw new Error("Like não encontrado.");
    }

    //Instanciando o post no BD
    const user_id: string = authenticator.id;

    //Cheque se você já curtiu o POST
    console.log(checkID[0].post_id)
    const alreadyLiked = await this.postDatabase.findLike(checkID[0].post_id, user_id);
    console.log(alreadyLiked)


    if (!alreadyLiked) {
      return { message : "Post não curtido por você!" };
    }

    const result = await this.postDatabase.deleteLike(like_id);

    return { message: "Você descurtiu o post!" };
  };
}
