'use client'
import { LP_GRID_ITEMS } from "lp-items";
import Header from "components/header";
import { Button, Box, Container, Flex, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { useOnStartApp } from "../utils/onStart";
import { useState, useEffect } from 'react';
import { usePioneer } from "@coinmasters/pioneer-react"
import {
    Pioneer,
    Basic,
    Portfolio,
    Transfer,
    Assets,
    Asset,
    Amount,
    Quote,
    Quotes,
    Swap,
    Track,
    SignTransaction
} from '@coinmasters/pioneer-lib';

export default function App() {
    const onStartApp = useOnStartApp();
    const { state } = usePioneer();

    useEffect(() => {
        onStartApp();
    }, []);

    return (
        <>
            <Header usePioneer={usePioneer}/>
            <Box as="section" bg="white" _dark={{ bg: "gray.900" }} py={{ base: 8, lg: 16 }}>
                <Container maxW="container.xl" textAlign="center">
                    <Box>
                        <Heading as="h1" size="2xl" mb={4} fontWeight="extrabold" lineHeight="tight">
                            Next.js Enterprise Boilerplate
                        </Heading>
                        <Text mb={6} fontSize={{ base: "lg", lg: "xl" }} color="gray.500" _dark={{ color: "gray.400" }}>

                        </Text>
                        <HStack justify="center" spacing={4}>
                            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
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
