import Head from 'next/head';
import NextLink from 'next/link';
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

const featureHighlights = [
  {
    title: 'Search smarter',
    description: 'Filter listings by neighborhood, lifestyle, pricing, and amenities—all powered by live GraphQL data.',
  },
  {
    title: 'Rent or buy with ease',
    description: 'Compare rentals and homes for sale side by side, complete with trend insights and viewing schedules.',
  },
  {
    title: 'List in minutes',
    description: 'Capture seller leads with guided forms that route into your CRM or email workflows.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Veedu | Buy, Rent, or List Your Next Home</title>
        <meta
          name="description"
          content="Discover verified real-estate listings across rent, buy, and sell journeys with Veedu."
        />
      </Head>

      <Box bgGradient="linear(to-b, white, gray.50)" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Stack gap={8}>
            <Badge alignSelf="flex-start" colorScheme="brand" px={3} py={1} borderRadius="full">
              New · Real-estate GraphQL stack
            </Badge>

            <Stack gap={6}>
              <Heading size="2xl" maxW="3xl">
                Homes that match your life, powered by RapidAPI GraphQL data.
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl">
                Veedu surfaces the most trusted properties to buy or rent while helping sellers list faster.
                Built with Next.js, Chakra UI, and a scalable data layer so the experience feels instant.
              </Text>
            </Stack>

            <Flex gap={4} wrap="wrap">
              <Button asChild colorScheme="brand" size="lg">
                <NextLink href="/search">Explore listings</NextLink>
              </Button>
              <Button asChild size="lg" variant="outline" colorScheme="brand">
                <NextLink href="/sell">List your property</NextLink>
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {featureHighlights.map((feature) => (
            <Box
              key={feature.title}
              p={6}
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="lg"
              bg="white"
              shadow="sm"
            >
              <Heading size="md" mb={3}>
                {feature.title}
              </Heading>
              <Text color="gray.600">{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
