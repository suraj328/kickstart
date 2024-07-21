import React, { Fragment } from "react";
import AudioWave from "./component/audio/AudioWave";
import { audioConfig } from "./config/audioConfig";
import { Box, Center, Heading, Link, Text, VStack } from "@chakra-ui/react";

export const App: React.FC = function () {
  return (
    <Fragment>
      <AudioWave audioUrl={audioConfig.pikachu} />
      <Center>
        <Box p={4} maxW="md" borderWidth={1} borderRadius="lg" boxShadow="lg">
          <Heading as="h2" size="lg" mb={4}>
            Contact Information
          </Heading>
          <VStack spacing={4} align="start">
            <Text fontSize="md">
              <strong>Name:</strong> Suraj Sah
            </Text>
            <Text fontSize="md">
              <strong>Email:</strong>{" "}
              <Link href="mailto:shahsuraj328@gmail.com" color="teal.500">
                shahsuraj328@gmail.com
              </Link>
            </Text>
            <Text fontSize="md">
              <strong>Phone Number:</strong> 9844551885
            </Text>
            <Box>
              <Text textAlign={"center"} fontSize={"large"}>
                Kick Start File By Suraj Sah ❤️
              </Text>
            </Box>
          </VStack>
        </Box>
      </Center>
    </Fragment>
  );
};
