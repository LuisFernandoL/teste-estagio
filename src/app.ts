import "express-async-errors";
import "reflect-metadata";
import express, { Application, json } from "express";
import axios from "axios";
import { handleErros } from "./middlewares";
import cors from "cors";
import userRouter from "./routers/user.router";

const app: Application = express();
app.use(json());
app.use(cors());

app.get("/api/dados", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/authentication"
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao acessar a API externa" });
  }
});
app.use("/users", userRouter);

app.use(handleErros);
export default app;
