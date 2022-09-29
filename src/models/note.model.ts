export interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  date_created: string;
  dates: string;
  archived: boolean;
}



export interface CategoryStatistic {
  category: string;
  archived: number;
  unarchive: number;
}
