import { NextPage } from "next";
import { combinedMetadata } from "./data";

interface Props {}
export const metadata = {
  title: combinedMetadata.title.english, // Default language
  description: "Contact Page",
};

const Page: NextPage<Props> = ({}) => {
  return <div>data</div>;
};

export default Page;
