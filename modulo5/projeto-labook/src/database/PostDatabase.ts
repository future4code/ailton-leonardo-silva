import { IDislikeDB, ILikeDB, IPostDB, Like, Post } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  //Método para criar um post
  public createPost = async (post: Post) => {
    const postDB: IPostDB = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
    };

    await this.getConnection()(PostDatabase.TABLE_POSTS).insert(postDB);
  };

  public fetchAllPosts = async (): Promise<any> => {
    const result = await this.getConnection()(PostDatabase.TABLE_POSTS).select(
      "*"
    );
    return result;
  };

  //BUSCAR OS DADOS DO POST PELO ID
  public fetchPostById = async (id: string): Promise<any> => {
    const result = await this.getConnection().raw(`
    SELECT * FROM ${PostDatabase.TABLE_POSTS} WHERE id LIKE '${id}'
  `);
    return result[0];
  };

  //BUSCAR O LIKE PELO ID
  public fetchLikeById = async (id: string): Promise<any> => {
    const result = await this.getConnection().raw(`
      SELECT * FROM ${PostDatabase.TABLE_LIKES} WHERE id LIKE '${id}'
    `);
    return result[0];
  };

  //MÉTODO PARA BUSCAR OS LIKES
  public findLike = async (postId: string, userId: string) => {
    const likesDB: ILikeDB[] = await this.getConnection()(
      PostDatabase.TABLE_LIKES
    )
      .select()
      .where({ post_id: postId })
      .andWhere({ user_id: userId });

    return likesDB[0];
  };

  //********** DELEÇÃO DE UM POST DO BANCO DE DADOS **********
  async deletePost(id: string): Promise<void> {
    await this.getConnection().raw(`
        DELETE FROM ${PostDatabase.TABLE_POSTS} WHERE id LIKE '${id}'
      `);
  }

  //Método para criar um like
  public createLike = async (like: Like) => {
    const likeDB: ILikeDB = {
      id: like.getId(),
      post_id: like.getPostId(),
      user_id: like.getUserId(),
    };

    await this.getConnection()(PostDatabase.TABLE_LIKES).insert(likeDB);
  };

  //Método para deletar um like
  public deleteLike = async (id:string) => {
    const dislikesDB: IDislikeDB[] | any = await this.getConnection()(
      PostDatabase.TABLE_LIKES
    )
      .delete()
      .where({ id: id })
  
    return dislikesDB[0];
  };
}
