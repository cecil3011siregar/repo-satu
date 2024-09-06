import { Injectable } from '@nestjs/common';
import { UsersDto } from './dtos/users.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id: "123",
            name: "cecilia",
            email:"cecilia@gmail.com", 
            password:"2345",
            dateOfBirth:"2005-11-30",
            gender: "female",
            phone_number: "0982136635263",
            photo: "image.jpg",
            address: "jalan-jalan",
            status: true
        },
        {
            id: "124",
            name: "Nazhwa",
            email:"cecilia@gmail.com",  
            password:"2345",
            dateOfBirth:"2005-11-30",
            gender: "female",
            phone_number: "0982136635263",
            photo: "image.jpg",
            address: "jalan-jalan",
            status: true
        }
    ]
    getDataUser(){
        return "Get all data user!"
    }
    getDetailUser(id: string){
        let coba = this.users.find(itemIndex => itemIndex.id == id)
        if(coba){
            return `Detail: ${coba.id}`
        }else{
            return "Data tidak ditemukan"
        }
    }
    addDataUsers(body: UsersDto){
        return body.name
    }
    // update cara 1
    updateDataUser(id:string, body:UsersDto){
        let ubah = body.name;
        ubah = "nazhwa"
        return `${ubah} id: ${id}`
    }
    // update cara 2
    // updateDataUser(@Body() body: UsersDto){
    //     if(body.id === "123"){
    //         body.name = "Nazhwa"
    //     }
    //     return body.name
    // }
    deleteDataUsers(id: string, body: UsersDto){
        return `${body.name} dengan id ${id} telah dihapus`
    }
}
