import React from "react";
import { VStack, Image, Heading, Text } from "@chakra-ui/react";

// Exemple de variables fournies
const greeting = "Bonjour, je suis Moussa !";
const bio1 = "Développeur Front-End passionné par React.";
const bio2 = "J’aime créer des interfaces utilisateur élégantes et intuitives.";

export default function Landing() {
  return (
    <section id="landing">
      <VStack spacing={4} align="center" p={8}>
        <Image
          src="https://i.pravatar.cc/150?img=7"
          alt="avatar"
          borderRadius="full"
          boxSize="150px"
        />
        <Heading as="h1" size="xl">{greeting}</Heading>
        <Text fontSize="md" textAlign="center">{bio1}</Text>
        <Text fontSize="md" textAlign="center">{bio2}</Text>
      </VStack>
    </section>
  );
}
