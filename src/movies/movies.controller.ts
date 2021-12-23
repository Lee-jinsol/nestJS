import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return movies';
    }

    @Get('search')
    search(@Query('year') searchYear:string){
        return `we are search movie made after : ${searchYear}`
    }

    @Get('/:id')
    getOne(@Param('id') movieid:string) {
        return `This will return one movie with the id: ${movieid}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieid:string){
        return `This will delete a movie with the id: ${movieid} `;
    }

    @Patch('/:id')
    patch(@Param('id') movieid:string, @Body() updateData){
        return {
        updateMovie : movieid,
        ...updateData,
        }
    }


}
