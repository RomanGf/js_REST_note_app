import * as repo from "../repositories/notes.repository";
import { NoteDto } from "../dto_models/note.model";
import { CreateNoteModel } from "../dto_models/create-note.model";
import { CategoryStatistic } from "../dto_models/category-statistic.model";
import { getConcatenatedDatesFromString } from "../helpers/date-utils";
import { mapToDtoFromDbModel } from "../mappers/note.mappers";

export const getNotes = async () => {
  const notes = await repo.getNotes();
  return notes;
};

export const getNote = async (Id: number) => {
  const note = await repo.getNote(Id);
  return note;
};

export const getNoteStatic = async () => {
  const notes = (await repo.getNotes()).map((note) => {
    return {
      id: note.id as number,
      title: note.title,
      content: note.content,
      category: note.category,
      date_created: note.date_created,
      content_dates: note.content_dates,
      archived: note.archived,
    } as NoteDto;
  });
  const categories: { [key: string]: NoteDto[] } = {
    Task: [],
    Idea: [],
    "Random Thought": [],
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
};

export const postNote = async (
  noteCreateModel: CreateNoteModel
): Promise<NoteDto> => {
  const note = await repo.addNote({
    ...noteCreateModel,
    content_dates: getConcatenatedDatesFromString(noteCreateModel.content),
    date_created: new Date().toLocaleDateString(),
  });
  return mapToDtoFromDbModel(note);
};

export const updateNote = async (Id: number, note: CreateNoteModel) => {
  const editedNote = await repo.updateNote(Id, {
    ...note,
    content_dates: getConcatenatedDatesFromString(note.content),
  });
  // console.log({
  //   ...note,
  //   content_dates: getConcatenatedDatesFromString(note.content),
  // });

  return mapToDtoFromDbModel(editedNote);
};

export const deleteNote = async (Id: number) => {
  const note = await repo.deleteNote(Id);
  return note;
};
