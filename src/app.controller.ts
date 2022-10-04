import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { NotesService } from './app.service';
import { CreateNoteModel } from './dto_models/create-note.model';

@Controller('notes')
export class AppController {
  constructor(private readonly appService: NotesService) {}

  @Get()
  async getNotes() {
    return await this.appService.getNotes();
  }

  @Get('stats')
  async getNoteStatic() {
    return await this.appService.getNoteStatic();
  }

  @Get(':id')
  async getNote(@Param() params) {
    return await this.appService.getNote(parseInt(params.id));
  }

  @Post()
  async postNote(@Body() createDto: CreateNoteModel) {
    return await this.appService.postNote(createDto);
  }

  @Patch(':id')
  async updateNote(@Param() params, @Body() updateDto: CreateNoteModel) {
    return await this.appService.updateNote(parseInt(params.id), updateDto);
  }

  @Delete(':id')
  async deleteNote(@Param() params) {
    return await this.appService.deleteNote(parseInt(params.id));
  }
}
