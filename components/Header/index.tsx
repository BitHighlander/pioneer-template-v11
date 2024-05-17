import { Flex, Box, Heading, HStack, Link, Container } from "@chakra-ui/react";
import {
    Pioneer,
} from '@coinmasters/pioneer-lib';

export default function Header({usePioneer}:any) {
    return (
        <Box as="header" bg="gray.800" color="white" p={4}>
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <Heading as="h1" size="lg">Pioneer Template</Heading>
                    <nav>
                        <HStack spacing={4}>
                            <Pioneer usePioneer={usePioneer}></Pioneer>
                            {/*<Link href="#home" _hover={{ textDecoration: "underline" }}>Home</Link>*/}
                            {/*<Link href="#features" _hover={{ textDecoration: "underline" }}>Features</Link>*/}
                        </HStack>
                    </nav>
                </Flex>
            </Container>
        </Box>
    );
}
