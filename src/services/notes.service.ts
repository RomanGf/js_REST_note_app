import * as repo from "../repositories/note";
import { Request, Response } from "express";
import { CategoryStatistic, Note } from "../models/note.model";

export const getNotes = (req: Request, res: Response) => {
  res.send(repo.getNotes());
};

export const getNote = (req: Request, res: Response) => {
  res.send(repo.getNote(parseInt(req.params.id)));
};

export const getNoteStatic = (req: Request, res: Response) => {
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
      archived: value.filter((x: Note) => !x.archived).length,
      unarchive: value.filter((x: Note) => x.archived).length,
    });
  });
  res.send(result);
};

export const postNote = (req: Request, res: Response) => {
  res.send(
    repo.postNote(
      req.body.title,
      req.body.content,
      req.body.category,
      req.body.archived
    )
  );
};

export const updateNote = (req: Request, res: Response) => {
  res.send(
    repo.updateNote(
      parseInt(req.params.id),
      req.body.title,
      req.body.content,
      req.body.category,
      req.body.archived
    )
  );
};

export const deleteNote = (req: Request, res: Response) => {
  res.send(repo.deleteNote(parseInt(req.params.id)));
};
