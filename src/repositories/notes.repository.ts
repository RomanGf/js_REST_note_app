import { initialState } from "../helpers/initial-state";
import { Note } from "../models/note.model";

const NOTES: Note[] = initialState;

export const getNotes = () => {
  return NOTES;
};

export const getNote = (id: number) => {
  const note = NOTES.find((x) => x.id === id);
  if (!note) {
    return "The note with the given ID was not found";
  }
  return note;
};

export const addNote = (
  title: string,
  content: string,
  category: string,
  archived: boolean,
  contentDates: string
) => {
  const note = {
    id: Math.floor(Math.random() * 1000),
    title: title,
    content: content,
    category: category,
    date_created: new Date().toLocaleDateString(),
    dates: contentDates,
    archived: archived,
  };

  NOTES.push(note);
  return note;
};

export const updateNote = (
  id: number,
  title: string,
  content: string,
  category: string,
  archived: boolean,
  contentDates: string
) => {
  const note = NOTES.find((x: Note) => x.id === id);
  if (!note) {
    return "The note with the given ID was not found";
  }
  note.title = title;
  note.content = content;
  note.category = category;
  note.archived = archived;
  note.dates = contentDates;
  return note;
};

export const deleteNote = (id: number) => {
  const note = NOTES.find((x: Note) => x.id === id);

  if (!note) {
    return "The note with the given ID was not found";
  }

  const index = NOTES.indexOf(note);
  NOTES.splice(index, 1);

  return note;
};
