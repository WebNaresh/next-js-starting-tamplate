import { NextPage } from "next";
import { combinedMetadata } from "./data";

interface Props {}
export const metadata = {
  title: combinedMetadata.title.english, // Default language
  description: combinedMetadata.description.english,
  keywords: combinedMetadata.keywords.english,
  // Optionally add more metadata, like Open Graph, Twitter, etc.
  openGraph: {
    title: combinedMetadata.title.english,
    description: combinedMetadata.description.english,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: combinedMetadata.title.english,
    description: combinedMetadata.description.english,
  },
};

const Page: NextPage<Props> = ({}) => {
  return <div>hello</div>;
};

export default Page;
