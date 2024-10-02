import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import boardRouter from "./routes/boardRoutes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", boardRouter);
app.use((req, res) => res.status(404).render("404"));

app.listen(8080, () => console.log("Listening to requests on port 8080"));
