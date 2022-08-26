
export class UserProfile{
    email:string;
    gender_related:string;
    id:number;
    location_related:string;
    phone_number:string;
    profile_image_url:string;
    speciality_related:string;
    username:string;

    constructor(email:string, gender_related:string, id:number, location_related:string, phone_number:string, profile_image_url:string,speciality_related:string,username:string){
        this.email = email
        this.gender_related = gender_related
        this.id = id;
        this.location_related = location_related,
        this.phone_number = phone_number
        this.profile_image_url = profile_image_url
        this.speciality_related = speciality_related
        this.username = username
    }
}
