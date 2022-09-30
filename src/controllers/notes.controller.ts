import { Request, Response } from "express";
import * as service from "../services/notes.service";

export const getNotes = (req: Request, res: Response) => {
  res.send(service.getNotes());
};

export const getNote = (req: Request, res: Response) => {
  res.send(service.getNote(parseInt(req.params.id)));
};

export const postNote = (req: Request, res: Response) => {
  res.send(
    service.postNote({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      archived: req.body.archived,
    })
  );
};

export const updateNote = (req: Request, res: Response) => {
  res.send(
    service.updateNote(parseInt(req.params.id), {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      archived: req.body.archived,
    })
  );
};

export const getNoteStatic = (req: Request, res: Response) => {
  res.send(service.getNoteStatic());
};

export const deleteNote = (req: Request, res: Response) => {
  res.send(service.deleteNote(parseInt(req.params.id)));
};
