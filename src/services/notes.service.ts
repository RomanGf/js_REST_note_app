import * as repo from "../repositories/note";
import { Request, Response } from "express";

export const getNotes = (req: Request, res: Response) => {
  res.send(repo.getNotes());
};

export const getNote = (req: Request, res: Response) => {
  res.send(repo.getNote(parseInt(req.params.id)));
};

export const getNoteStatic = (req: Request, res: Response) => {
  res.send(repo.getNoteStatic());
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
