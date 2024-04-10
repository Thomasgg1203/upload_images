import { Controller, HttpStatus, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from './helpers/imagenes.helpers';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {

    constructor(private readonly imagesServices: ImagesService) {}

    // @Post('upload')
    // @UseInterceptors(FileInterceptor('file'))
    // uploadFile(@UploadedFile() file: Express.Multer.File){
    //     console.log(file);
    // }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file',{
        storage: diskStorage({
            destination: './upload',//Destino para donde va la imagen
            filename: renameImage,//rescribir nombre imagen
        }),
        fileFilter: fileFilter
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File, 
    @Res() res: Response
){
        // console.log(file);
        // return await this.imagesServices.uploadFile({ filename: file.filename });

        return await this.imagesServices.uploadFile({ filename: file.filename });
        // return res.status(HttpStatus.OK)
    }
}
