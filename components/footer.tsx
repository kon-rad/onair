import { ReactNode } from 'react';

import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Image,
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            fontWeight={'500'}
            fontSize={'lg'}
            mb={2}
        >
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <>
            <Box className={'footer'}>
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid
                        templateColumns={{
                            sm: '1fr 1fr',
                            md: '2fr 1fr 1fr 1fr 1fr',
                        }}
                        spacing={8}
                    >
                        <Stack spacing={6}>
                            <Box>
                                <Image
                                    borderRadius="xl"
                                    src="/images/logos/logo1-circle.png"
                                    w="100px"
                                    h="100px"
                                />
                            </Box>
                            <Text fontSize={'sm'}>
                                © 2022 on air All rights
                                reserved
                            </Text>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Links</ListHeader>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Company</ListHeader>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Support</ListHeader>
                        </Stack>
                        <Stack align={'flex-start'}>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    );
}
