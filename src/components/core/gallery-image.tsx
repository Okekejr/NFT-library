import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface GalleryImage {
  address: string;
  tokenId: string;
  name: string | null;
  imageUrl: string;
}

export function GalleryImage({
  address,
  tokenId,
  name,
  imageUrl,
}: GalleryImage) {
  return (
    <Box
      _hover={{
        bgGradient: "linear(to-l, #879af2, #d3208b, #fda000)",
      }}
      rounded="2xl"
    >
      <Link as={`/nft/${address}_${tokenId}`} href="/nft/[address]" passHref>
        <Box
          cursor="pointer"
          display="block"
          h={0}
          overflow="hidden"
          paddingBottom="100%"
          position="relative"
          rounded="2xl"
          shadow="2xl"
        >
          <Image
            alt={name ?? tokenId}
            h="full"
            objectFit="cover"
            objectPosition="center"
            position="absolute"
            src={imageUrl}
            w="full"
          />
        </Box>
      </Link>
      <Text fontSize="sm" fontWeight="bold" pl={2} pt={1}>
        {name ?? tokenId}
      </Text>
    </Box>
  );
}
