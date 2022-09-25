import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { IDeleteDTO, ILikeDTO, IPostDTO } from "../models/Post";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}

  //*********** MÉTODO - CRIAR UM POST  *****************
  createPost = async (req: Request, res: Response) => {
    try {
      
      const token = req.headers.authorization as string;
      
      const input: IPostDTO = {
        token,
        content: req.body.content
      }

      const response = await this.postBusiness.post(input);

      res.status(201).send({message: "Post criado!"});
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  //*********** MÉTODO - BUSCAR TODOS OS POSTS  *****************
  getAllPosts = async (req: Request, res: Response) => {
    try {
      
      const token = req.headers.authorization as string;

      const response = await this.postBusiness.searchAllPosts(token);

      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  //*********** MÉTODO - DELETAR UM POST  *****************
  deletePosts = async (req: Request, res: Response) => {
    try {
      
      const token = req.headers.authorization as string;
      const id: string = req.params.id
      const input: IDeleteDTO = {
        token,
        id
      }

      const response = await this.postBusiness.deletePostById(input);

      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  //*********** MÉTODO - CRIAR UM LIKE  *****************
  createLike = async (req: Request, res: Response) => {
    try {
      
      const token = req.headers.authorization as string;
      const id: string = req.params.id
      const input: ILikeDTO = {
        token,
        id
      }

      const response = await this.postBusiness.Like(input);

      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  //*********** MÉTODO - DELETAR UM LIKE  *****************
  deleteLike = async (req: Request, res: Response) => {
    try {
      
      const token = req.headers.authorization as string;
      const id: string = req.params.id
      const input: ILikeDTO = {
        token,
        id
      }

      const response = await this.postBusiness.dislike(input);

      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };
  
}
