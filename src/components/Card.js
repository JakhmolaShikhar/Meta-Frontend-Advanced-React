import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={4} textalign="left" overflow="hidden" boxShadow="xl" borderRadius="xl" bg="white" color="black">
      <Image src={imageSrc} boxRadius="xl"/>
      <HStack spacing={1} p={2} direction='row'>
        <VStack >
          <Heading textalign="start" size="lg">{title}</Heading>
          <Text mt={4}>{description}</Text>
          <Text p={2} mr={2}>See more {''}
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </Text>
        </VStack>
      </HStack> 
    </VStack>

  );
};

export default Card;
