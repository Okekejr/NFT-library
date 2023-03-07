import { GalleryImage } from "@/components/core/gallery-image";
import { GalleryLayout } from "@/components/layout";
import { RAINBOW_ENDPOINT } from "@/constants/endpoint";
import { Container, Heading } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import type { Rainbow } from "../types/rainbow";

export interface HomePageProps {
  data: Rainbow["results"];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(RAINBOW_ENDPOINT);
  const json = (await response.json()) as Rainbow;

  const data = json.results.filter((val) => {
    return (
      val.asset_contract.chain_identifier === "ethereum" && val.token_id !== "0"
    );
  });

  return {
    props: { data },
  };
};

export default function HomePage({ data }: HomePageProps) {
  return (
    <Container maxW="6xl" py={10}>
      <Heading as="h1" pb={4} size="xl">
        NFT Library
      </Heading>

      <GalleryLayout>
        {data.map((rainbow) => (
          <GalleryImage
            key={rainbow.token_id}
            address={rainbow.asset_contract.address}
            imageUrl={rainbow.metadata.image_url}
            name={rainbow.metadata.name}
            tokenId={rainbow.token_id}
          />
        ))}
      </GalleryLayout>
    </Container>
  );
}
