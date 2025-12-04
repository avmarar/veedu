import { PropsWithChildren, useMemo } from 'react';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

type AppLayoutProps = PropsWithChildren<{
  className?: string;
}>;

const navLinks = [
  { label: 'Buy', href: '/buy' },
  { label: 'Rent', href: '/rent' },
  { label: 'Sell', href: '/sell' },
];

const AppLayout = ({ children, className }: AppLayoutProps) => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Flex direction="column" minH="100vh" bg="gray.50" className={className}>
      <Box as="header" borderBottomWidth="1px" borderColor="gray.200" bg="white">
        <Container maxW="6xl" py={4}>
          <Flex align="center" justify="space-between" gap={6}>
            <Text fontSize="xl" fontWeight="bold" color="brand.600">
              Veedu
            </Text>

            <HStack gap={6} display={{ base: 'none', md: 'flex' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  as={NextLink}
                  href={link.href}
                  fontWeight="medium"
                  color="gray.600"
                  _hover={{ color: 'gray.900' }}
                >
                  {link.label}
                </Link>
              ))}
            </HStack>

            <Button asChild colorScheme="brand" size="sm" borderRadius="full" px={6}>
              <NextLink href="/sell">List Property</NextLink>
            </Button>
          </Flex>
        </Container>
      </Box>

      <Box as="main" flex="1">
        {children}
      </Box>

      <Box
        as="footer"
        borderTopWidth="1px"
        borderColor="gray.200"
        bg="white"
        mt={12}
      >
        <Container maxW="6xl" py={8}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            gap={4}
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
          >
            <Text color="gray.600">&copy; {year} Veedu. All rights reserved.</Text>
            <HStack gap={6}>
              <Link as={NextLink} href="/privacy" color="gray.600">
                Privacy
              </Link>
              <Link as={NextLink} href="/terms" color="gray.600">
                Terms
              </Link>
              <Link
                as="a"
                href="mailto:hello@veedu.app"
                color="gray.600"
                _hover={{ color: 'gray.900' }}
              >
                Contact
              </Link>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Flex>
  );
};

export default AppLayout;
