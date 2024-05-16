import { Flex, Box, Heading, HStack, Link, Container } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box as="header" bg="gray.800" color="white" p={4}>
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <Heading as="h1" size="lg">Pioneer Template</Heading>
                    <nav>
                        <HStack spacing={4}>
                            <Link href="#home" _hover={{ textDecoration: "underline" }}>Home</Link>
                            <Link href="#features" _hover={{ textDecoration: "underline" }}>Features</Link>
                        </HStack>
                    </nav>
                </Flex>
            </Container>
        </Box>
    );
}
