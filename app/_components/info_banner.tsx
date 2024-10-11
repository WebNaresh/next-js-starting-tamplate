import Image from "next/image";
import { homeData } from "../data";
import { images } from "../image";
import TextHeading from "./who-text";

type Props = {};

const InfoBanner = (props: Props) => {
  return (
    <div className="flex">
      <Image src={images.who[0]} alt="image" width={500} height={500} />
      <div>
        {" "}
        <TextHeading
          heading={homeData.bio.roles[0].organization.english}
          highlighted_heading={homeData.bio.roles[0].title.english}
          direction="flex-row-reverse"
        />
        <p>{homeData.bio.roles[0].description.english}</p>
      </div>
    </div>
  );
};

export default InfoBanner;
