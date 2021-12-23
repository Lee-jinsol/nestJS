import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ //class validator이라는 라이브러리 진짜 좋다. 
      whitelist: true, // validation을 위한 decolator가 없는 속성들을 제거
      forbidNonWhitelisted: true,
      transform: true, //유저들이 보낸것을 우리가 원하는 타입으로 변경시켜줌 (//타입을 받아서 넘겨줄때 자동으로 실제 타입으로 타입을 변환해줌)
    })
  )
  await app.listen(3000);
}
bootstrap();
