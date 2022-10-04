import { Injectable } from '@nestjs/common';
import { NotesRepository } from './app.repository';
import { NoteDto } from './dto_models/note.model';
import { getConcatenatedDatesFromString } from './helpers/date-utils';
import { mapToDtoFromDbModel } from './mappers/note.mappers';
import { CategoryStatistic } from './dto_models/category-statistic.model';
import { CreateNoteModel } from './dto_models/create-note.model';

@Injectable()
export class NotesService {
  constructor(private readonly appRepository: NotesRepository) {}

  async getNotes() {
    const notes = await this.appRepository.getNotes();
    return notes;
  }
  async getNote(Id: number) {
    const note = await this.appRepository.getNote(Id);
    return note;
  }

  async getNoteStatic() {
    const notes = (await this.appRepository.getNotes()).map((note) => {
      return mapToDtoFromDbModel(note);
    });
    const categories: { [key: string]: NoteDto[] } = {
      Task: [],
      Idea: [],
      'Random Thought': [],
    };

    notes.forEach((element: NoteDto) => {
      if (Object.keys(categories).includes(element.category)) {
        categories[element.category].push(element);
      }
    });

    let result: CategoryStatistic[] = [];

    Object.entries(categories).map(([key, value]) => {
      result.push({
        category: key,
        archived: value.filter((x: NoteDto) => x.archived).length,
        unarchive: value.filter((x: NoteDto) => !x.archived).length,
      });
    });
    return result;
  }

  async postNote(noteCreateModel: CreateNoteModel): Promise<NoteDto> {
    const note = await this.appRepository.addNote({
      ...noteCreateModel,
      content_dates: getConcatenatedDatesFromString(noteCreateModel.content),
      date_created: new Date().toLocaleDateString(),
    });
    return mapToDtoFromDbModel(note);
  }

  async updateNote(Id: number, note: CreateNoteModel) {
    const editedNote = await this.appRepository.updateNote(Id, {
      ...note,
      content_dates: getConcatenatedDatesFromString(note.content),
    });

    return mapToDtoFromDbModel(editedNote);
  }

  async deleteNote(Id: number) {
    const note = await this.appRepository.deleteNote(Id);
    return note;
  }
}
