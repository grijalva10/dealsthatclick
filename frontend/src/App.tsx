import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  useBreakpointValue,
  Container,
  Collapse,
  Text,
  VStack,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';

import { AppShell, Page } from '@saas-ui/pro';
import {
  Card,
  CardContainer,
  CardHeader,
  CardTitle,
  CardMedia,
  CardBody,
  CardFooter,
} from '@saas-ui/react'

import React from 'react';


const PropertyCard = ({ property }) => (
  <Card maxW="400px">
    <CardMedia height="256px" bgImage={property.imageUrl} />
    <CardBody>
      <Text fontSize="lg" fontWeight="bold">
        {property.name}
      </Text>
      <Text fontSize="md">{property.location}</Text>
      <Text fontSize="sm" color="gray.500">
        {property.type}
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant="solid" colorScheme="primary">
        View Details
      </Button>
      <Spacer />
      <Text fontSize="md" fontWeight="bold">
        {property.price}
      </Text>
    </CardFooter>
  </Card>
);










const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const displayMenu = useBreakpointValue({ base: 'none', md: 'flex' });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex as="header" borderBottomWidth="1px" py="2" px="4" position="sticky" top="0" alignItems="center" w="100%">
      <Container maxW="container.xl">
        <Flex w="100%">
          <Heading size="md">Dealsthatclick.com</Heading>
          <Spacer />
          <Box display={displayMenu}>
            <Stack as="nav" direction={['column', 'row']} spacing="24px">
              <Link href="#properties">View Properties</Link>
              <Link href="#services">Learn More</Link>
              <Link href="#about">Learn More About Us</Link>
              <Link href="#testimonials">Read More Testimonials</Link>
              <Link href="#blog">Read Our Latest Posts</Link>
              <Link href="#contact">Get in Touch</Link>
            </Stack>
          </Box>
          <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
            <HamburgerIcon boxSize="1.5rem" />
          </Box>
        </Flex>
      </Container>
      <Collapse in={isMenuOpen} animateOpacity>
        <Box
          display={{ base: 'block', md: 'none' }}
          position="absolute"
          top="100%"
          left="0"
          right="0"
          bg="white"
          zIndex="10"
          p="4"
        >
          <Stack as="nav" direction="column" spacing="24px">
            <Link href="#properties" onClick={toggleMenu}>
              View Properties
            </Link>
            <Link href="#services" onClick={toggleMenu}>
              Learn More
            </Link>
            <Link href="#about" onClick={toggleMenu}>
              Learn More About Us
            </Link>
            <Link href="#testimonials" onClick={toggleMenu}>
              Read More Testimonials
            </Link>
            <Link href="#blog" onClick={toggleMenu}>
              Read Our Latest Posts
            </Link>
            <Link href="#contact" onClick={toggleMenu}>
              Get in Touch
            </Link>
          </Stack>
        </Box>
      </Collapse>
    </Flex>
  );
};

const FeaturedProperties = () => (
  <Box mt={12}>
    <Heading as="h2" size="xl" textAlign="center">
      Featured Properties
    </Heading>
    <Text fontSize="lg" textAlign="center" mb={6}>
      Explore some of our top commercial real estate listings
    </Text>
    {/* Add property cards here */}
    <SimpleGrid columns={[1, null, 2]} gap="2">
      {/* Add your Card components here */}
      <PropertyCard
  property={{
    imageUrl: "https://images.crexi.com/assets/849717/67d89ed6471c40bd98c2d110c5f05a4a_3000x2000_resize.jpg",
    name: "Amazing Office Space",
    location: "Downtown, New York",
    type: "Office Space",
    price: "$5,000/month",
  }}
/>
      <PropertyCard
  property={{
    imageUrl: "https://images.crexi.com/assets/849717/67d89ed6471c40bd98c2d110c5f05a4a_3000x2000_resize.jpg",
    name: "Amazing Office Space",
    location: "Downtown, New York",
    type: "Office Space",
    price: "$5,000/month",
  }}
/>


    </SimpleGrid>
  </Box>
);

const OurServices = () => (
  <Box mt={12}>
    <Heading as="h2" size="xl" textAlign="center">
      Our Services
    </Heading>
    <Text fontSize="lg" textAlign="center" mb={6}>
      Discover the wide range of services we provide
    </Text>
    {/* Add service cards here */}
    <SimpleGrid columns={[1, null, 2]} gap="2">
      {/* Add your Card components here */}
    </SimpleGrid>
  </Box>
);

const Testimonials = () => (
  <Box mt={12}>
    <Heading as="h2" size="xl" textAlign="center">
      Testimonials
    </Heading>
    <Text fontSize="lg" textAlign="center" mb={6}>
      Hear from our satisfied clients
    </Text>
    {/* Add testimonials here */}
    <SimpleGrid columns={[1, null, 2]} gap="2">
      {/* Add your Card components here */}
    </SimpleGrid>
  </Box>
);


const Homepage = () => {
  return (
    <Page title="Expert Commercial Real Estate Services" contentWidth="full">
      <Container maxW="container.xl">
        <VStack spacing={6} alignItems="center" mt={12}>
          <Heading as="h1">Expert Commercial Real Estate Services</Heading>
          <Text>
            At dealsthatclick.com, we help you find the best deals in commercial real estate sales,
            leasing, industrial properties, warehouses, land, and 1031 exchanges.
          </Text>
        </VStack>
        {/* New sections added */}
        <FeaturedProperties />
        <OurServices />
        <Testimonials />
      </Container>
    </Page>
  );
};

const App: React.FC = () => {
  return (
    <AppShell navbar={<Navbar />}>
      <Homepage />
    </AppShell>
  );
};

export default App;
