import { initialState } from "../helpers/initialState";
import { CategoryStatistic, Note } from "../models/note.model";


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

export const getNoteStatic = () => {
  const categories: {[key: string]: Note[]} = {
    Task: [],
    Idea: [],
    "Random Thought": [],
  };

  NOTES.forEach((element: Note) => {
    if (Object.keys(categories).includes(element.category)) {
      categories[element.category].push(element);
    }
  });

  let result: CategoryStatistic[] = [];

  Object.entries(categories).map(([key, value]) => {
    result.push({
      category: key,
      archived: value.filter((x: Note) => !x.archived).length,
      unarchive: value.filter((x: Note) => x.archived).length,
    });
  });
  return result;
};

export const postNote = (
  title: string,
  content: string,
  category: string,
  archived: boolean
) => {
  const note = {
    id: NOTES.length + 1,
    title: title,
    content: content,
    category: category,
    date_created: new Date().toLocaleDateString(),
    dates: "",
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
  archived: boolean
) => {
  const note = NOTES.find((x: Note) => x.id === id);
  if (!note){
    return " ss"
  }
  note.title = title;
  note.content = content;
  note.category = category;
  note.archived = archived;
  return note;
};

export const deleteNote = (id: number) => {
  const note = NOTES.find((x) => x.id === id);

  if (!note) {
    return "The note with the given ID was not found";
  }

  const index = NOTES.indexOf(note);
  NOTES.splice(index, 1);

  return note;
};
