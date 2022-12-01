
export class Register{
    username: string
    
    phone_number:string
    password: string
    

    constructor(username: string, phone_number:string, password: string) {
        this.username = username
        this.phone_number = phone_number
        this.password = password
    }
}


export class Login{
    username: string
    password:string
    constructor(username: string, password:string) {
        this.username = username
        this.password = password
    }
}