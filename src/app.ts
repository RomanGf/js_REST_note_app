import { router as notesRouters } from "./routers/notes.router";

import express from "express";
import { Application } from "express";

const app: Application = express();

app.use(express.json());

app.use("/notes", notesRouters);

const port: string | number = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
