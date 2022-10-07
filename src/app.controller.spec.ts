import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './controllers/notes.controller';
import { NotesService } from './ services /notes.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [NotesService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
   
  });
});
