import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Generator() {
  let [dinner, setDinner] = useState("Trykk for å generere");
  let [movie, setMovie] = useState("Trykk for å generere");
  let dinners = ["Pasta", "Soup", "Taco"];
  let movies = ["Star Wars", "Hamlet", "Phantom"];

  function generateDate(): any {
    let random1 = Math.floor(Math.random() * dinners.length);
    let random2 = Math.floor(Math.random() * movies.length);
    setDinner(dinners[random1]);
    setMovie(movies[random2]);
  }

  return (
    <Box>
      <Button onClick={generateDate}>Generer date night</Button>
      <p>Middag: {dinner}</p>
      <p>Movie: {movie}</p>
    </Box>
  );
}
