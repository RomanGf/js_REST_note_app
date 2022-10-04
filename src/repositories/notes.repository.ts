import { getNoteModel } from "../db_models/note";
import { sequelize } from "../config";
import { CreateNoteModel } from "../dto_models/create-note.model";

const NoteDbModel = getNoteModel(sequelize);

export const getNotes = async () => {
  const notes = await NoteDbModel.findAll();

  return notes;
};

export const getNote = async (id: number) => {
  const note = await NoteDbModel.findByPk(id);
  if (!note) {
    throw "The note with the given ID was not found";
  }
  return note;
};

export const addNote = async (createModel: CreateNoteModel) => {
  const note = await NoteDbModel.create({
    ...createModel,
  });

  return note;
};

export const updateNote = async (id: number, updateDto: CreateNoteModel) => {
  await NoteDbModel.update(updateDto, {
    where: { id: id },
    returning: true,
  });
  const note = await NoteDbModel.findByPk(id);
  if (!note) {
    throw "The note with the given ID was not found";
  }
  return note;
};

export const deleteNote = async (id: number) => {
  const note = await NoteDbModel.findByPk(id);

  if (!note) {
    throw "The note with the given ID was not found";
  }

  await note.destroy();

  return note;
};
