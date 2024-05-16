import { Metadata } from "next";
import { LP_GRID_ITEMS } from "lp-items";
import { Button, Box, Container, Flex, Heading, Text, VStack, HStack, Link, Icon } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
};

export default function Web() {
  return (
      <>
        <Box as="header" bg="gray.800" color="white" p={4}>
          <Container maxW="container.xl">
            <Flex justify="space-between" align="center">
              <Heading as="h1" size="lg">Enterprise Boilerplate</Heading>
              <nav>
                <HStack spacing={4}>
                  <Link href="#home" _hover={{ textDecoration: "underline" }}>Home</Link>
                  <Link href="#features" _hover={{ textDecoration: "underline" }}>Features</Link>
                </HStack>
              </nav>
            </Flex>
          </Container>
        </Box>
        <Box as="section" bg="white" _dark={{ bg: "gray.900" }} py={{ base: 8, lg: 16 }}>
          <Container maxW="container.xl" textAlign="center">
            <Box>
              <Heading as="h1" size="2xl" mb={4} fontWeight="extrabold" lineHeight="tight">
                Next.js Enterprise Boilerplate
              </Heading>
              <Text mb={6} fontSize={{ base: "lg", lg: "xl" }} color="gray.500" _dark={{ color: "gray.400" }}>
                Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
                Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
                enjoyable development process.
              </Text>
              <HStack justify="center" spacing={4}>
                <Button href="https://github.com/keepkey/keepkey-template" className="mr-3">
                  Get started
                </Button>
                <Button href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise" variant="outline">
                  Deploy Now
                </Button>
              </HStack>
            </Box>
          </Container>
        </Box>
        <Box as="section" bg="white" _dark={{ bg: "gray.900" }} py={{ base: 8, sm: 16 }} px={{ lg: 6 }}>
          <Container maxW="container.xl">
            <VStack spacing={8} align="stretch" justify="center">
              <Flex wrap="wrap" justify="center" spacing={12}>
                {LP_GRID_ITEMS.map((singleItem) => (
                    <Box key={singleItem.title} textAlign="center" flex="1" maxW="sm" p={4}>
                      <Flex justify="center" align="center" mb={4} w={12} h={12} bg="primary.100" color="blue.700" rounded="full" p={1.5}>

                      </Flex>
                      <Heading as="h3" size="md" mb={2}>{singleItem.title}</Heading>
                      <Text color="gray.500" _dark={{ color: "gray.400" }}>{singleItem.description}</Text>
                    </Box>
                ))}
              </Flex>
            </VStack>
          </Container>
        </Box>
      </>
  );
}
