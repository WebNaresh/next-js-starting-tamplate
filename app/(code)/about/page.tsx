import { NextPage } from "next";
import { aboutData } from "./data";

interface Props {}
export const metadata = {
  title: aboutData.metadata.title,
  description: aboutData.metadata.description,
  openGraph: aboutData.metadata.openGraph,
  twitter: aboutData.metadata.twitter,
};

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1>{aboutData.aboutContent.title.english}</h1>
      <h2>{aboutData.aboutContent.subtitle.english}</h2>
      <p>{aboutData.aboutContent.introduction.english}</p>

      <section>
        <h3>
          {aboutData.aboutContent.sections.earlyLifeAndEducation.title.english}
        </h3>
        <ul>
          {aboutData.aboutContent.sections.earlyLifeAndEducation.content.english.map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </section>
    </div>
  );
};

export default Page;
