export interface CreateNoteModel {
  title: string;
  content: string;
  category: string;
  archived: boolean;
  content_dates?: string;
  date_created?: string;
}
