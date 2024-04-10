import { Module } from '@nestjs/common';
import { ImagesModule } from './images/images.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tgiraldo254:Th0mas123*@cluster0.f6gr0d6.mongodb.net/curso_nestjs'
    ),
    ImagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
