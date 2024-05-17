'use client';
import { LP_GRID_ITEMS } from "lp-items";
import Header from "../components/Header";
import { Button, Box, Container, Flex, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { useOnStartApp } from "../utils/onStart";
import { useState, useEffect } from 'react';
import { usePioneer } from "@coinmasters/pioneer-react";
import {
    Pioneer,
    Basic,
    Portfolio,
    Transfer,
    Assets,
    Asset,
    Amount,
    Swap,
} from '@coinmasters/pioneer-lib';

export default function App() {
    const onStartApp = useOnStartApp();
    const { state } = usePioneer();
    const { app } = state;
    const [selectedAsset, setSelectedAsset] = useState({ });

    useEffect(() => {
        onStartApp();
    }, []);

    useEffect(() => {
        if(app && app.assetContext) setSelectedAsset(app.assetContext)
    }, [app, app?.assetContext]);

    const onClose = () => {
        //console.log("onClose")
    };

    const onSelect = (asset: any) => {
        //console.log("onSelect: ", asset)
    }

    const onAcceptSign = (tx: any) => {
        //console.log("onAcceptSign: ", tx)
    }

    const setInputAmount = (amount: any) => {
        console.log("setInputAmount: ", amount)
    }

    const PIONEER_COMPONENTS = [
        { key: 'basic', component: <Basic usePioneer={usePioneer}/> },
        { key: 'asset', component: <Asset usePioneer={usePioneer} onClose={onClose} onSelect={onSelect} asset={selectedAsset}/> },
        { key: 'amount', component: <Amount usePioneer={usePioneer} onClose={onClose} asset={selectedAsset} setInputAmount={setInputAmount} /> },
        { key: 'assets', component: <Assets usePioneer={usePioneer} onClose={onClose} onSelect={onSelect} filters={{onlyOwned: false, noTokens: false, hasPubkey:true }}/> },
        { key: 'transfer', component: <Transfer usePioneer={usePioneer}/> },
        { key: 'portfolio', component: <Portfolio usePioneer={usePioneer}/> },
        { key: 'swap', component: <Swap usePioneer={usePioneer}/> },
    ];

    return (
        <>
            <Header usePioneer={usePioneer}/>
            <Box as="section" bg="white" _dark={{ bg: "gray.900" }} py={{ base: 8, lg: 16 }}>
                <Container maxW="container.xl" textAlign="center">
                    <Box>
                        <Heading as="h1" size="2xl" mb={4} fontWeight="extrabold" lineHeight="tight">
                            Pioneer Components LIB
                        </Heading>
                        <Text mb={6} fontSize={{ base: "lg", lg: "xl" }} color="gray.500" _dark={{ color: "gray.400" }}>
                            Pioneer is a cryptocurrency sdk and UI Library.
                        </Text>
                        <HStack justify="center" spacing={4}>
                            <Button>
                                Get started
                            </Button>
                            <Button>
                                Deploy Now
                            </Button>
                        </HStack>
                    </Box>
                </Container>
            </Box>
            <Box as="section" bg="white" _dark={{ bg: "gray.900" }} py={{ base: 8, sm: 16 }} px={{ lg: 6 }}>
                <Container maxW="container.xl">
                    <VStack spacing={8} align="stretch" justify="center">
                        <Flex wrap="wrap" justify="center">
                            {PIONEER_COMPONENTS.map((singleItem) => (
                                <Box key={singleItem.key} textAlign="center" flex="1" maxW="sm" p={4}>
                                    {singleItem.component}
                                </Box>
                            ))}
                        </Flex>
                    </VStack>
                </Container>
            </Box>
        </>
    );
}
