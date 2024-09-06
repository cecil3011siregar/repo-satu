import { Injectable } from '@nestjs/common';
import { LevelDto } from './dtos/level.dtos';

@Injectable()
export class LevelService {
    private level = [
        {
            id:"1",
            name:"Admin"
        },
        {
            id:"2",
            name:"Trainee"
        }
    ]
    getDataLevel(){
        return "Get all data level!"
    }
    getDetailLevel(id: string){
        let coba = this.level.find(itemIndex => itemIndex.id == id)
        if(coba){
            return `Detail: ${coba.id}`
        }else{
            return "Data tidak ditemukan"
        }
    }
    addDataLevel(body:LevelDto){
        return body.name
    }
    // update cara 1
    updateDataLevel(id: string, body:LevelDto){
        let ubah = body.name;
        ubah = "Trainee"
        return `${ubah} id: ${id}`
    }
    // update cara 2
    // updateDataLevel(@Body() body: LevelDto){
    //     if(body.id === "1"){
    //         body.name = "Trainee"
    //     }
    //     return body
    // }
    deleteDataLevel(id:string, body:LevelDto){
        return` ${body.name} dengan id ${id} telah dihapus`
    }

    getDetailUserLevel(role: string, id: string){
        return `Get user dengan role ${role} yang idnya id ${id}`
        
    }
}
