interface userRequest{
    name:string;
    email:string;
    password:string;
}

class CreateUserService{
    async execute({name,email,password}:userRequest){
        return { ok: true }
    }
}

export {CreateUserService}