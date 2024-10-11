import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdOutlineMouse } from "react-icons/md";
import { homeData } from "../data";
import { images } from "../image";

export default function Banner() {
  return (
    <section className="flex dark:bg-grid-white/[0.2] bg-dot-black/55 pt-8 px-8 w-full justify-center h-max">
      <div className="flex flex-col justify-around h-auto">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl text-primary font-bold">
            {homeData.name["english"]}
          </h1>
          <p className="text-xl font-bold">{homeData.title["english"]}</p>
        </div>
        <div className="flex gap-4">
          <Button size={"lg"} className="gap-4">
            {" "}
            <MdOutlineMouse className="text-xl" />{" "}
            {homeData.navigation.explore["english"]}
          </Button>
          <Button className="bg-white" size={"lg"} variant={"outline"}>
            {homeData.navigation.contactUs["english"]}
          </Button>
        </div>
      </div>
      <Image src={images.banner[0]} alt="image" width={500} height={500} />
    </section>
  );
}
