import { Request, Response } from "express";
import * as service from "../services/notes.service";

  export const getNotes = async (req: Request, res: Response) => {
    const notes = await service.getNotes();
    await res.send(notes);
  };

  export const getNote = async (req: Request, res: Response) => {
    const note = await service.getNote(parseInt(req.params.id));
    res.send(note);
  };

  export const postNote = async (req: Request, res: Response) => {
    
    const note = await service.postNote({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      archived: req.body.archived,
    });
    res.send(note);
  };

  export const updateNote = async (req: Request, res: Response) => {
    const note = await service.updateNote(parseInt(req.params.id), {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      archived: req.body.archived,
    });

    res.send(note);
  };

  export const getNoteStatic = async (req: Request, res: Response) => {
    const stats = await service.getNoteStatic();
    res.send(stats);
  };

  export const deleteNote = async (req: Request, res: Response) => {
    const note = await service.deleteNote(parseInt(req.params.id));
    res.send(note);
  };
