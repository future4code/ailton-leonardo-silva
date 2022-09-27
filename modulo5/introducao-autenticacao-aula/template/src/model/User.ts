class User{
    
    constructor(
        private id:string,
        private name:string,
        private nickname:string, 
        private email:string,
        private password:string
    ){}
    
    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getNickName(){
        return this.nickname
    }

    public getEmail(){
        return this.email
    }

    public getPassword(){
        return this.password
    }
}

export default User