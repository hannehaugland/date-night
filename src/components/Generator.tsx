import { Button, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { Recipie } from "../types/Recipie";
import { apiUrl } from "../constants";

export default function Generator() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [recipies, setRecipies] = useState<Recipie[]>([]);
  const [randomIndexMovies, setRandomIndexMovies] = useState<number>(0);
  const [randomIndexRecipie, setRandomIndexRecipie] = useState<number>(0);

  // fetching movies from endpoint
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/movies`);
        const movies: Movie[] = await response.json();
        setMovies(movies);
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovies();
  }, []);

  // fetching recipies from endpoint
  useEffect(() => {
    const fetchRecipies = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/recipies`);
        const recipies: Recipie[] = await response.json();
        setRecipies(recipies);
      } catch (e) {
        console.log(e);
      }
    };

    fetchRecipies();
  }, []);

  // Generating a random index to select a combo
  function generateDate(): any {
    setRandomIndexRecipie(Math.floor(Math.random() * recipies.length));
    setRandomIndexMovies(Math.floor(Math.random() * movies.length));
  }

  return (
    <VStack gap={2}>
      <Button size="lg" colorScheme="pink" onClick={generateDate}>
        Generer date night
      </Button>
      <br />
      <Text as="b">Middag: </Text>
      <Text as="i">{recipies[randomIndexRecipie]?.name}</Text>
      <br />
      <Text as="b">Film: </Text>
      <Text as="i">{movies[randomIndexMovies]?.name}</Text>
    </VStack>
  );
}
