import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();
const port = 8080;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

app.get("/test", async (req, res) => {
    res.json({ message: "success!" });
});

app.get("/api/movies",async (req, res) => {
    const movies = await prisma.movie.findMany();
    res.json(movies);
})

app.get("/api/recipies",async (req, res) => {
    const recipies = await prisma.recipies.findMany();
    res.json(recipies);
})

app.post("/api/movies", async (req, res) => {
    const { name, genre} = req.body;
  
    if (!name || !genre ) {
      return res.status(400).send("name and genre fields required");
    }
  
    try {
      const movie = await prisma.movie.create({
        data: { name, genre},
      });
      res.json(movie);
    } catch (error) {
      res.status(500).send("Oops, something went wrong");
    }
});

app.post("/api/recipies", async (req, res) => {
    const { name, category, ingredients} = req.body;
  
    if (!name || !category || !ingredients) {
      return res.status(400).send("name, genre and ingredients fields required");
    }
  
    try {
      const recipie = await prisma.recipies.create({
        data: { name, category, ingredients},
      });
      res.json(recipie);
    } catch (error) {
      res.status(500).send("Oops, something went wrong");
    }
});
