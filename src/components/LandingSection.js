import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center" py="10px">
      <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7" />
      <Heading as='h2' size='sm'>{greeting}</Heading>
      <Text fontSize="3xl" as="b">{bio1}</Text>
      <Text fontSize="3xl" as="b">{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
