import { Text, VStack } from "@chakra-ui/react";

export default function Head() {
  return (
    <VStack>
      <Text fontSize="6xl" fontFamily="Georgia">
        DATE NIGHT!
      </Text>
      <Text width={600} align="center">
        Velkommen til <Text as="i">date night</Text>! Dersom du trykker på
        knappen under vil en date bli generert for deg i form av en middagsrett
        og en film å se på.
      </Text>
    </VStack>
  );
}
