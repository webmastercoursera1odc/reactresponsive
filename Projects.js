import React from "react";
import { VStack, SimpleGrid, Box, Heading, Text, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Données des projets
const projects = [
  { id: 1, title: "Projet 1", description: "Description du projet 1" },
  { id: 2, title: "Projet 2", description: "Description du projet 2" },
  { id: 3, title: "Projet 3", description: "Description du projet 3" },
  { id: 4, title: "Projet 4", description: "Description du projet 4" },
];

// Composant Card
function Card({ project }) {
  return (
    <Box
      border="1px solid #ccc"
      borderRadius="md"
      p={4}
      w="100%"
      _hover={{ shadow: "md" }}
    >
      <VStack align="start" spacing={3}>
        <Heading size="md">{project.title}</Heading>
        <Text>{project.description}</Text>
        <HStack spacing={1}>
          <Text>Voir plus</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
}

// Composant Projects
export default function Projects() {
  return (
    <section id="projects-section">
      <VStack spacing={6} p={8} align="start">
        <Heading as="h2" size="xl">Mes Projets</Heading>
        <SimpleGrid columns={[1, 2]} spacing={6} w="100%">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </VStack>
    </section>
  );
}
