import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './controllers/notes.controller';
import { NotesRepository } from './repositories/notes.repository';
import { NotesService } from './ services /notes.service';
import { Validator } from './middlewares/model-validator.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [NotesService, NotesRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Validator('notes'))
      .forRoutes({ path: 'notes', method: RequestMethod.POST });
    consumer
      .apply(Validator('updateNote'))
      .forRoutes({ path: 'notes/:id', method: RequestMethod.PATCH });
  }
}
