import * as repo from "../repositories/notes.repository";
import { Request, Response } from "express";
import { Note } from "../models/note.model";
import { CreateNoteModel } from "../models/create-note.model";
import { CategoryStatistic } from "../models/category-statistic.model";
import { getConcatenatedDatesFromString } from "../helpers/date-utils";

export const getNotes = () => {
  return repo.getNotes();
};

export const getNote = (id: number) => {
  return repo.getNote(id);
};

export const getNoteStatic = () => {
  const notes = repo.getNotes();
  const categories: { [key: string]: Note[] } = {
    Task: [],
    Idea: [],
    "Random Thought": [],
  };

  notes.forEach((element: Note) => {
    if (Object.keys(categories).includes(element.category)) {
      categories[element.category].push(element);
    }
  });

  let result: CategoryStatistic[] = [];

  Object.entries(categories).map(([key, value]) => {
    result.push({
      category: key,
      archived: value.filter((x: Note) => x.archived).length,
      unarchive: value.filter((x: Note) => !x.archived).length,
    });
  });
  return result
};

export const postNote = (note: CreateNoteModel): Note => {
  return repo.addNote(
    note.title,
    note.content,
    note.category,
    note.archived,
    getConcatenatedDatesFromString(note.content)
  );
};

export const updateNote = (id: number, note: CreateNoteModel) => {
  return repo.updateNote(
    id,
    note.title,
    note.content,
    note.category,
    note.archived,
    getConcatenatedDatesFromString(note.content)
  );
};

export const deleteNote = (id: number) => {
  return repo.deleteNote(id);
};
