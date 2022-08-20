import {
    Text,
    Image,
    Button,
    Flex,
    LinkBox,
    Spacer,
    Box,
    useMediaQuery,
    Input
  } from "@chakra-ui/react";
  import { Search2Icon } from '@chakra-ui/icons';
  import NextLink from "next/link";
  import Wallet from "./wallet";
  import { AddIcon } from "@chakra-ui/icons";
  import { useAppState } from "../context/appState";
  import { mdiCart } from '@mdi/js';
  import Icon from '@mdi/react'
  
  const Header = () => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");
  
    return (
      <Flex as="header" p={4} alignItems="center" className="header-container">
        <LinkBox cursor="pointer">
          <NextLink href="/" passHref={true}>
            <Flex align="center">
              <Image
                borderRadius="50%"
                mr="4"
                src="/images/logos/logo1.png"
                width="40px"
                height="40px"
              />
            </Flex>
          </NextLink>
        </LinkBox>
        <Spacer />
        <Box mr={4}>
          <Flex justify="center" align="center">
            <Input color="black" borderColor="black" width="300px" mr="4" placeholder="search for merchants" />
            <Button backgroundColor="brand.lowKeyKool" _hover={{ bg: 'brand.lowKeyKoolHover' }} color="black"><Search2Icon /></Button>
          </Flex>
        </Box>
        <Box mr={4}>
          <LinkBox>
            <NextLink href="/cart" passHref={true}>
              <Button bg="gray.700" backgroundColor={"brand.lowKeyKool"}_hover={{ bg: 'brand.lowKeyKoolHover' }} >
                <Flex align="center">
                <Icon path={mdiCart}
                  title="Shopping Cart"
                  size={1}
                  color="black"
                  />
                </Flex>
              </Button>
            </NextLink>
          </LinkBox>
        </Box>
        <Box mr={4}>
          <LinkBox>
            <NextLink href="/create" passHref={true}>
              <Button bg="white" color="brand.lowKeyKool" _hover={{ color: 'brand.lowKeyKoolHover' }} >
                <AddIcon />
              </Button>
            </NextLink>
          </LinkBox>
        </Box>
        <Box>
          <Wallet />
        </Box>
      </Flex>
    );
  };
  
  export default Header;
  