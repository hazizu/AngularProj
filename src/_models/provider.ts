import { threadId } from "worker_threads";

export class Provider{
    // lastName:string;
    // firstName:string;
    username: string;
    phone_number:string;
    location:number
    // gender:number
    // profile_image:string;
    password:string;
    speciality:number;
    // email: string

    
    constructor(username:string, phone_number:string, location:number,password:string,speciality:number){
        this.username = username;
        this.phone_number = phone_number;
        this.location = location;
        // this.gender = gender;
        this.password = password;
        this.speciality = speciality;
        // this.lastName = lastName;
        // this.firstName = firstName;
        // this.profile_image= profile_image;
        // this.email = email
    }

}