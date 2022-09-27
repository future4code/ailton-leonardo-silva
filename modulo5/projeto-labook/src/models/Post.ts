export interface IPostDB {
    id: string,
    content: string,
    user_id: string
}

export interface IPostDTO {
    token: string,
    content: string,
}

export interface IDeleteDTO {
    token: string,
    id: string,
}

export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export interface IDislikeDB {
    post_id: string,
    user_id: string
}


export interface ILikeDTO {
    token: string,
    id: string,
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes?: number
    ) {}

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    public getLikes = () => {
        return this.likes
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.userId = newUserId
    }

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }
}

export class Like {
    constructor(
        private id: string,
        private userId: string,
        private postId: string
    ) {}

    public getId = () => {
        return this.id
    }
    
    public getUserId = () => {
        return this.userId
    }

    public getPostId = () => {
        return this.postId
    }

}
