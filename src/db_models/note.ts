import { Model, DataTypes, Sequelize } from "sequelize";

export class Note extends Model {
  declare id: number;
  declare title: string;
  declare content: string;
  declare category: string;
  declare date_created: string;
  declare content_dates: string;
  declare archived: boolean;
}

export const getNoteModel = (sequelize: Sequelize) => {
  Note.init(
    {
      id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      category: DataTypes.STRING,
      date_created: DataTypes.STRING,
      content_dates: DataTypes.STRING,
      archived: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Note",
      timestamps: false
    }
  );
  return Note;
};
