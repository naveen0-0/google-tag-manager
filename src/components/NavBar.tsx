import { Flex } from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Flex gap="20px" backgroundColor="salmon" p="1.25rem">
      <Link href="/">Home Page</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </Flex>
  );
};

export default NavBar;
