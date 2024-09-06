import { Controller, Get, Put, Body, Post, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users_service';
import { UsersDto } from './dtos/users.dto';
import { LevelDto } from 'src/level/dtos/level.dtos';
import { LevelService } from 'src/level/level.service';

@Controller('users')
export class UsersController {
    constructor(
        private dataUser: UsersService,
        private levelService: LevelService
    ){}
    // DATA USERS
    
    // all data user
    @Get()
    getDataUser(){
        return this.dataUser.getDataUser()
    }
    @Get('detailUser/:id')
    getDetailUser(@Param('id') id: string){
        return this.dataUser.getDetailUser(id)
    }
    // post data user
    @Post('add')
    tambahDataUser(@Body() usersDto: UsersDto ){
        return this.dataUser.addDataUsers(usersDto)
    }
    @Put(':id')
    updateDataUser(@Param('id') id: string, @Body() body: UsersDto){
        return this.dataUser.updateDataUser(id, body)
    }
    //delete data level
    @Delete('deleteUsers/:id')
    deleteDataUsers(@Param('id') id: string, @Body() body: UsersDto){
        return this.dataUser.deleteDataUsers(id, body)
    }




    // DATA LEVEL

    // all data level
    @Get('level')
    getDataLevel(){
        return this.levelService.getDataLevel()
    }
    @Get('detailLevel/:id')
    getDetailLevel(@Param('id') id: string){
        return this.levelService.getDetailLevel(id)
    }
     // post data level
     @Post('addLevel')
     tambahDataLevel(@Body() levelDto: LevelDto ){
         return this.levelService.addDataLevel(levelDto)
     }
     
     @Put('updateLevel/:id')
     updateDataLevel(@Param('id') id: string, @Body() body: LevelDto){
       return this.levelService.updateDataLevel(id, body)
    }
    // delete data level
    @Delete('deleteLevel/:id')
    deleteDataLevel(@Param('id') id: string, @Body() body: LevelDto){
        return this.levelService.deleteDataLevel(id, body)
    }


    //GET DETAIL USER LEVEL
    @Get('detailUserLevel/:id')
    getDetailUserLevel(@Query('role') role: string, @Param('id') id: string){
        return this.levelService.getDetailUserLevel(role, id)
    }

}
















    // detail user
    // @Get('/:id')
    // geDetailUsersById(@Param('id') id: string, @Body() body:UsersDto){
    //     return `${body.name} ${id}`
    // }
    // detail level
    // @Get('level/detail')
    // getDetailDataLevel(@Body()body: any){
    //     const iD = body.id;
    //     const name = body.name;
    //     const result = `${iD} ${name}`
    //     return this.levelService.getDetailLevel(result)
    // }