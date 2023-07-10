import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
    bodyParser: false,
  });
  // const rawBodyBuffer = (req, res, buf, encoding) => {
  //   if (buf && buf.length) {
  //     req.rawBody = buf.toString(encoding || 'utf8');
  //   }
  // };

  // app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
  // app.use(bodyParser.json({ verify: rawBodyBuffer }));

  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('quick Apis')
    .setDescription('The backflow API ')
    .setVersion('1.0')
    // .addTag('Test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(8083);
}
bootstrap();
