import Banner from "./_components/banner";
import Heading from "./_components/heading";
import InfoBanner from "./_components/info_banner";
import { homeData } from "./data";

export const metadata = {
  title: homeData.title.english, // or use "english" logic
  description: homeData.metadata.description.english, // or use language logic
  keywords: homeData.metadata.keywords.english,
  authors: [homeData.metadata.author.english],
  // Other metadata can go here as well
};

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Heading
        heading={homeData.bio.introduction.heading.english}
        highlighted_heading={
          homeData.bio.introduction.highlighted_heading.english
        }
      />
      <InfoBanner />
    </div>
  );
}
