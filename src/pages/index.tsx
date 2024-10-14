import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import natureImg from "@/images/2.jpg";

const HomePage = () => {
  return (
    <div>
      <Box w="full">
        <Image src={natureImg} width="700" height="300" alt="Nature Image" />
        <Text fontSize="3.25rem" fontStyle="bold" px="30px">
          Experience The Nature
        </Text>
      </Box>

      <Flex gap="40px" px="30px" mb="100px">
        <Box>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eum
          nulla quam illum reiciendis praesentium hic molestiae fuga quos, culpa
          repellat aut expedita. Consequuntur, ab vel ratione odio, harum totam
          doloremque ipsam quisquam mollitia, itaque ullam accusantium nulla
          magnam repudiandae!
        </Box>
        <Box>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eum
          nulla quam illum reiciendis praesentium hic molestiae fuga quos, culpa
          repellat aut expedita. Consequuntur, ab vel ratione odio, harum totam
          doloremque ipsam quisquam mollitia, itaque ullam accusantium nulla
          magnam repudiandae!
        </Box>
        <Box>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eum
          nulla quam illum reiciendis praesentium hic molestiae fuga quos, culpa
          repellat aut expedita. Consequuntur, ab vel ratione odio, harum totam
          doloremque ipsam quisquam mollitia, itaque ullam accusantium nulla
          magnam repudiandae!
        </Box>
      </Flex>
    </div>
  );
};

export default HomePage;
