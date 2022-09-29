import notesRouters from "./routers/notes";

import express, {Application} from "express"

const app: Application = express();


app.use(express.json());

app.use("/notes", notesRouters);

const port: string | number = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
