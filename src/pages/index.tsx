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

      {`
      
      <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQ3LNC5M');</script>
<!-- End Google Tag Manager -->
      `}

      {`
      <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQ3LNC5M"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
      `}
    </div>
  );
};

export default HomePage;
