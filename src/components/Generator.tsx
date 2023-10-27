import { Button, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { apiUrl } from "../constants";

export default function Generator() {
  // fetching random movie
  const {
    data: movie,
    refetch: refetchMovie,
    isError: isErrorMovie,
    isLoading: isLoadingMovie,
  } = useQuery(["Movie"], async () => {
    const res = await fetch(`${apiUrl}/api/movies/random`);
    return await res.json();
  });

  // fetching random recipie
  const {
    data: recipie,
    refetch: refetchRecipie,
    isError: isErrorRecipie,
    isLoading: isLoadingRecipie,
  } = useQuery(["Recipie"], async () => {
    const res = await fetch(`${apiUrl}/api/recipies/random`);
    return await res.json();
  });

  if (isLoadingMovie || isLoadingRecipie) {
    return <Text>Loading...</Text>;
  }

  if (isErrorMovie || isErrorRecipie) {
    return <Text>Woops</Text>;
  }

  return (
    <VStack gap={2}>
      <Button
        size="lg"
        colorScheme="pink"
        onClick={() => {
          refetchMovie();
          refetchRecipie();
        }}>
        Generer date night
      </Button>
      <br />
      <Text as="b">Middag: </Text>
      <Text as="i">{recipie.name}</Text>
      <br />
      <Text as="b">Film: </Text>
      <Text as="i">{movie.name}</Text>
    </VStack>
  );
}
