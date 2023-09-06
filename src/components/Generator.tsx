import { Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Generator() {
  let [dinner, setDinner] = useState("Trykk for å generere");
  let [movie, setMovie] = useState("Trykk for å generere");
  const dinners = ["Pasta", "Soup", "Taco"];
  const movies = ["Star Wars", "Hamlet", "Phantom"];

  function generateDate(): any {
    let random1 = Math.floor(Math.random() * dinners.length);
    let random2 = Math.floor(Math.random() * movies.length);
    setDinner(dinners[random1]);
    setMovie(movies[random2]);
  }

  return (
    <VStack gap={2}>
      <Button size="lg" colorScheme="pink" onClick={generateDate}>
        Generer date night
      </Button>
      <br />
      <Text as="b">Middag: </Text>
      <Text as="i">{dinner}</Text>
      <br />
      <Text as="b">Film: </Text>
      <Text as="i">{movie}</Text>
    </VStack>
  );
}
