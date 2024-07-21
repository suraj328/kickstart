import React from "react";
import { Button, Flex, Stack, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { imageConfig } from "../../config/imageConfig";

export const PageNotFound: React.FC = () => {
  // Define responsive font sizes and margins based on the breakpoint
  const fontSize = useBreakpointValue({ base: "48px", md: "64px" });
  const lineHeight = useBreakpointValue({ base: "71px", md: "95px" });
  const marginBottomHeading = useBreakpointValue({ base: "29px", md: "36px" });
  const marginBottomText = useBreakpointValue({ base: "0", md: "64px" });
  const fontSizeText = useBreakpointValue({ base: "18px", md: "24px" });
  const lineHeightText = useBreakpointValue({ base: "27px", md: "36px" });

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      textAlign="center"
      p={4}
    >
      <Image
        src={imageConfig.crowscare}
        alt="Page not found"
        maxW="540px"
        mb={{ base: "20px", md: "0" }}
      />
      <Stack
        spacing={4}
        textAlign={{ base: "center", md: "left" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Heading
          as="h2"
          fontFamily="Space Mono"
          fontWeight="bold"
          fontSize={fontSize}
          lineHeight={lineHeight}
          letterSpacing="-0.035em"
          color="#333333"
          mb={marginBottomHeading}
        >
          I have bad news for you
        </Heading>
        <Text
          fontFamily="Space Mono"
          fontWeight="normal"
          fontSize={fontSizeText}
          lineHeight={lineHeightText}
          letterSpacing="-0.035em"
          color="#4f4f4f"
          mb={marginBottomText}
        >
          The page you are looking for might be removed or is temporarily unavailable
        </Text>
        <Button
          bgColor="green.400"
          color="white"
          as={Link}
          to="/"
          _hover={{ bgColor: "green.500" }}
        >
          BACK TO HOMEPAGE
        </Button>
      </Stack>
    </Flex>
  );
};
