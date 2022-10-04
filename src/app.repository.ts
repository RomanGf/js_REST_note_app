import { Injectable } from '@nestjs/common';
import { sequelize } from './config';
import { getNoteModel } from './db_models/note';
import { CreateNoteModel } from './dto_models/create-note.model';

const NoteDbModel = getNoteModel(sequelize);

@Injectable()
export class NotesRepository {

  async getNotes() {
    const notes = await NoteDbModel.findAll();
    return notes;
  }
  async getNote(Id: number) {
    const note = await NoteDbModel.findByPk(Id);
    if (!note) {
      throw 'The note with the given ID was not found';
    }
    return note;
  }
  async addNote(createModel: CreateNoteModel) {
    const note = await NoteDbModel.create({
      ...createModel,
    });

    return note;
  }
  async updateNote(Id: number, updateDto: CreateNoteModel) {
    await NoteDbModel.update(updateDto, {
      where: { id: Id },
      returning: true,
    });
    const note = await NoteDbModel.findByPk(Id);
    if (!note) {
      throw 'The note with the given ID was not found';
    }
    return note;
  }
  async deleteNote(Id: number) {
    const note = await NoteDbModel.findByPk(Id);

    if (!note) {
      throw 'The note with the given ID was not found';
    }

    await note.destroy();

    return note;
  }
}
