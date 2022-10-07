import { NoteDto } from "../dto_models/note.model";
import { Note } from "../db_models/note";


export function mapToDtoFromDbModel(noteDbModel: Note): NoteDto {
    return {
        id: noteDbModel.id,
        title: noteDbModel.title,
        content: noteDbModel.content,
        category: noteDbModel.category,
        date_created: noteDbModel.date_created,
        content_dates: noteDbModel.content_dates,
        archived: noteDbModel.archived,
    }
}