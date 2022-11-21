
export class Register{
    username: string
    email: string
    phone_number:string
    profile_image:string
    password: string
    

    constructor(username: string, email: string, phone_number:string, profile_image:string, password: string) {
        this.username = username
        this.email = email
        this.phone_number = phone_number
        this.profile_image = profile_image
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